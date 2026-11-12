# Scale Web Tier

Scaling the **web tier** involves increasing the capacity of your web servers to handle more traffic. This is often achieved through **horizontal scaling**, which means adding more servers to distribute the load.

```typescript
// Example of adding web servers
const webServers: string[] = ['Server1', 'Server2', 'Server3'];
```

> [!tip]
> Use a load balancer to evenly distribute incoming requests across multiple servers, ensuring no single server becomes a bottleneck.

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
