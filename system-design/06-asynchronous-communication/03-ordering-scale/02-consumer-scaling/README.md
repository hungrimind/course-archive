# Consumer Scaling

A **consumer** in a message queue system is an entity that processes messages. **Consumer scaling** involves increasing the number of consumers to handle a higher message load efficiently, enhancing throughput.

```typescript
function startConsumers(numConsumers: number) {
  for (let i = 0; i < numConsumers; i++) {
    startConsumer(); // Launches multiple consumers
  }
}
```

> [!tip]
> Monitor resource usage and message backlog to determine when to scale consumers dynamically.

## Exercise: Build the System

Build a message-queue consumer-scaling architecture: include a queue between the producer and processing, represent a scalable consumer group with multiple worker consumers, and add monitoring plus an autoscaler driven by monitoring signals. Ensure there is an end-to-end path from the producer to a results store, and avoid directly wiring producers to workers (or the queue directly to workers) without the consumer group.

Available components: Producer Service, Message Queue, Consumer Group, Worker Consumer, Monitoring (Lag/CPU), Autoscaler, Results Store

<details>
<summary>Solution</summary>

Connections:

- Producer Service → Message Queue
- Message Queue → Consumer Group
- Consumer Group → Worker Consumer
- Consumer Group → Worker Consumer
- Worker Consumer → Results Store
- Worker Consumer → Results Store
- Message Queue → Monitoring (Lag/CPU)
- Worker Consumer → Monitoring (Lag/CPU)
- Worker Consumer → Monitoring (Lag/CPU)
- Monitoring (Lag/CPU) → Autoscaler
- Autoscaler → Consumer Group

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
