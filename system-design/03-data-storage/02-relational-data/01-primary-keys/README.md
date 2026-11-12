# Primary Keys

A **primary key** is a unique identifier for a record in a relational database table. It ensures each record can be uniquely distinguished from others.

```sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);
```

In this example, `id` is the primary key, ensuring each user has a unique identifier.

> [!note]
> A primary key can't be NULL and must contain unique values.

## Fill in the Blanks

Fill in the blanks:

```sql
CREATE TABLE orders (
  order_id INT __(1)__,
  customer_id INT,
  product_name VARCHAR(100)
);

-- Ensure that __(2)__ is unique for each record
```

<details>
<summary>Answer</summary>

1. `PRIMARY KEY`
2. `order_id`

</details>

---

[← Course overview](../../../README.md)
