# Non-Functional Requirements

A **non-functional requirement (NFR)** describes *how well* a system must work.

It doesn’t describe a feature. Instead, it describes a **quality attribute** of the system.

Common NFRs include:
- **Performance:** “p95 latency under 200 ms”
- **Availability:** “99.9% uptime”
- **Scalability:** “handle 10× traffic growth”
- **Security:** “encrypt data at rest”
- **Reliability:** “no data loss on failure”

> [!note]
> NFRs strongly influence architecture decisions. For example, a strict availability target might require redundancy and failover.

## Quiz

**1. What is a primary characteristic of a non-functional requirement (NFR)?**

- A) It describes a specific feature of the system.
- B) It defines how well a system performs.
- C) It specifies the interface of the system.
- D) It details the user interactions with the system.

<details>
<summary>Answer</summary>

- B) It defines how well a system performs.

NFRs describe quality attributes of a system, such as performance and scalability, and define how well a system must operate.

</details>

**2. Which of the following is an example of a non-functional requirement?**

- A) Implement a user login feature.
- B) Add a new dashboard for analytics.
- C) Ensure data is encrypted at rest.
- D) Create a user profile section.

<details>
<summary>Answer</summary>

- C) Ensure data is encrypted at rest.

Ensuring data is encrypted at rest is a security-related non-functional requirement, focusing on the quality attribute of security.

</details>

**3. Why do non-functional requirements strongly influence architecture decisions?**

- A) They dictate the programming languages used.
- B) They specify user interface design.
- C) They often require specific architectural strategies to be met.
- D) They determine the color scheme of the application.

<details>
<summary>Answer</summary>

- C) They often require specific architectural strategies to be met.

NFRs often require specific architectural considerations, like redundancy for high availability or load balancing for scalability.

</details>

---

[← Course overview](../../../README.md)
