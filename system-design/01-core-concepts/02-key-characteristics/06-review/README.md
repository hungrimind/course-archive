# Review

## Review

You now have a basic system design toolkit:

- **System design**: creating a high-level blueprint (components + connections) that meets requirements.
- **Functional requirements**: what the system must do (features/behaviors).
- **Non-functional requirements (NFRs)**: how well the system must work (latency, availability, security, cost, etc.).
- **Tradeoffs**: improving one goal often makes another worse, so you choose based on the requirements.

You also learned key “system qualities” you’ll use throughout the course:

- **Scalability**: can the system handle more load by adding resources?
- **Availability**: what percent of time is it up and able to serve requests?
- **Reliability**: does it return correct results over time?
- **Latency vs throughput**: speed per request vs work per second.
- **Consistency**: what values reads are allowed to return after writes.

Finally, remember the **design loop**:

1. Clarify requirements
2. Estimate rough scale
3. Sketch a high-level architecture
4. Find bottlenecks/risks
5. Iterate on tradeoffs

> [!tip]
> When you’re stuck in a design, go back to the requirements. They tell you what to optimize for.

## True or False

**1. True or false:** Functional requirements describe how well a system should perform.

<details>
<summary>Answer</summary>

**False**: Functional requirements describe what the system must do, including its features and behaviors. Non-functional requirements describe how well it should perform.

</details>

**2. True or false:** Scalability refers to a system's ability to handle increased load by adding more resources.

<details>
<summary>Answer</summary>

**True**: Scalability is about the system's capability to manage additional load efficiently by increasing resources, such as servers or data storage.

</details>

**3. True or false:** In the design loop, the first step is to find bottlenecks and risks.

<details>
<summary>Answer</summary>

**False**: The first step in the design loop is to clarify requirements, which is crucial for understanding what the system is supposed to achieve.

</details>

**4. True or false:** Improving latency will always lead to an increase in throughput.

<details>
<summary>Answer</summary>

**False**: Improving latency (speed per request) does not necessarily increase throughput (amount of work done per second), as they can have different constraints and tradeoffs.

</details>

---

[← Course overview](../../../README.md)
