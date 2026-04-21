const {
  areTagsExpired,
  areTagsStale,
  tagsManifest,
} = require("./tags-manifest");

const { createClient } = require("redis");

const client = createClient({ url: process.env.NEXT_PRIVATE_REDIS_URL });
client.connect();

const debug = process.env.NEXT_PRIVATE_DEBUG_CACHE
  ? console.debug.bind(console, "RedisCacheHandler:")
  : undefined;

module.exports = {
  /*
    - hàm get sẽ call tại thời điểm build time để prerendering nếu không tìm thấy hoặc tags bị expired, revalidate
    sẽ gọi hàm set để persist data vào trong redis
    - hàm updateTags thực hiện cập nhật expired, revalidate vào tags-manifest và redis (keyspace: revalidated-tags)
    - hàm refreshTags dùng để đồng bộ tags trong redis vào trong tags-manifest ở local in-memory
    phục vụ cho việc share tags giữa các cache handlers được gọi trước khi bắt đầu 1 request mới 
    sau khi updateTags được call
  */
  async get(cacheKey, _softTags) {
    // Retrieve from Redis
    const stored = await client.get(cacheKey);

    console.log(stored);

    if (!stored) return undefined;

    // Deserialize the entry
    const entry = JSON.parse(stored);

    if (!entry) {
      debug?.("get", cacheKey, "not found");
      return undefined;
    }

    if (
      performance.timeOrigin + performance.now() >
      entry.timestamp + entry.revalidate * 1000
    ) {
      debug?.("get", cacheKey, "expired");
      return undefined;
    }

    let revalidate = entry.revalidate;

    if (areTagsExpired(entry.tags, entry.timestamp)) {
      debug?.("get", cacheKey, "had expired tag");
      return undefined;
    }

    if (areTagsStale(entry.tags, entry.timestamp)) {
      debug?.("get", cacheKey, "had stale tag");
      revalidate = -1;
    }

    // Reconstruct the ReadableStream from stored entry
    return {
      value: new ReadableStream({
        start(controller) {
          controller.enqueue(Buffer.from(entry.value, "base64"));
          controller.close();
        },
      }),
      tags: entry.tags,
      stale: entry.stale,
      timestamp: entry.timestamp,
      expire: entry.expire,
      revalidate,
    };
  },

  async set(cacheKey, pendingEntry) {
    const entry = await pendingEntry;
    // Read the stream to get the data
    const reader = entry.value.getReader();
    const chunks = [];

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
      }
    } finally {
      reader.releaseLock();
    }

    // Combine chunks and serialize for Redis storage
    const data = Buffer.concat(chunks.map((chunk) => Buffer.from(chunk)));

    await client.set(
      cacheKey,
      JSON.stringify({
        value: data.toString("base64"),
        tags: entry.tags,
        stale: entry.stale,
        timestamp: entry.timestamp,
        expire: entry.expire,
        revalidate: entry.revalidate,
      }),
      { EX: entry.expire }, // Use Redis TTL for automatic expiration
    );
  },

  async refreshTags() {
    // Sync tag invalidation timestamps from Redis
    // Using a dedicated set to track tag keys avoids scanning the keyspace
    const tagKeys = await client.sMembers("revalidated-tags");
    if (tagKeys.length > 0) {
      const values = await client.mGet(tagKeys.map((k) => `tag:${k}`));
      for (let i = 0; i < tagKeys.length; i++) {
        tagsManifest.set(tagKeys[i], JSON.parse(values[i]));
      }
    }
  },

  async getExpiration(tags) {
    const expirations = tags.map((tag) => {
      const entry = tagsManifest.get(tag);
      if (!entry) return 0;
      return entry.expired || 0;
    });

    return Math.max(...expirations, 0);
  },

  async updateTags(tags, durations) {
    const now = Date.now();
    const pipeline = client.multi();
    for (const tag of tags) {
      pipeline.sAdd("revalidated-tags", tag);
      const existingEntry = tagsManifest.get(tag) || {};

      if (durations) {
        const updates = { ...existingEntry };
        updates.stale = now;

        if (durations.expire !== undefined) {
          updates.expired = now + durations.expire * 1000;
        }

        pipeline.set(`tag:${tag}`, JSON.stringify(updates));
      } else {
        pipeline.set(`tag:${tag}`, {
          ...existingEntry,
          expired: now,
        });
      }
    }
    await pipeline.exec();
  },
};
