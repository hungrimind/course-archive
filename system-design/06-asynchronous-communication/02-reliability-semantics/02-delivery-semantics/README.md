# Delivery Semantics

A **delivery semantic** defines how a message is delivered in messaging systems. The three main types are:

- **At-most-once**: A message is delivered zero or one time. No retries if delivery fails.
- **At-least-once**: A message is delivered one or more times. Retries occur until acknowledged.
- **Exactly-once**: A message is delivered exactly one time, ensuring no duplicates.

```typescript
// At-least-once: resend if not acknowledged (conceptual)
sendMessage('Update Info');
if (!acknowledged) {
  resendMessage('Update Info');
}
```

> [!note]
> "Exactly-once" semantics are complex and often require additional infrastructure to manage duplicates and acknowledgments.

## Matching

Sort each item into the right category: **At-most-once Delivery**, **At-least-once Delivery**, **Exactly-once Delivery**

- Deliver exactly one time
- Deliver one or more times
- Deliver zero or one time
- Manage duplicates
- No retries on failure
- Retries until acknowledged
- sendMessage with retry logic

<details>
<summary>Answer</summary>

**At-most-once Delivery**
- Deliver zero or one time
- No retries on failure

**At-least-once Delivery**
- Deliver one or more times
- Retries until acknowledged
- sendMessage with retry logic

**Exactly-once Delivery**
- Deliver exactly one time
- Manage duplicates

</details>

---

[← Course overview](../../../README.md)
