// tags-manifest.js

// We share the tags manifest between cache handlers
const tagsManifest = new Map();

const areTagsExpired = (tags, timestamp) => {
  for (const tag of tags) {
    const entry = tagsManifest.get(tag);
    const expiredAt = entry?.expired;

    if (typeof expiredAt === "number") {
      const now = Date.now();

      // expired after entry was created AND already passed current time
      const isImmediatelyExpired = expiredAt <= now && expiredAt > timestamp;

      if (isImmediatelyExpired) {
        return true;
      }
    }
  }

  return false;
};

const areTagsStale = (tags, timestamp) => {
  for (const tag of tags) {
    const entry = tagsManifest.get(tag);
    const staleAt = entry?.stale ?? 0;

    if (typeof staleAt === "number" && staleAt > timestamp) {
      return true;
    }
  }

  return false;
};

module.exports = {
  tagsManifest,
  areTagsExpired,
  areTagsStale,
};
