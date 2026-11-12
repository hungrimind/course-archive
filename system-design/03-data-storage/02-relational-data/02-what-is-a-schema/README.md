# What is a Schema?

A **schema** defines the structure of a database, specifying how data is organized and what types of data can be stored. It acts like a blueprint for the database, detailing tables, fields, relationships, and constraints.

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);
```

In this schema, the `users` table has fields for `id`, `name`, and `email`, with `id` as the primary key and `email` as unique. This enforces data integrity by ensuring each user's email is distinct.

## Fill in the Blanks

Fill in the blanks:

```sql
CREATE TABLE orders (
    order_id INT __(1)__,
    user_id INT __(2)__ REFERENCES users(id),
    date DATE,
    total DECIMAL(10, 2)
);
```

<details>
<summary>Answer</summary>

1. `PRIMARY KEY`
2. `FOREIGN KEY`

</details>

---

[← Course overview](../../../README.md)
