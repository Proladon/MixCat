import { LRUCache } from 'lru-cache'

const options = {
  max: 20,
  ttl: 1000 * 60 * 5,
  allowStale: false,
  updateAgeOnGet: false,
  updateAgeOnHas: false,
}

export const cacheStore = new LRUCache(options)
