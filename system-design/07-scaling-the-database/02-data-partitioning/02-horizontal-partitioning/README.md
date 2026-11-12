# Horizontal Partitioning

A **horizontal partitioning** (or sharding) splits a database table into rows, spreading data across multiple servers to enhance performance and scalability. Each shard contains a subset of the data, often based on a logical division like user IDs.

```plaintext
Server 1: Users 1-1000
Server 2: Users 1001-2000
```

This approach allows parallel processing of queries and can handle more traffic by adding more servers.

## Exercise: Build the System

Build a horizontally partitioned (sharded) database access flow. Your diagram must include an API layer, a shard router that uses a shard key map/config, and at least two shard databases representing different user_id ranges. Ensure the client can reach each shard through the API and router, and avoid connecting the API directly to any shard database.

Available components: Client App, API Service, Shard Router, Shard 1 DB (Users 1–1000), Shard 2 DB (Users 1001–2000), Shard Key Map / Config

<details>
<summary>Solution</summary>

Connections:

- Client App → API Service
- API Service → Shard Router
- Shard Router → Shard Key Map / Config
- Shard Router → Shard 1 DB (Users 1–1000)
- Shard Router → Shard 2 DB (Users 1001–2000)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
