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
    if (this.store.has(key)) {
      this.store.delete(key)
    }

    this.store.set(key, value)

    if (this.store.size > this.capacity) {
      this.evictLRU()
    }
  }

  get(key: K): V | undefined {
    const value = this.store.get(key)
    if (value === undefined) return undefined

    this.store.delete(key)
    this.store.set(key, value)
    return value
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
    const lruKey = this.store.keys().next().value as K | undefined
    if (lruKey === undefined) return undefined
    this.store.delete(lruKey)
    return lruKey
  }
}

const cache = new Cache<string, string>(3)
cache.set('user:1', 'Alice')
cache.set('user:2', 'Bob')
cache.set('user:3', 'Cleo')
cache.get('user:1')
cache.set('user:4', 'Drew')
console.log(`Remaining cache keys: ${cache.keys().join(', ')}`)
