# What is Redundancy?

A **redundancy** is a system design strategy where additional components or processes are added to ensure availability and reliability. If one component fails, others can take over, preventing system outages.

> [!tip]
> Redundancy can be implemented through multiple servers, data replication, or backup systems. This helps eliminate single points of failure.

## Exercise: Build the System

Build a redundant architecture that avoids single points of failure: route client traffic through a load balancer to multiple app servers, and include both a database replica and a backup destination. Also ensure clients do not connect directly to app servers, and that the replica is connected into the end-to-end system flow.

Available components: Client, Load Balancer, App Server, Primary Database, Replica Database, Backup Storage

<details>
<summary>Solution</summary>

Connections:

- Client → Load Balancer
- Load Balancer → App Server
- Load Balancer → App Server
- App Server → Primary Database
- App Server → Primary Database
- Primary Database → Replica Database
- Primary Database → Backup Storage

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
