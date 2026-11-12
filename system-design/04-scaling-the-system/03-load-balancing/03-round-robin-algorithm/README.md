# Round Robin Algorithm

A **Round Robin Algorithm** is a simple method used by load balancers to distribute incoming requests evenly across a group of servers. Each server gets one request in turn, ensuring a balanced load.

```typescript
// Round Robin request distribution (example)
// Request 1 -> Server A
// Request 2 -> Server B
// Request 3 -> Server C
// Request 4 -> Server A
```

> [!tip]
> Round Robin is easy to implement and works well when all servers have similar capacity and performance.

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
