# Why Joins Exist

A **join** combines rows from two or more tables based on a related column, enabling you to retrieve data across multiple tables in one query. This is essential in relational databases where data is normalized, meaning it's distributed across tables to reduce redundancy and improve integrity.

```sql
SELECT orders.id, customers.name
FROM orders
JOIN customers ON orders.customer_id = customers.id;
```

Here, the `JOIN` operation links the `orders` and `customers` tables using the `customer_id` field, allowing simultaneous access to order details and customer names.

## Matching

Sort each item into the right category: **SQL Join Types**, **Normalization Concepts**, **SQL Query Example**

- INNER JOIN
- Improve integrity
- JOIN customers ON orders.customer_id = customers.id
- LEFT JOIN
- RIGHT JOIN
- Reduce redundancy
- SELECT orders.id, customers.name

<details>
<summary>Answer</summary>

**SQL Join Types**
- INNER JOIN
- LEFT JOIN
- RIGHT JOIN

**Normalization Concepts**
- Reduce redundancy
- Improve integrity

**SQL Query Example**
- SELECT orders.id, customers.name
- JOIN customers ON orders.customer_id = customers.id

</details>

---

[← Course overview](../../../README.md)
