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

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
