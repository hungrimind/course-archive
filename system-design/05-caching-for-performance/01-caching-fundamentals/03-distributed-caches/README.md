# Distributed Caches

A **distributed cache** is a cache that runs on **multiple machines** instead of a single in-process (local) cache.

It’s used when you need one or more of these:

- **More memory than one server has** (scale)
- **Shared cache across many app servers** (consistency of performance)
- **High availability** (a cache node can fail and the system still works)

## Two common shapes

### 1) Partitioned (sharded) cache
Each cache node stores **a subset** of keys.

- ✅ Scales memory and throughput well
- ⚠️ If a node fails, you may temporarily lose the keys that lived there (unless you add replication)

### 2) Replicated cache
Multiple nodes store **the same** keys.

- ✅ Better fault tolerance for cached data
- ⚠️ Uses more memory and can be harder to keep perfectly in sync

```typescript
// Conceptual example: a partitioned cache
// Node 1 stores some keys
const node1Cache: Record<string, string> = { user123: "Profile Data" };

// Node 2 stores other keys
const node2Cache: Record<string, string> = { user124: "Profile Data" };
```

> [!note]
> In real systems, your app usually talks to the distributed cache through a client library (or a proxy) that knows which node to use for a given key.

## Exercise: Build the System

Build a distributed-cache architecture where client requests reach the application tier, the application uses a cache client/proxy layer (not direct cache-node connections), and the cache is distributed across multiple cache nodes. Ensure the application can still read from the primary database, and avoid cache nodes talking directly to the database.

Available components: Client, Load Balancer, App Server Fleet, Cache Client Library / Proxy, Cache Node, Primary Database

<details>
<summary>Solution</summary>

Connections:

- Client → Load Balancer
- Load Balancer → App Server Fleet
- App Server Fleet → Cache Client Library / Proxy
- Cache Client Library / Proxy → Cache Node
- Cache Client Library / Proxy → Cache Node
- App Server Fleet → Primary Database

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
