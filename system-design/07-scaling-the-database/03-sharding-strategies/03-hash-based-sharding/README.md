# Hash-Based Sharding

A **hash-based sharding** strategy uses a hash function to distribute data across shards. It ensures even data distribution by transforming a shard key into a hash value, which then maps to a specific shard. This method helps avoid hotspots.

```plaintext
Hash(User ID) % Number of Shards = Shard Index
```

Hash-based sharding is effective for uniform distribution but may complicate range queries.

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
