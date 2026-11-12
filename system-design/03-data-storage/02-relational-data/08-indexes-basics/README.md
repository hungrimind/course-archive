# Indexes Basics

A **database index** is a data structure that improves the speed of data retrieval operations on a database table. Think of it like an index in a book, helping you quickly find information without scanning every page.

```sql
CREATE INDEX idx_user_email ON users(email);
```

This creates an index on the `email` column of the `users` table, speeding up searches for specific email addresses.

> [!tip]
> Use indexes wisely, as they can slow down write operations and consume extra storage.

## True or False

**1. True or false:** A database index is primarily used to speed up data retrieval operations.

<details>
<summary>Answer</summary>

**True**: An index functions like a roadmap, allowing a database engine to quickly locate and access the requested data without scanning every row.

</details>

**2. True or false:** Creating too many indexes on a table will always improve database performance without any drawbacks.

<details>
<summary>Answer</summary>

**False**: While indexes speed up read operations, they can slow down write operations (such as INSERT, UPDATE, DELETE) and use additional storage. Too many indexes can outweigh the read access speed benefits.

</details>

**3. True or false:** An index on a column can improve the performance of search operations that use that column in the WHERE clause.

<details>
<summary>Answer</summary>

**True**: When a column with an index is used in the WHERE clause of a query, the database engine can quickly locate the rows that match the condition, leading to faster search operations.

</details>

**4. True or false:** Indexes in a database are always created automatically and cannot be controlled by the database administrator.

<details>
<summary>Answer</summary>

**False**: Database administrators can manually create indexes to optimize database performance according to specific query patterns. Some databases may create certain indexes automatically, but manual control is essential for optimization.

</details>

---

[← Course overview](../../../README.md)
