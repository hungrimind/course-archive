# The Database Bottleneck

A **database bottleneck** occurs when the database becomes a limiting factor in system performance, often due to high read/write loads that exceed its capacity to process efficiently.

> [!warning]
> Bottlenecks can lead to slow response times and system instability if not addressed promptly.

To mitigate database bottlenecks, consider techniques like caching, database partitioning, and optimizing queries to distribute and reduce load.

## Exercise: Build the System

Build an architecture that mitigates a database bottleneck by (1) routing client traffic through an application tier, (2) adding a cache to reduce database reads, and (3) distributing database load using at least one read replica and at least one shard/partition. Ensure there is a request path from the client to the primary database for writes, but do not allow clients to connect directly to the primary database.

Available components: Client, Load Balancer, App Server, Cache Layer, DB Primary (Writes), DB Read Replica, DB Shard / Partition

<details>
<summary>Solution</summary>

Connections:

- Client → Load Balancer
- Load Balancer → App Server
- App Server → Cache Layer
- App Server → DB Read Replica
- App Server → DB Primary (Writes)
- App Server → DB Shard / Partition

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
