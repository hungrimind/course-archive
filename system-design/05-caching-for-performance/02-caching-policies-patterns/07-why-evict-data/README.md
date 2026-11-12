# Why Evict Data

A **data eviction** strategy is essential to manage cache size and optimize performance. Eviction removes less critical data to make room for new entries, ensuring the cache remains efficient.

> [!note]
> Without eviction, a cache could grow indefinitely, leading to memory issues and decreased performance.

## Exercise: Build the System

Build a caching setup where the client reads through an in-memory cache backed by a database, and the cache has an explicit eviction policy to prevent unbounded growth. Ensure the client talks to the cache (not directly to the database), connect the cache to the database for cache misses, and wire an eviction policy into the cache so entries can be removed when the cache is full or data expires.

Available components: Client, In-Memory Cache, Eviction Policy (LRU/TTL), Metrics & Alerts, Database (Source of Truth)

<details>
<summary>Solution</summary>

Connections:

- Client → In-Memory Cache
- Eviction Policy (LRU/TTL) → In-Memory Cache
- In-Memory Cache → Database (Source of Truth)
- In-Memory Cache → Metrics & Alerts

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
