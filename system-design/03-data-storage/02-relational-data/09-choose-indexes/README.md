# Choose Indexes

A **database index** should be chosen based on the queries you need to optimize. Identify the columns frequently used in WHERE clauses, JOIN conditions, or as part of ORDER BY operations.

```sql
CREATE INDEX idx_order_date ON orders(order_date);
```

This index on `order_date` speeds up queries filtering or sorting by order date.

> [!warning]
> Over-indexing can degrade performance by slowing down writes and increasing storage use. Choose indexes that provide the most benefit for your query patterns.

## Exercise: Build the System

Build a small diagram showing how index selection should be driven by your application’s query workload. Include the query patterns (WHERE/JOIN/ORDER BY), the orders table, and an index on orders(order_date). Ensure there is a decision flow from the app workload to the index choice, and connect the index to the table it indexes. Do not connect the workload directly to the index without going through query patterns.

Available components: App Query Workload, WHERE / JOIN / ORDER BY Patterns, orders Table, Index: orders(order_date), Write Path (INSERT/UPDATE), Over-Indexing (Too Many Indexes)

<details>
<summary>Solution</summary>

Connections:

- App Query Workload → WHERE / JOIN / ORDER BY Patterns
- WHERE / JOIN / ORDER BY Patterns → Index: orders(order_date)
- Index: orders(order_date) → orders Table

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
