# LRU Policy

A **Least Recently Used (LRU) Policy** evicts the cache item that hasn't been accessed for the longest time. It's useful for keeping frequently accessed data available by prioritizing recent usage.

```typescript
// Evict the least recently used item from the cache
cache.evictLRU();
```

> [!tip]
> LRU is effective when recent data access patterns predict future access, minimizing cache misses.

## Assignment

In the `Cache` class, complete the `evictLRU` method to remove the least recently used item from the cache.

1. Modify the `set` method to call `evictLRU` if the cache exceeds its capacity.
2. Update the `get` method to refresh the access of the retrieved item by moving it to the end of the cache.
3. Ensure that the `evictLRU` method correctly identifies and removes the least recently used item. 

After implementing these changes, the output of `console.log` should correctly show the remaining cache keys.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
