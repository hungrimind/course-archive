# Cache Stampede

A **cache stampede** occurs when multiple requests trigger a cache refresh simultaneously, overwhelming the data source. This often happens when a popular cached item expires and multiple clients try to access it at once.

```typescript
// Example: Use locking to prevent stampede (conceptual)
if (cache.lock(key)) {
  const value = fetchFromSource();
  cache.set(key, value);
  cache.unlock(key);
}
```

> [!tip]
> Implement locking or use a "stale-while-revalidate" approach to mitigate cache stampedes.

## True or False

**1. True or false:** A cache stampede commonly occurs when multiple clients attempt to refresh a cached item simultaneously after it expires.

<details>
<summary>Answer</summary>

**True**: When a popular cached item expires, many clients may attempt to access it at the same time, leading to simultaneous requests to refresh the cache, which can overload the data source.

</details>

**2. True or false:** Implementing a cache lock completely eliminates the possibility of a cache stampede.

<details>
<summary>Answer</summary>

**False**: While implementing a cache lock can significantly reduce the chances of a cache stampede by ensuring only one request at a time can refresh the cache, it may not completely eliminate the issue without careful implementation and handling of edge cases.

</details>

**3. True or false:** Using the 'stale-while-revalidate' approach allows clients to receive a stale cached item while a background refresh updates the cache.

<details>
<summary>Answer</summary>

**True**: The 'stale-while-revalidate' approach serves stale data to clients while a background process updates the cache, mitigating the load on the data source and reducing the chance of a cache stampede.

</details>

**4. True or false:** Cache locking relies solely on locking the entire cache system, making it an inefficient method to prevent cache stampedes.

<details>
<summary>Answer</summary>

**False**: Cache locking typically targets specific items or keys rather than the entire system, focusing locks on resources that need refreshing and allowing other cache operations to continue, which increases efficiency in preventing stampedes.

</details>

---

[← Course overview](../../../README.md)
