# Shard Key Checklist

A **shard key** is a field used to determine how data is distributed across different shards in a database. A good shard key ensures balanced data distribution and optimal performance.

> [!tip]
> Choose a shard key with high cardinality to avoid hotspots, ensuring even data distribution.

Consider these factors when selecting a shard key:

1. **Even Distribution**: Ensure data spreads evenly across shards.
2. **Query Patterns**: Align with common query patterns for efficient access.
3. **Low Skew**: Avoid keys that lead to uneven load or storage.

A poor shard key can cause bottlenecks and degrade performance, resulting in uneven server load and slower queries.

## Quiz

**1. What is the purpose of a shard key in a database?**

- A) To encrypt data before storage
- B) To determine how data is distributed across different shards
- C) To index all the data in the database
- D) To provide backup for the database

<details>
<summary>Answer</summary>

- B) To determine how data is distributed across different shards

A shard key is used to distribute data across various shards in a database system, which helps manage the data's load and access effectively.

</details>

**2. Why is high cardinality important for a shard key?**

- A) It ensures more unique keys, avoiding hotspots and ensuring even distribution.
- B) It allows for easier encryption of data.
- C) It reduces the memory needed to store the keys.
- D) It simplifies the database schema.

<details>
<summary>Answer</summary>

- A) It ensures more unique keys, avoiding hotspots and ensuring even distribution.

High cardinality means having a wide range of unique values, which helps distribute data evenly across shards, preventing hotspots.

</details>

**3. What can result from a poor choice of shard key?**

- A) Efficient data encryption
- B) Centralized data tracking
- C) Bottlenecks and degraded performance
- D) Simplified query optimization

<details>
<summary>Answer</summary>

- C) Bottlenecks and degraded performance

A poor shard key choice can lead to bottlenecks and degraded performance due to uneven server load and slower query processing.

</details>

**4. Which factor should be considered when aligning shard key selection?**

- A) Database server manufacturer
- B) Query patterns for efficient access
- C) Color of the database interface
- D) Frequency of database updates

<details>
<summary>Answer</summary>

- B) Query patterns for efficient access

Selecting a shard key that aligns with common query patterns ensures efficient data retrieval and overall database performance.

</details>

---

[← Course overview](../../../README.md)
