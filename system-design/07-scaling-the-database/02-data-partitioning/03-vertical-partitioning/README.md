# Vertical Partitioning

A **vertical partitioning** divides a database table into columns, grouping related columns together. This reduces the amount of data read for specific queries and improves performance for column-specific operations.

```plaintext
Table 1: User IDs, Names
Table 2: User IDs, Addresses
```

Each partition can be stored and accessed independently, optimizing queries that require only certain columns.

## Exercise: Build the System

Build a vertically partitioned user data design where the application sends requests through a router and can reach two separate partitions: one holding (user id, name) and another holding (user id, address). Ensure requests flow from the client through the router (not directly to partitions), and do not include a single monolithic users table.

Available components: Application / Client, Query Router, User Core Partition (id, name), User Address Partition (id, address), Join / Aggregator, Monolithic Users Table (anti-pattern)

<details>
<summary>Solution</summary>

Connections:

- Application / Client → Query Router
- Query Router → User Core Partition (id, name)
- Query Router → User Address Partition (id, address)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
