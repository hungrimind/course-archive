# Cache-Aside Pattern

A **Cache-Aside Pattern** is a caching strategy where the application is responsible for loading data into the cache as needed. When the application needs data, it first checks the cache. If the data is not present (a cache miss), the application fetches it from the data source, places it in the cache, and then returns it.

```typescript
// Pseudo-code for Cache-Aside Pattern
function getData(key: string): string {
    if (cache.has(key)) {
        return cache.get(key); // Cache hit
    }
    const data = database.fetch(key); // Cache miss
    cache.set(key, data);
    return data;
}
```

> [!note]
> The Cache-Aside Pattern is beneficial for data that doesn't change frequently, allowing the cache to remain current without complex invalidation logic.

## Exercise: Build the System

Build a cache-aside read path: add an Application Service that the Client can reach, and connect the app to both a Cache and a Database so the app can check the cache first and fall back to the database on a miss.

Available components: Client, Application Service, Cache (Redis/Memcached), Database, Metrics/Logging

<details>
<summary>Solution</summary>

Connections:

- Client → Application Service
- Application Service → Cache (Redis/Memcached)
- Application Service → Database
- Application Service → Metrics/Logging

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
