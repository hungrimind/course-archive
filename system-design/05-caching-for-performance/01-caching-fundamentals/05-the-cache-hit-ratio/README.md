# The Cache Hit Ratio

A **cache hit ratio** measures how often requests are served from the cache.

- **Cache hit**: the data was found in the cache
- **Cache miss**: the data was not in the cache, so the system had to fetch it from a slower source (like a database)

## The formula

```typescript
const cacheHits = 80;
const totalRequests = 100;

const hitRatio = cacheHits / totalRequests; // 0.8 (80%)
```

## Why it matters
A higher hit ratio usually means:

- **Lower latency** (more requests avoid the database)
- **Lower backend load** (database/CPU/network do less work)

> [!tip]
> Hit ratio is a useful signal, but it’s not the only goal. Caching the “wrong” data can increase complexity without improving user experience.

## True or False

**1. True or false:** A cache hit ratio of 0.8 means that 80% of requests are served from the cache.

<details>
<summary>Answer</summary>

**True**: The cache hit ratio is calculated by dividing the number of cache hits by the total number of requests. A ratio of 0.8 indicates that 80% of the requests are served from the cache.

</details>

**2. True or false:** A high cache hit ratio automatically ensures that the user experience improves.

<details>
<summary>Answer</summary>

**False**: While a high cache hit ratio often leads to lower latency and reduced backend load, it does not guarantee improved user experience if the cached data does not align well with user needs.

</details>

**3. True or false:** If the total number of requests is 200 and cache hits are 100, the hit ratio is 0.5.

<details>
<summary>Answer</summary>

**True**: The hit ratio is calculated by dividing the number of cache hits (100) by the total number of requests (200), which gives a hit ratio of 0.5 or 50%.

</details>

**4. True or false:** The primary goal of caching is to maximize the cache hit ratio.

<details>
<summary>Answer</summary>

**False**: While maximizing the cache hit ratio can be beneficial, the primary goal of caching should be to enhance performance and user experience by caching the right data, not just increasing the hit ratio.

</details>

---

[← Course overview](../../../README.md)
