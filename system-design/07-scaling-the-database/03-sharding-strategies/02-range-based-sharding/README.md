# Range-Based Sharding

A **range-based sharding** strategy divides data into shards based on a specific range of values. This method is ideal when data naturally fits into ordered ranges, like dates or numeric IDs.

```plaintext
Shard 1: Users with IDs 1-1000
Shard 2: Users with IDs 1001-2000
```

Range-based sharding simplifies queries that need sorted data but can lead to uneven load if data growth is skewed.

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
