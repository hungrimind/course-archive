# Storage Decision Flow

A **storage decision flow** helps choose the right database by analyzing key factors like workload type and access patterns.

Consider these questions:
1. Is the workload **transactional** or **analytical**?
2. Are access patterns **read-heavy**, **write-heavy**, or **balanced**?
3. Do you need **SQL** for structured data or **NoSQL** for flexibility?

> [!tip]
> Start with your application's requirements, then map them to database capabilities.

## Exercise: Build the System

Build a storage decision flow starting from Application Requirements. Your diagram must include decision steps for workload type (transactional vs analytical), access pattern (read/write mix), and SQL vs NoSQL. Include both OLTP and OLAP outcomes, and avoid directly selecting an OLTP database from requirements without passing through decision nodes.

Available components: Application Requirements, Decide: Transactional vs Analytical, Decide: Read/Write Pattern, Decide: SQL vs NoSQL, OLTP Database (Transactional), OLAP Warehouse (Analytical), NoSQL Database (Flexible Schema), Cache (for Read-Heavy)

<details>
<summary>Solution</summary>

Connections:

- Application Requirements → Decide: Transactional vs Analytical
- Decide: Transactional vs Analytical → Decide: Read/Write Pattern
- Decide: Transactional vs Analytical → OLAP Warehouse (Analytical)
- Decide: Read/Write Pattern → Cache (for Read-Heavy)
- Decide: Read/Write Pattern → Decide: SQL vs NoSQL
- Decide: SQL vs NoSQL → OLTP Database (Transactional)
- Decide: SQL vs NoSQL → NoSQL Database (Flexible Schema)
- Cache (for Read-Heavy) → OLTP Database (Transactional)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
