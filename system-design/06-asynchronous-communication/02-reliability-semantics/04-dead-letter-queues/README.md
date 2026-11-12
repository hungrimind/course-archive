# Dead-Letter Queues

A **dead-letter queue** (DLQ) is a type of message queue used to store messages that cannot be processed successfully. When a message continually fails to be processed (due to errors or exceeding retry limits), it is sent to the DLQ for later analysis or manual handling.

```typescript
function handleMessage(message: string) {
  try {
    processMessage(message);
  } catch (e) {
    sendToDLQ(message);
  }
}
```

> [!tip]
> Regularly monitor your DLQ to identify patterns in failures and improve system resilience.

## True or False

**1. True or false:** Dead-letter queues are used to store successfully processed messages for future reference.

<details>
<summary>Answer</summary>

**False**: Dead-letter queues are specifically used to store messages that cannot be processed successfully, not those that have been successfully processed.

</details>

**2. True or false:** Messages sent to a dead-letter queue may require manual handling to resolve processing issues.

<details>
<summary>Answer</summary>

**True**: Messages in a dead-letter queue indicate that they could not be processed due to errors or retry limits being exceeded, and often require manual intervention to address the underlying issues.

</details>

**3. True or false:** Once a message is sent to a dead-letter queue, it indicates permanent failure and cannot be retried.

<details>
<summary>Answer</summary>

**False**: Messages in a dead-letter queue are not necessarily indicative of permanent failure. They can often be analyzed, corrected, and retried after addressing the issue that caused the failure.

</details>

**4. True or false:** Monitoring and analyzing dead-letter queues can help improve the resilience of a system.

<details>
<summary>Answer</summary>

**True**: Regularly monitoring a dead-letter queue helps in identifying patterns in message failures, which can provide insightful data to improve system handling and prevent future errors.

</details>

---

[← Course overview](../../../README.md)
