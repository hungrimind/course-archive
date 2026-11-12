# Least Connections Algorithm

A **Least Connections Algorithm** distributes incoming requests to the server with the fewest active connections, balancing the load based on current server usage.

```typescript
// Least Connections request distribution (example)
// Server A: 10 connections
// Server B: 5 connections
// Server C: 7 connections
// Next request -> Server B
```

> [!tip]
> This approach is beneficial in environments where servers have varying loads or performance capacities.

## Matching

Sort each item into the right category: **Least Connections Concept**, **Example Servers and Connections**, **Benefits of Least Connections**

- Adapt to server performance
- Balances current usage
- Dynamic load balancing
- Handle varying loads
- Server A: 10 connections
- Server B: 5 connections
- Server C: 7 connections
- Server with fewest connections

<details>
<summary>Answer</summary>

**Least Connections Concept**
- Server with fewest connections
- Dynamic load balancing
- Balances current usage

**Example Servers and Connections**
- Server A: 10 connections
- Server B: 5 connections
- Server C: 7 connections

**Benefits of Least Connections**
- Adapt to server performance
- Handle varying loads

</details>

---

[← Course overview](../../../README.md)
