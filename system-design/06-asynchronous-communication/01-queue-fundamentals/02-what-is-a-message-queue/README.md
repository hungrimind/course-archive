# What is a Message Queue?

A **message queue** is a data structure used for communication between different parts of a system. It holds messages until they can be processed, ensuring that data isn't lost if one part is busy.

```typescript
// Add a message to the queue
messageQueue.enqueue('Process this task');
```

> [!note]
> Message queues help decouple services, allowing them to operate independently and improve system scalability and reliability.

## True or False

**1. True or false:** A message queue ensures that messages are processed in the order they are received.

<details>
<summary>Answer</summary>

**True**: Message queues typically process messages in a first-in, first-out (FIFO) order, meaning they are handled in the sequence they arrive.

</details>

**2. True or false:** Message queues are only useful when services are running on different machines.

<details>
<summary>Answer</summary>

**False**: Message queues can be used for communication between components of a single application on the same machine, as well as services on different machines. They are not limited to distributed systems.

</details>

**3. True or false:** Using a message queue allows parts of a system to handle tasks asynchronously.

<details>
<summary>Answer</summary>

**True**: Message queues enable asynchronous processing because the sender can continue executing without waiting for the receiver to handle the message. This decouples system components and allows them to work independently.

</details>

**4. True or false:** If a message queue is full, new messages are automatically discarded.

<details>
<summary>Answer</summary>

**False**: Typically, if a message queue reaches its limit, new messages may be rejected or the queue may employ back-pressure mechanisms, but automated discarding is not a default behavior because it could lead to data loss.

</details>

---

[← Course overview](../../../README.md)
