# Producers and Consumers

A **producer** creates messages or tasks and sends them to a system, while a **consumer** retrieves and processes these messages. In a system, producers and consumers work together to handle tasks efficiently.

```typescript
// Producer sends a message
messageQueue.enqueue('New Task');

// Consumer processes the message
const task: string = messageQueue.dequeue();
processTask(task);
```

> [!tip]
> Use multiple consumers to scale processing capacity and ensure tasks are handled promptly.

## Exercise: Build the System

Build a producer–consumer architecture where a Producer sends tasks into a Message Queue, and multiple Consumer Workers pull tasks from the queue and store processing results. Ensure the Producer does not connect directly to Consumers, and include a Dead-Letter Queue path for failed messages.

Available components: Producer Service, Message Queue, Consumer Worker, Results Store, Dead-Letter Queue (DLQ), Monitoring/Alerting

<details>
<summary>Solution</summary>

Connections:

- Producer Service → Message Queue
- Message Queue → Consumer Worker
- Message Queue → Consumer Worker
- Consumer Worker → Results Store
- Consumer Worker → Results Store
- Message Queue → Dead-Letter Queue (DLQ)
- Producer Service → Monitoring/Alerting
- Message Queue → Monitoring/Alerting
- Consumer Worker → Monitoring/Alerting
- Consumer Worker → Monitoring/Alerting

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
