# Hash-Based Sharding

A **hash-based sharding** strategy uses a hash function to distribute data across shards. It ensures even data distribution by transforming a shard key into a hash value, which then maps to a specific shard. This method helps avoid hotspots.

```plaintext
Hash(User ID) % Number of Shards = Shard Index
```

Hash-based sharding is effective for uniform distribution but may complicate range queries.

## Exercise: Build the System

Build an architecture that routes requests to one of multiple database shards using a hash-based sharding strategy. Your diagram must include a shard router that uses a hash function to compute the shard index, and at least three shard databases. Ensure requests can flow from the client to a shard database through the routing layer, and avoid connecting the gateway directly to any database shard.

Available components: Client App, API Gateway, Shard Router, Hash Function, Shard 1 (DB), Shard 2 (DB), Shard 3 (DB)

<details>
<summary>Solution</summary>

Connections:

- Client App → API Gateway
- API Gateway → Shard Router
- Shard Router → Hash Function
- Hash Function → Shard Router
- Shard Router → Shard 1 (DB)
- Shard Router → Shard 2 (DB)
- Shard Router → Shard 3 (DB)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
