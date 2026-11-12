# Partial Failures

A **partial failure** occurs when a part of a system fails, but the entire system remains operational. Handling partial failures involves designing systems to continue functioning despite some components not working.

A common strategy is using **graceful degradation**, allowing the system to provide limited functionality while the issue is resolved. For instance, if a secondary service fails, your main application might skip non-essential features but maintain core operations.

> [!tip]
> Implementing retries and timeouts can help systems recover from transient failures without affecting overall availability.

## Quiz

**1. What is a partial failure in a system?**

- A) A situation where the entire system stops working.
- B) When a component of a system fails but the system remains operational.
- C) A service interruption that requires immediate system shutdown.
- D) Failure that always leads to data loss.

<details>
<summary>Answer</summary>

- B) When a component of a system fails but the system remains operational.

A partial failure refers to a situation where some components fail, but the system remains functional by maintaining overall operations.

</details>

**2. What is meant by 'graceful degradation'?**

- A) Shutting down all system components when an issue arises.
- B) Maintaining only the essential functions of a system while non-essential parts fail.
- C) Hiding all system errors from the user.
- D) Increasing system resources to handle failures.

<details>
<summary>Answer</summary>

- B) Maintaining only the essential functions of a system while non-essential parts fail.

Graceful degradation is the strategy of allowing a system to continue providing essential services while less important features are temporarily unavailable.

</details>

**3. What is a benefit of implementing retries and timeouts in a system?**

- A) Ensuring that all components stop functioning during a failure.
- B) Automatically resolving non-transient issues permanently.
- C) Helping the system recover from transient failures without affecting overall availability.
- D) Eliminating the need for graceful degradation.

<details>
<summary>Answer</summary>

- C) Helping the system recover from transient failures without affecting overall availability.

Retries and timeouts are used to recover from temporary issues, helping maintain system availability and ensuring that failures do not significantly impact user experience.

</details>

---

[← Course overview](../../../README.md)
