# Choose Indexes

A **database index** should be chosen based on the queries you need to optimize. Identify the columns frequently used in WHERE clauses, JOIN conditions, or as part of ORDER BY operations.

```sql
CREATE INDEX idx_order_date ON orders(order_date);
```

This index on `order_date` speeds up queries filtering or sorting by order date.

> [!warning]
> Over-indexing can degrade performance by slowing down writes and increasing storage use. Choose indexes that provide the most benefit for your query patterns.

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
