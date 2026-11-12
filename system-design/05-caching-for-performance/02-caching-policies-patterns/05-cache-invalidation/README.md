# Cache Invalidation

A **cache invalidation** strategy decides **when cached data should be removed or updated** so users don’t see stale results for too long.

This is hard because your cache and your database can change at different times.

## Two common beginner strategies

### 1) TTL (time-to-live)
You set an expiration time on cached data.

- ✅ Simple and reliable
- ⚠️ You can serve **stale data** until the TTL expires

### 2) Explicit invalidation (update-on-write)
When the database changes, you remove/update the cache entry.

- ✅ Fresher data (less staleness)
- ⚠️ More moving parts: if you forget to invalidate, the cache can stay wrong

```typescript
// Conceptual explicit invalidation
cache.remove(key);
```

> [!warning]
> Cache invalidation is notoriously difficult because it’s easy to miss an update path. Many systems start with TTLs, then add explicit invalidation only where staleness is unacceptable.

## True or False

**1. True or false:** TTL is a cache invalidation strategy that ensures data is always fresh.

<details>
<summary>Answer</summary>

**False**: TTL stands for time-to-live and only sets an expiration time on cached data. Although simple, it can lead to stale data until the expiration time is reached.

</details>

**2. True or false:** Explicit invalidation requires that the cache is updated every time the database changes.

<details>
<summary>Answer</summary>

**True**: Explicit invalidation involves manually removing or updating cache entries when the database is modified. This ensures fresher data but requires careful management to ensure all changes are captured.

</details>

**3. True or false:** TTL cache invalidation is typically more complex to implement than explicit invalidation.

<details>
<summary>Answer</summary>

**False**: TTL is simpler to implement as it only involves setting an expiration time for cache entries, whereas explicit invalidation requires additional mechanisms to track and update cache changes.

</details>

**4. True or false:** A hybrid strategy that starts with TTL and introduces explicit invalidation where needed can be effective.

<details>
<summary>Answer</summary>

**True**: Starting with TTL provides a simple foundation, and explicit invalidation can be added for situations where staleness is unacceptable, balancing simplicity and freshness.

</details>

---

[← Course overview](../../../README.md)
