# What is Scalability?

**Scalability** is a system’s ability to handle more load by adding resources, while keeping performance acceptable.

Two common ways to scale:

- **Vertical scaling (scale up):** make one machine bigger (more CPU/RAM).
- **Horizontal scaling (scale out):** add more machines and spread the work.

> [!note]
> Scalability is about what happens when load grows: can you add resources in a predictable way, or does the system hit a hard limit?

In system design, scalability affects your choices around stateless services, load balancing, caching, and databases.

## Exercise: Build the System

Build a scalable request path that demonstrates horizontal scaling: place a load balancer in front of multiple stateless app servers, include a cache to reduce database load, and ensure requests can reach the primary database through the service layer (without clients connecting directly to the database).

Available components: Client, Load Balancer, Stateless App Server, Cache (Redis), Primary Database, Vertically Scaled Server (Scale Up), DB Read Replica

<details>
<summary>Solution</summary>

Connections:

- Client → Load Balancer
- Load Balancer → Stateless App Server
- Load Balancer → Stateless App Server
- Stateless App Server → Cache (Redis)
- Stateless App Server → Cache (Redis)
- Stateless App Server → Primary Database
- Stateless App Server → Primary Database

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
