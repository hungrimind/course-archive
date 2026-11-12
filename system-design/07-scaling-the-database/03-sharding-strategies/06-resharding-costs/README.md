# Resharding Costs

Resharding involves redistributing data across shards to balance load or accommodate growth. This process can be costly in terms of time, resources, and potential downtime.

> [!warning]
> Resharding can temporarily decrease system availability and increase latency as data is moved and reindexed.

Understanding the implications of resharding helps in choosing a shard key that minimizes future need for redistribution.

## Quiz

**1. What is the primary purpose of resharding in a database system?**

- A) To back up data for disaster recovery
- B) To balance load and accommodate growth
- C) To encrypt data for security
- D) To optimize query performance

<details>
<summary>Answer</summary>

- B) To balance load and accommodate growth

Resharding helps to balance load across shards and manage data growth by redistributing data effectively.

</details>

**2. Which of the following is a potential downside of resharding?**

- A) Reduced data redundancy
- B) Increased data security
- C) Decreased system availability
- D) Reduced storage costs

<details>
<summary>Answer</summary>

- C) Decreased system availability

During resharding, system availability may decrease temporarily and latency may increase due to data movement and reindexing.

</details>

**3. Why is it important to choose an appropriate shard key initially?**

- A) To eliminate all future maintenance needs
- B) To minimize the need for future data redistribution
- C) To ensure data is encrypted
- D) To restrict data access

<details>
<summary>Answer</summary>

- B) To minimize the need for future data redistribution

Selecting a good shard key is crucial as it minimizes the likelihood of needing resharding, thus avoiding the costs and downtime associated with it.

</details>

---

[← Course overview](../../../README.md)
