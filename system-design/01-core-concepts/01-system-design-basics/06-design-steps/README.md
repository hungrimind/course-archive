# Design Steps

A **design process** is a repeatable set of steps you can use to turn requirements into an architecture.

A beginner-friendly system design loop:

1. **Clarify requirements**
   - Functional: what the system must do
   - Non-functional: how well it must do it (latency, availability, cost, etc.)

2. **Estimate rough scale** (back-of-the-envelope)
   - How many users/requests per second (QPS)?
   - How much data is stored per day/month?

3. **Sketch a high-level architecture**
   - Main components (clients, API, database, cache, queue)
   - The main request/data flows

4. **Find bottlenecks and risks**
   - What breaks first as traffic grows?
   - Any single points of failure?

5. **Iterate on tradeoffs**
   - Change the design to meet the most important non-functional requirements
   - Re-check the design against the requirements

> [!note]
> You don’t “finish” system design in one pass, good designs come from iterating as you learn more constraints.

## Exercise: Build the System

Build a beginner-friendly system design loop: include steps for estimating scale, sketching a high-level architecture, and identifying bottlenecks/risks. Ensure the flow starts from clarifying requirements and goes next to a scale estimate before any architecture sketch.

Available components: Clarify Requirements, Estimate Scale (QPS/Data), Sketch High-Level Architecture, Find Bottlenecks & Risks, Iterate on Tradeoffs, Loop Back / Refine

<details>
<summary>Solution</summary>

Connections:

- Clarify Requirements → Estimate Scale (QPS/Data)
- Estimate Scale (QPS/Data) → Sketch High-Level Architecture
- Sketch High-Level Architecture → Find Bottlenecks & Risks
- Find Bottlenecks & Risks → Iterate on Tradeoffs
- Iterate on Tradeoffs → Loop Back / Refine
- Loop Back / Refine → Clarify Requirements

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
