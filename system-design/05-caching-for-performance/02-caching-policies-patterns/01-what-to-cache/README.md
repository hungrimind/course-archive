# What to Cache

A **cache** stores frequently accessed data to improve retrieval speed. But what should you cache? Prioritize caching data that is expensive to compute, frequently requested, or slow to access.

```typescript
// Example: Cache user profile data
type UserProfileCache = { [key: string]: string };
const userProfileCache: UserProfileCache = { 'user123': 'John Doe' };
```

> [!tip]
> Cache data with high read frequency and low change frequency to maximize efficiency and minimize staleness.

## True or False

**1. True or false:** Data that changes frequently should be prioritized for caching.

<details>
<summary>Answer</summary>

**False**: Frequently changing data can become stale quickly if cached, reducing efficiency. It's better to cache data that changes infrequently to maintain cache validity.

</details>

**2. True or false:** Caching improves retrieval speed by storing frequently accessed data in memory.

<details>
<summary>Answer</summary>

**True**: Caching stores data in a way that allows for quicker retrieval compared to fetching it from a slower, original data source.

</details>

**3. True or false:** Data that is expensive to compute should not be cached, as it is often unique to each request.

<details>
<summary>Answer</summary>

**False**: Expensive-to-compute data should be cached if it is reused frequently, to avoid repeated computation costs.

</details>

**4. True or false:** To minimize staleness, it is recommended to cache data with high read frequency and low change frequency.

<details>
<summary>Answer</summary>

**True**: Data with high read frequency and low change frequency is ideal for caching because it maximizes efficiency while reducing the risk of serving outdated information.

</details>

---

[← Course overview](../../../README.md)
