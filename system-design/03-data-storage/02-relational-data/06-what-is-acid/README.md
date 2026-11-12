# What is ACID?

A **transaction** in a database context should follow the ACID principles: **Atomicity**, **Consistency**, **Isolation**, and **Durability**. These ensure reliability and correctness.

```markdown
- **Atomicity**: Transactions are all-or-nothing. If one part fails, the entire transaction rolls back.
- **Consistency**: Transactions move the database from one valid state to another, maintaining all predefined rules.
- **Isolation**: Concurrent transactions do not affect each other, ensuring results as if processed sequentially.
- **Durability**: Once a transaction is committed, changes survive power outages or crashes.
```

> [!note]
> ACID properties are key to the reliability of relational databases and critical for maintaining data integrity.

## True or False

**1. True or false:** Atomicity guarantees that if a transaction is partially completed, the changes will persist in the database.

<details>
<summary>Answer</summary>

**False**: Atomicity ensures that a transaction is all-or-nothing, meaning if it fails, it rolls back entirely, so no partial changes persist.

</details>

**2. True or false:** Consistency ensures that any transaction brings the database from one valid state to another, adhering to all predefined rules.

<details>
<summary>Answer</summary>

**True**: Consistency checks that transactions leave the database in a valid state, maintaining rules like data types, constraints, and triggers.

</details>

**3. True or false:** Isolation in database transactions means that transactions are dependent on one another and may see intermediate states of other transactions.

<details>
<summary>Answer</summary>

**False**: Isolation ensures that transactions do not affect each other, creating the effect of sequential processing, thus avoiding seeing intermediate states of other concurrent transactions.

</details>

**4. True or false:** Once a transaction is committed, Durability ensures that its changes are not lost even if a system crash occurs after the commit.

<details>
<summary>Answer</summary>

**True**: Durability guarantees that committed changes are permanently applied and stored safely, surviving crashes or power outages.

</details>

---

[← Course overview](../../../README.md)
