# What is a Cache?

A **cache** is a temporary storage layer that holds copies of data for quick access. It helps reduce latency and server load by serving frequently used data faster than retrieving it from the original source.

```typescript
// Example of caching a user's profile
let cache: { [key: string]: string } = { 'user123': 'Profile Data' };
```

 [!tip]
 Use caching to improve performance by storing the results of expensive operations and reusing them when needed.

## True or False

**1. True or false:** A cache stores data permanently to ensure it's always available.

<details>
<summary>Answer</summary>

**False**: Caches store data temporarily to allow quick access to frequently used data, but it's not meant for permanent storage.

</details>

**2. True or false:** Using a cache can help reduce the load on a server by handling requests for frequently accessed data.

<details>
<summary>Answer</summary>

**True**: By serving cached data, fewer requests need to reach the server, thus reducing server load and improving performance.

</details>

**3. True or false:** Caches always provide the most up-to-date data available from the original source.

<details>
<summary>Answer</summary>

**False**: Since caches store copies, they may not always have the most recent data compared to querying the original source directly.

</details>

**4. True or false:** The example `cache: { [key: string]: string } = { 'user123': 'Profile Data' };` defines a cache that stores user profiles by user ID.

<details>
<summary>Answer</summary>

**True**: This example creates an object that maps user IDs to their profile data, demonstrating a simple caching mechanism.

</details>

---

[← Course overview](../../../README.md)
