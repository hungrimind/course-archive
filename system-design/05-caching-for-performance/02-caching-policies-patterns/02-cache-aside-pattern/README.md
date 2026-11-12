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

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
