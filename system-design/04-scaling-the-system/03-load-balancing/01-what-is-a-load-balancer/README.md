# What is a Load Balancer?

A **load balancer** improves system performance by distributing incoming traffic across multiple servers, preventing any one server from becoming a bottleneck. This ensures efficient resource use and reduces the risk of server overload.

```typescript
// Traffic distribution across servers
// (diagram-style pseudo-code)
[Client] -> [Load Balancer] -> [Server A, Server B, Server C]
```

> [!note]
> Load balancers also enhance fault tolerance by redirecting traffic from failed servers to operational ones, maintaining service availability.

## True or False

**1. True or false:** A load balancer can distribute incoming traffic unevenly across servers to create bottlenecks.

<details>
<summary>Answer</summary>

**False**: Load balancers are designed to distribute traffic evenly across servers to prevent any single server from becoming a bottleneck and ensure efficient resource utilization.

</details>

**2. True or false:** Load balancers play a critical role in maintaining service availability by redirecting traffic away from servers that have failed.

<details>
<summary>Answer</summary>

**True**: Load balancers enhance fault tolerance by detecting failed servers and automatically redirecting traffic to operational servers, thus maintaining the availability of the service.

</details>

---

[← Course overview](../../../README.md)
