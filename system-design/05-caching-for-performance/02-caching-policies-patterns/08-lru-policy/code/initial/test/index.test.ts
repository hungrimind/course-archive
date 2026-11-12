import { describe, test, expect } from 'vitest'
import { execSync } from 'node:child_process'
import { Cache } from '../src/index.js'

describe('LRU Policy', () => {
  test('evictLRU removes the least recently used item', () => {
    const cache = new Cache<string, number>(3)
    cache.set('a', 1)
    cache.set('b', 2)
    cache.set('c', 3)

    cache.get('a')

    const evicted = cache.evictLRU()
    expect(evicted).toBe('b')
    expect(cache.has('b')).toBe(false)
    expect(cache.has('a')).toBe(true)
    expect(cache.has('c')).toBe(true)
  })

  test('get marks an item as most recently used', () => {
    const cache = new Cache<string, number>(3)
    cache.set('a', 1)
    cache.set('b', 2)
    cache.set('c', 3)

    cache.get('a')
    expect(cache.keys()).toEqual(['b', 'c', 'a'])
  })

  test('set beyond capacity evicts LRU automatically', () => {
    const cache = new Cache<string, number>(2)
    cache.set('a', 1)
    cache.set('b', 2)
    cache.set('c', 3)

    expect(cache.has('a')).toBe(false)
    expect(cache.has('b')).toBe(true)
    expect(cache.has('c')).toBe(true)
    expect(cache.size()).toBe(2)
  })

  test('program output shows LRU behavior', () => {
    const out = execSync('npx ts-node src/index.ts', { encoding: 'utf8' }).trim()
    expect(out).toBe('Remaining cache keys: user:3, user:1, user:4')
  })
})
