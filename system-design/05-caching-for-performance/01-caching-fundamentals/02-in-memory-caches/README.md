# In-Memory Caches

An **in-memory cache** stores data directly in a system's RAM, providing extremely fast data retrieval compared to disk-based storage. It's ideal for caching frequently accessed data to enhance performance.

```typescript
// Storing data in an in-memory cache
const inMemoryCache: Record<string, string> = { user123: 'Profile Data' };
```

> [!tip]
> In-memory caches offer speed but are volatile; data is lost if the system restarts. Use them for transient, non-critical data.

## True or False

**1. True or false:** An in-memory cache stores data on disk for long-term persistence.

<details>
<summary>Answer</summary>

**False**: An in-memory cache stores data in RAM, not on disk, which makes it fast but volatile. Data is lost when the system restarts.

</details>

**2. True or false:** In-memory caches are ideal for storing frequently accessed data to improve application performance.

<details>
<summary>Answer</summary>

**True**: By storing frequently accessed data in RAM, applications can retrieve it quickly, significantly improving performance compared to accessing data from disk.

</details>

**3. True or false:** Data stored in an in-memory cache is retained even after a system reboot.

<details>
<summary>Answer</summary>

**False**: In-memory caches are volatile, meaning data is lost when the system is restarted or crashes, unlike persistent storage solutions.

</details>

**4. True or false:** In-memory caches should not be used for critical data that cannot be lost.

<details>
<summary>Answer</summary>

**True**: Due to their volatile nature, in-memory caches are best suited for transient data that can be regenerated or fetched again, not for storing critical data that needs to be persistent.

</details>

---

[← Course overview](../../../README.md)
