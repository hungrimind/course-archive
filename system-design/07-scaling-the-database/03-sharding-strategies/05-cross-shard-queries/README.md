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

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
