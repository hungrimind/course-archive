# Strong Consistency

A system with **strong consistency** ensures that any read request returns the most recent write. This guarantees that all users see the same data at the same time.

> [!warning]
> Strong consistency can lead to higher latency, as it often requires coordination across distributed nodes. Choose wisely based on your system's needs.

## Quiz

**1. What is a key characteristic of a system with strong consistency?**

- A) It can tolerate data loss.
- B) It guarantees the lowest possible latency.
- C) It ensures all read requests return the most recent write.
- D) It allows for eventual correctness of data.

<details>
<summary>Answer</summary>

- C) It ensures all read requests return the most recent write.

In strong consistency, every read operation reflects the most recent write, ensuring all users see the same data at the same time.

</details>

**2. What is a potential downside of choosing strong consistency for a system?**

- A) Higher potential for data corruption.
- B) Limitation on the number of concurrent users.
- C) Increased complexity in application code.
- D) Higher latency due to the need for coordination across distributed nodes.

<details>
<summary>Answer</summary>

- D) Higher latency due to the need for coordination across distributed nodes.

Strong consistency may lead to higher latency because it often requires coordination among distributed nodes to ensure the most recent data is read.

</details>

---

[← Course overview](../../../README.md)
