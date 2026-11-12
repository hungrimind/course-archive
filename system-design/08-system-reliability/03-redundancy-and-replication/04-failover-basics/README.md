# Failover Basics

A **failover** is a system design mechanism that automatically switches to a standby component or system when the primary one fails. This ensures continuous operation without user intervention.

```plaintext
Primary System  →  Standby System
```

> [!note]
> Failover is crucial for maintaining high availability in systems, minimizing downtime during unexpected failures.

## Exercise: Build the System

Build a failover architecture where user traffic goes through a failover component (not directly to the primary), includes both a primary and standby system, and ensures users can reach either system via the traffic path so automatic switching is possible during failures.

Available components: User Client, Health Check Monitor, Primary System, Standby System, Failover Router, Shared Storage

<details>
<summary>Solution</summary>

Connections:

- User Client → Failover Router
- Failover Router → Primary System
- Failover Router → Standby System
- Health Check Monitor → Primary System
- Health Check Monitor → Standby System
- Health Check Monitor → Failover Router
- Primary System → Shared Storage
- Standby System → Shared Storage

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
