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

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
