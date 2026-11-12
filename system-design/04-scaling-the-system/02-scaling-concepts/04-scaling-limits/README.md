# Scaling Limits

A **scaling limit** is the point where adding more resources (bigger servers or more servers) **stops improving performance**.

A beginner-friendly way to think about it:

## Scaling stops working when you hit a shared bottleneck
Even if you add 10 more app servers, they may all still depend on the same thing:

- one **database**
- one **cache cluster**
- one **downstream API**
- one **lock / shared state**

So the shared dependency becomes the new ceiling.

## Example
- You add more app servers → requests per second increases.
- Then the database CPU hits 100% → latency spikes.
- Adding more app servers now **doesn’t help**, because the database is the bottleneck.

> [!warning]
> When you hit a scaling limit, the next step is usually to remove or reduce the shared bottleneck (e.g., add caching, add read replicas, shard/partition, or introduce a queue).

## Exercise: Build the System

Build a small scalable web architecture that demonstrates a scaling limit caused by a shared dependency. Your diagram must: (1) route client traffic through a load balancer, (2) scale the application tier horizontally with at least two app servers, (3) include a primary database that the client traffic depends on (through the app tier), (4) avoid connecting the load balancer directly to the database, and (5) include a shared cache used by the app servers to reduce pressure on the shared database bottleneck.

Available components: Client, Load Balancer, App Server (Stateless), Cache (Shared), Primary Database (Write), Read Replica, Message Queue, Background Worker

<details>
<summary>Solution</summary>

Connections:

- Client → Load Balancer
- Load Balancer → App Server (Stateless)
- Load Balancer → App Server (Stateless)
- App Server (Stateless) → Cache (Shared)
- App Server (Stateless) → Cache (Shared)
- App Server (Stateless) → Primary Database (Write)
- App Server (Stateless) → Primary Database (Write)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
