# Cross-Shard Queries

A **cross-shard query** is a query that needs data from **more than one shard**.

This is usually slower and more complex than a single-shard query.

## Why cross-shard queries are expensive

1) **Scatter-gather**
The system may have to send the query to many shards and then merge the results.

2) **More network hops**
Instead of one database call, you now do multiple calls across the network.

3) **Harder joins/transactions**
Joins and transactions across shards are difficult (or unsupported), so you often need extra application logic.

> [!warning]
> Cross-shard queries often show up when your shard key doesn’t match your most common query patterns.

## A simple mitigation
Pick a shard key that keeps your most common queries **single-shard** (for example, sharding by `user_id` if most reads are “get everything for this user”).

## Exercise: Build the System

Build a sharded query path that highlights why cross-shard queries are expensive. Include an API Service and a Query Router, and model cross-shard reads by using at least two database shards plus a scatter-gather/merge component. Ensure the API Service does not connect directly to any shard.

Available components: Client, API Service, Query Router, Shard 1 DB, Shard 2 DB, Scatter-Gather / Merge, Shard Key Directory

<details>
<summary>Solution</summary>

Connections:

- Client → API Service
- API Service → Query Router
- Query Router → Shard Key Directory
- Query Router → Scatter-Gather / Merge
- Scatter-Gather / Merge → Shard 1 DB
- Scatter-Gather / Merge → Shard 2 DB
- Scatter-Gather / Merge → API Service

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
