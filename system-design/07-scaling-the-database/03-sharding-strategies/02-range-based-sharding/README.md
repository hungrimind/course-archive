# Range-Based Sharding

A **range-based sharding** strategy divides data into shards based on a specific range of values. This method is ideal when data naturally fits into ordered ranges, like dates or numeric IDs.

```plaintext
Shard 1: Users with IDs 1-1000
Shard 2: Users with IDs 1001-2000
```

Range-based sharding simplifies queries that need sorted data but can lead to uneven load if data growth is skewed.

## Exercise: Build the System

Build a range-based sharding architecture for user data. Include a routing component that maps user ID ranges to the correct shard, use at least two shards, ensure the client reaches shards through the router (not directly), connect the router to a shard map/config, and include a rebalancing/splitting job to handle uneven growth.

Available components: Client / App, Query Router (Range Mapper), Shard Map / Config, Shard 1 (IDs 1–1000), Shard 2 (IDs 1001–2000), Rebalance / Split Job

<details>
<summary>Solution</summary>

Connections:

- Client / App → Query Router (Range Mapper)
- Query Router (Range Mapper) → Shard 1 (IDs 1–1000)
- Query Router (Range Mapper) → Shard 2 (IDs 1001–2000)
- Query Router (Range Mapper) → Shard Map / Config
- Rebalance / Split Job → Shard Map / Config
- Rebalance / Split Job → Shard 1 (IDs 1–1000)
- Rebalance / Split Job → Shard 2 (IDs 1001–2000)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
