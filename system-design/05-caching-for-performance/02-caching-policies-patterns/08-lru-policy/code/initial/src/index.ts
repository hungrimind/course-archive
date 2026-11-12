export class Cache<K, V> {
  private readonly capacity: number
  private readonly store: Map<K, V>

  constructor(capacity: number) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error('capacity must be a positive integer')
    }
    this.capacity = capacity
    this.store = new Map<K, V>()
  }

  set(key: K, value: V): void {
    // naive: doesn't update recency when overwriting
    this.store.set(key, value)

    // naive eviction: removes an arbitrary key, not the least recently used
    if (this.store.size > this.capacity) {
      const firstKey = Array.from(this.store.keys())[0] as K | undefined
      if (firstKey !== undefined) {
        this.store.delete(firstKey)
      }
    }
  }

  get(key: K): V | undefined {
    // naive: doesn't update recency on access
    return this.store.get(key)
  }

  has(key: K): boolean {
    return this.store.has(key)
  }

  size(): number {
    return this.store.size
  }

  keys(): K[] {
    return Array.from(this.store.keys())
  }

  evictLRU(): K | undefined {
    // ?
    return undefined
  }
}

const cache = new Cache<string, string>(3)
cache.set('user:1', 'Alice')
cache.set('user:2', 'Bob')
cache.set('user:3', 'Cleo')
cache.get('user:1')
cache.set('user:4', 'Drew')
console.log(`Remaining cache keys: ${cache.keys().join(', ')}`)
