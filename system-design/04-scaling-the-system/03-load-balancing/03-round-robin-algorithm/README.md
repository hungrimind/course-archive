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

## Exercise: Build the System

Build a simple Round Robin load balancing setup. Add a load balancer between the client and a pool of application servers (at least three). Ensure client traffic reaches the servers through the load balancer, and do not allow the client to connect directly to any individual server.

Available components: Client, Load Balancer (Round Robin), Application Server, Health Check Monitor, Shared Cache, Database

<details>
<summary>Solution</summary>

Connections:

- Client → Load Balancer (Round Robin)
- Load Balancer (Round Robin) → Application Server
- Load Balancer (Round Robin) → Application Server
- Load Balancer (Round Robin) → Application Server
- Application Server → Database
- Application Server → Database
- Application Server → Database

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
