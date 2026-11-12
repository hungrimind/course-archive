# Vertical Partitioning

A **vertical partitioning** divides a database table into columns, grouping related columns together. This reduces the amount of data read for specific queries and improves performance for column-specific operations.

```plaintext
Table 1: User IDs, Names
Table 2: User IDs, Addresses
```

Each partition can be stored and accessed independently, optimizing queries that require only certain columns.

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
