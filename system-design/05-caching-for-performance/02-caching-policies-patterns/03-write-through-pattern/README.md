# Write-Through Pattern

A **Write-Through Pattern** is a caching strategy where data is simultaneously written to both the cache and the underlying data store. This ensures that the cache always reflects the current state of the data store, providing strong consistency.

```typescript
// Pseudo-code for Write-Through Pattern
function writeData(key: string, value: string) {
  cache[key] = value;
  database.write(key, value);
}
```

> [!note]
> Use the Write-Through Pattern when consistency between cache and data store is critical, but be aware of potential latency due to dual writes.

## True or False

**1. True or false:** In the Write-Through Pattern, data is only written to the cache, not the underlying data store.

<details>
<summary>Answer</summary>

**False**: The Write-Through Pattern involves writing data to both the cache and the underlying data store to ensure strong consistency.

</details>

**2. True or false:** The Write-Through Pattern provides strong consistency between the cache and the underlying data store.

<details>
<summary>Answer</summary>

**True**: Since data is written simultaneously to both the cache and the data store, the cache always reflects the current state of the data store, ensuring strong consistency.

</details>

**3. True or false:** Using the Write-Through Pattern may introduce extra latency due to data being written twice.

<details>
<summary>Answer</summary>

**True**: The Write-Through Pattern writes data to both the cache and the data store, which can increase latency compared to writing to just one storage location.

</details>

**4. True or false:** The Write-Through Pattern is most suitable when the system can tolerate eventual consistency.

<details>
<summary>Answer</summary>

**False**: The Write-Through Pattern is specifically used when strong consistency between the cache and data store is required, not eventual consistency.

</details>

---

[← Course overview](../../../README.md)
