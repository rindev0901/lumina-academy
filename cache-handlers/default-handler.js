const {
  areTagsExpired,
  areTagsStale,
  tagsManifest,
} = require("./tags-manifest");

/**
 * Default "use cache" handler (in-memory LRU)
 */

/**
 * Node in the doubly-linked list used for LRU tracking.
 */
class LRUNode {
  constructor(key, data, size) {
    this.key = key;
    this.data = data;
    this.size = size;
    this.prev = null;
    this.next = null;
  }
}

/**
 * Sentinel node for head/tail
 */
class SentinelNode {
  constructor() {
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(maxSize, calculateSize, onEvict) {
    this.cache = new Map();
    this.totalSize = 0;
    this.maxSize = maxSize;
    this.calculateSize = calculateSize;
    this.onEvict = onEvict;

    this.head = new SentinelNode();
    this.tail = new SentinelNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addToHead(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  moveToHead(node) {
    this.removeNode(node);
    this.addToHead(node);
  }

  removeTail() {
    const lastNode = this.tail.prev;
    this.removeNode(lastNode);
    return lastNode;
  }

  set(key, value) {
    const size = this.calculateSize ? this.calculateSize(value) : 1;

    if (size <= 0) {
      throw new Error(`LRUCache: calculateSize returned ${size}, must be > 0`);
    }

    if (size > this.maxSize) {
      console.warn("Single item size exceeds maxSize");
      return false;
    }

    const existing = this.cache.get(key);

    if (existing) {
      existing.data = value;
      this.totalSize = this.totalSize - existing.size + size;
      existing.size = size;
      this.moveToHead(existing);
    } else {
      const newNode = new LRUNode(key, value, size);
      this.cache.set(key, newNode);
      this.addToHead(newNode);
      this.totalSize += size;
    }

    while (this.totalSize > this.maxSize && this.cache.size > 0) {
      const tail = this.removeTail();
      this.cache.delete(tail.key);
      this.totalSize -= tail.size;
      if (this.onEvict) {
        this.onEvict(tail.key, tail.data);
      }
    }

    return true;
  }

  has(key) {
    return this.cache.has(key);
  }

  get(key) {
    const node = this.cache.get(key);
    if (!node) return undefined;

    this.moveToHead(node);
    return node.data;
  }

  *[Symbol.iterator]() {
    let current = this.head.next;
    while (current && current !== this.tail) {
      yield [current.key, current.data];
      current = current.next;
    }
  }

  remove(key) {
    const node = this.cache.get(key);
    if (!node) return;

    this.removeNode(node);
    this.cache.delete(key);
    this.totalSize -= node.size;
  }

  get size() {
    return this.cache.size;
  }

  get currentSize() {
    return this.totalSize;
  }
}

const maxSize = 1000000000000000000;

const memoryCache = new LRUCache(maxSize, (entry) => entry.size);
const pendingSets = new Map();

const debug = process.env.NEXT_PRIVATE_DEBUG_CACHE
  ? console.debug.bind(console, "DefaultCacheHandler:")
  : undefined;

module.exports = {
  async get(cacheKey) {
    const pendingPromise = pendingSets.get(cacheKey);

    if (pendingPromise) {
      debug?.("get", cacheKey, "pending");
      await pendingPromise;
    }

    const privateEntry = memoryCache.get(cacheKey);

    if (!privateEntry) {
      debug?.("get", cacheKey, "not found");
      return undefined;
    }

    const entry = privateEntry.entry;

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

    const [returnStream, newSaved] = entry.value.tee();
    entry.value = newSaved;

    return {
      ...entry,
      revalidate,
      value: returnStream,
    };
  },

  async set(cacheKey, pendingEntry) {
    let resolvePending = () => {};
    const pendingPromise = new Promise((resolve) => {
      resolvePending = resolve;
    });

    pendingSets.set(cacheKey, pendingPromise);

    const entry = await pendingEntry;
    let size = 0;

    try {
      const [value, clonedValue] = entry.value.tee();
      entry.value = value;

      const reader = clonedValue.getReader();

      for (let chunk; !(chunk = await reader.read()).done; ) {
        size += Buffer.from(chunk.value).byteLength;
      }

      memoryCache.set(cacheKey, {
        entry,
        isErrored: false,
        errorRetryCount: 0,
        size,
      });
    } finally {
      resolvePending();
      pendingSets.delete(cacheKey);
    }
  },

  async refreshTags() {},

  async getExpiration(tags) {
    const expirations = tags.map((tag) => {
      const entry = tagsManifest.get(tag);
      if (!entry) return 0;
      return entry.expired || 0;
    });

    return Math.max(...expirations, 0);
  },

  async updateTags(tags, durations) {
    const now = Math.round(performance.timeOrigin + performance.now());

    for (const tag of tags) {
      const existingEntry = tagsManifest.get(tag) || {};

      if (durations) {
        const updates = { ...existingEntry };
        updates.stale = now;

        if (durations.expire !== undefined) {
          updates.expired = now + durations.expire * 1000;
        }

        tagsManifest.set(tag, updates);
      } else {
        tagsManifest.set(tag, {
          ...existingEntry,
          expired: now,
        });
      }
    }
  },
};
