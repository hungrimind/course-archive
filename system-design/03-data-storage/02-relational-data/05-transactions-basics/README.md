# Transactions Basics

A **transaction** in databases is a sequence of operations performed as a single logical unit. It ensures data integrity, even in the event of a system failure, by following the ACID principles.

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
```

Here, the transaction moves $100 from one account to another. If any step fails, the transaction can be rolled back, leaving the database unchanged.

> [!note]
> Transactions maintain consistency by ensuring that all operations within them are completed successfully or not at all.

## True or False

**1. True or false:** A transaction in a database will automatically roll back if any step fails.

<details>
<summary>Answer</summary>

**True**: Transactions are designed to ensure data integrity by either committing all changes if all operations succeed or rolling back all changes if any operation fails, which leaves the database unchanged.

</details>

**2. True or false:** The ACID principles only apply to databases with SQL capabilities.

<details>
<summary>Answer</summary>

**False**: The ACID principles are applicable to any database system that supports transactions, not just those with SQL capabilities. They ensure Atomicity, Consistency, Isolation, and Durability across various types of databases.

</details>

**3. True or false:** In the given transaction, if only the first update statement succeeds, the database will still reflect a $100 deduction.

<details>
<summary>Answer</summary>

**False**: If only the first update succeeds and the second fails, the transaction will be rolled back, resulting in no change to the database to maintain its consistency and integrity.

</details>

**4. True or false:** A database transaction without a COMMIT command is automatically rolled back if the connection to the database closes.

<details>
<summary>Answer</summary>

**True**: If a transaction does not explicitly commit and the connection is closed, most databases will consider the transaction as incomplete and will automatically roll back any changes to maintain data consistency.

</details>

---

[← Course overview](../../../README.md)
