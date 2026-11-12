# Eventual Consistency

A system with **eventual consistency** ensures that, given enough time without new updates, all nodes will converge to the same data state. It sacrifices immediate consistency for increased availability and partition tolerance.

> [!note]
> Eventual consistency is common in distributed systems where high availability and partition tolerance are prioritized over immediate consistency.

This model is often used in NoSQL databases and systems like DNS, where occasional stale reads are acceptable.

## Quiz

**1. In the context of eventual consistency, what is prioritized over immediate consistency?**

- A) Data redundancy and efficiency
- B) High availability and partition tolerance
- C) Cost-effectiveness and simplicity
- D) Data integrity and quality

<details>
<summary>Answer</summary>

- B) High availability and partition tolerance

Eventual consistency sacrifices immediate consistency in order to prioritize high availability and partition tolerance, particularly in distributed systems.

</details>

**2. Why might a system use eventual consistency?**

- A) To ensure that all data reads are always up-to-date
- B) To allow for flexible data schemas and fewer constraints
- C) To handle large volumes of data while keeping the system available even if some nodes are down
- D) To support immediate transaction completion and strict data validation

<details>
<summary>Answer</summary>

- C) To handle large volumes of data while keeping the system available even if some nodes are down

Eventual consistency is used in systems where the ability to handle large amounts of data and remain available during partitioned network conditions is more critical than having immediate consistency.

</details>

**3. Which type of databases often implement eventual consistency?**

- A) Relational Databases
- B) NoSQL Databases
- C) In-memory Databases
- D) Graph Databases

<details>
<summary>Answer</summary>

- B) NoSQL Databases

NoSQL databases frequently implement eventual consistency as they focus on scalability and availability which align with the characteristics of the model.

</details>

---

[← Course overview](../../../README.md)
