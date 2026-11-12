# Ordering Tradeoffs

A key **ordering tradeoff** in asynchronous systems is deciding between maintaining message order and optimizing processing speed. Enforcing strict order can limit scalability, as messages may have to wait for processing in sequence.

```typescript
function processQueue(messages: string[]) {
  for (const message of messages) {
    processMessage(message); // Maintains order but can be slower
  }
}
```

> [!note]
> Choose strict ordering for tasks where sequence is crucial, and prioritize speed when order doesn't impact outcomes.

## Quiz

**1. What is the primary tradeoff when enforcing strict message order in asynchronous systems?**

- A) Increased complexity in code
- B) Higher likelihood of errors
- C) Decreased scalability
- D) Improved security

<details>
<summary>Answer</summary>

- C) Decreased scalability

Enforcing strict message order can lead to decreased scalability because messages must be processed sequentially, limiting the system's ability to handle large volumes of data efficiently.

</details>

**2. In what scenario should you prioritize strict ordering over speed in message processing?**

- A) When handling non-critical notifications
- B) When processing tasks with no dependencies
- C) When dealing with financial transactions
- D) When updating non-time-sensitive logs

<details>
<summary>Answer</summary>

- C) When dealing with financial transactions

Strict ordering should be prioritized in scenarios like financial transactions, where the sequence of operations is crucial for correctness and consistency.

</details>

---

[← Course overview](../../../README.md)
