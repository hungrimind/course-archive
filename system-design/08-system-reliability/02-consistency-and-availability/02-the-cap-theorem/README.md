# The CAP Theorem

The **CAP theorem** is a way to think about tradeoffs in distributed systems.

It says that when there is a **network partition** (a network split where some nodes can’t talk to other nodes), a system must trade off between:

- **Consistency (C):** every read sees the *latest* write (no stale reads)
- **Availability (A):** every request gets a response (even if it might be stale)

**Partition tolerance (P)** isn’t something you “pick” in real distributed systems, partitions can happen, so you design assuming they will.

### The key beginner takeaway
During a partition, you typically choose one of these behaviors:

- **CP system:** prefer *consistency* (may reject/timeout some requests)
- **AP system:** prefer *availability* (may return stale data)

Outside of partitions, many real systems can provide both high consistency and high availability.

> [!note]
> CAP is not “always pick 2 of 3.” It’s specifically about what you do **when the network is unreliable**.

## Matching

Sort each item into the right category: **Consistency**, **Availability**, **Partition Tolerance**

- All nodes show the latest data
- Data uniformity across nodes
- Every request gets a response
- Handles network splits
- Operation despite network failures
- System remains responsive

<details>
<summary>Answer</summary>

**Consistency**
- Data uniformity across nodes
- All nodes show the latest data

**Availability**
- Every request gets a response
- System remains responsive

**Partition Tolerance**
- Operation despite network failures
- Handles network splits

</details>

---

[← Course overview](../../../README.md)
