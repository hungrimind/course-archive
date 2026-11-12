# TTL & Freshness

A **TTL (Time To Live)** defines how long a cached item remains valid. After the TTL expires, the data is considered stale and should be refreshed from the source.

```typescript
// Example of setting TTL (conceptual)
cache.set(key, value, { ttlMs: 5 * 60 * 1000 }); // 5 minutes
```

> [!note]
> Use TTL to control data freshness, balancing between cache hits and data accuracy.

## True or False

**1. True or false:** TTL is used to determine how long data stays in a cache before it must be refreshed.

<details>
<summary>Answer</summary>

**True**: TTL, or Time To Live, specifies the duration for which cached data remains valid. Once the TTL expires, the data should be fetched again from the source to ensure its accuracy and freshness.

</details>

**2. True or false:** Once the TTL for cached data expires, the data is automatically deleted from the cache.

<details>
<summary>Answer</summary>

**False**: When the TTL expires, the cached data becomes stale, meaning it should be refreshed from the source. It is not necessarily deleted automatically; the cache may simply mark it as expired and either actively remove it or update it upon the next request.

</details>

**3. True or false:** A TTL value of 300,000 milliseconds means the data will be valid for 5 minutes.

<details>
<summary>Answer</summary>

**True**: 300,000 milliseconds is equivalent to 5 minutes. Therefore, setting the TTL to 300,000 milliseconds means the data will remain valid and fresh for a duration of 5 minutes before becoming stale.

</details>

**4. True or false:** Setting a TTL to a longer value always results in better data accuracy.

<details>
<summary>Answer</summary>

**False**: Setting a longer TTL may reduce the number of cache refreshes and increase cache hits, but it can lead to data being outdated or less accurate. TTL should be balanced based on the desired freshness versus performance for the specific use case.

</details>

---

[← Course overview](../../../README.md)
