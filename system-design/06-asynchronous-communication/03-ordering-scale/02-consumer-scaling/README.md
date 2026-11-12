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

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
