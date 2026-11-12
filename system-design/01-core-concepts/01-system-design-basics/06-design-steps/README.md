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

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
