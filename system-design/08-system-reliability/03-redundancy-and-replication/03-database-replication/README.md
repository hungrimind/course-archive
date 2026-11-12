# Database Replication

A **database replication** is a process where data from one database server (the primary) is copied to another server (the replica). This enhances availability and reliability by providing multiple data sources.

```plaintext
Primary Database  →  Replica Database
```

> [!tip]
> Use replication to distribute read traffic across replicas, reducing load on the primary server and improving performance.

## Exercise: Build the System

Build a simple replicated database architecture. Your diagram must include a Primary Database and a Replica Database, with replication flowing from the primary into the replica. Also create a read path from the Application Server to the replica using a read-only endpoint (the app should not connect directly to the replica).

Available components: Application Server, Primary Database (Writes), Replica Database (Reads), Replication Stream, Read-Only Endpoint

<details>
<summary>Solution</summary>

Connections:

- Application Server → Primary Database (Writes)
- Primary Database (Writes) → Replication Stream
- Replication Stream → Replica Database (Reads)
- Application Server → Read-Only Endpoint
- Read-Only Endpoint → Replica Database (Reads)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
