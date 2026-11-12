# Network Partitions

A **network partition** occurs when a network splits into isolated segments, preventing nodes in different segments from communicating. This can cause issues with data consistency and availability.

> [!tip]
> Design systems to handle partitions gracefully, often by choosing between consistency and availability based on the CAP theorem.

## Exercise: Build the System

Build a partition-tolerant request flow. Include a load balancer and an app service, and ensure storage is accessed through a quorum/consensus layer (not directly). Add at least one replica database. Your diagram must provide a complete path from the client to the primary database while preventing direct app-to-database connections that would allow unsafe reads/writes during a network partition.

Available components: Client, Load Balancer, App Service, Quorum / Consensus Layer, Primary DB (Leader), Replica DB (Follower), Cache (Stale-tolerant)

<details>
<summary>Solution</summary>

Connections:

- Client → Load Balancer
- Load Balancer → App Service
- App Service → Quorum / Consensus Layer
- Quorum / Consensus Layer → Primary DB (Leader)
- Quorum / Consensus Layer → Replica DB (Follower)
- App Service → Cache (Stale-tolerant)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
