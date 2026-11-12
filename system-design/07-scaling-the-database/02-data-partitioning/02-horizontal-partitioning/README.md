# Horizontal Partitioning

A **horizontal partitioning** (or sharding) splits a database table into rows, spreading data across multiple servers to enhance performance and scalability. Each shard contains a subset of the data, often based on a logical division like user IDs.

```plaintext
Server 1: Users 1-1000
Server 2: Users 1001-2000
```

This approach allows parallel processing of queries and can handle more traffic by adding more servers.

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
