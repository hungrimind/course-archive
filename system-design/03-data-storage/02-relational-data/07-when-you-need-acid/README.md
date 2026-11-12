# When You Need ACID

A **transaction** requires ACID properties when data integrity and reliability are critical. Use ACID in scenarios like financial systems, where errors can have severe consequences.

> [!tip]
> ACID is ideal for maintaining strict data consistency across complex operations, but it can impact performance in high-load situations.

## True or False

**1. True or false:** ACID properties ensure that a database transaction can be partially completed and still maintain data integrity.

<details>
<summary>Answer</summary>

**False**: ACID properties, specifically 'Atomicity', ensure that a database transaction is either fully completed or not executed at all, maintaining data integrity by preventing partial operations.

</details>

**2. True or false:** In a high-load scenario, using ACID transactions can potentially decrease performance.

<details>
<summary>Answer</summary>

**True**: ACID transactions ensure data stability and consistency which requires locking resources, leading to potential performance reduction in high-load scenarios.

</details>

**3. True or false:** ACID is less suitable for maintaining data consistency in financial systems due to performance issues.

<details>
<summary>Answer</summary>

**False**: Despite the potential impact on performance, ACID properties are essential for financial systems where data consistency and integrity are more critical than speed.

</details>

**4. True or false:** The 'Consistency' property in ACID ensures that a transaction moves the database from one valid state to another, maintaining database rules.

<details>
<summary>Answer</summary>

**True**: The 'Consistency' property ensures that any transaction will bring the database from one consistent state to another, respecting all defined rules such as constraints, cascades, and triggers.

</details>

---

[← Course overview](../../../README.md)
