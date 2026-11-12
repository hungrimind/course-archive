# What is Consistency?

**Consistency** describes what values a read is allowed to return after writes happen.

A simple way to think about it:
- If you **write** a new value, will a later **read** always see that new value?

Two common consistency models:

- **Strong consistency:** after a write completes, all future reads return the latest value.
- **Eventual consistency:** reads might temporarily return an older value, but replicas converge over time.

> [!note]
> In distributed systems, stronger consistency often costs you latency and/or availability during failures (this connects to CAP later).

## True or False

**1. True or false:** Strong consistency ensures that once a write completes, all subsequent reads will see the new value immediately.

<details>
<summary>Answer</summary>

**True**: Strong consistency guarantees that after a write operation, any following read operations will reflect the most recent write. This is the hallmark of strong consistency, providing immediate visibility of the latest changes.

</details>

**2. True or false:** Eventual consistency guarantees that all read operations will immediately reflect the latest write.

<details>
<summary>Answer</summary>

**False**: Eventual consistency allows for temporary discrepancies between writes and reads. After a write, subsequent reads might return older values until the system converges to the latest state over time.

</details>

**3. True or false:** In distributed systems, opting for strong consistency often results in increased latency or reduced availability during failures.

<details>
<summary>Answer</summary>

**True**: Strong consistency can require more coordination between distributed nodes, which may increase latency or reduce availability, especially if network partitions or failures occur. This trade-off is often compared in the context of the CAP theorem.

</details>

**4. True or false:** In eventual consistency models, all nodes in the system will immediately reflect changes made by a write operation.

<details>
<summary>Answer</summary>

**False**: In eventual consistency models, there is no guarantee of immediate consistency across nodes after a write. Nodes may take time to converge on the latest data, during which reads might return outdated values.

</details>

---

[← Course overview](../../../README.md)
