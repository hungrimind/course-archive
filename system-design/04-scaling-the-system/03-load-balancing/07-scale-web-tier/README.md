# Scale Web Tier

Scaling the **web tier** involves increasing the capacity of your web servers to handle more traffic. This is often achieved through **horizontal scaling**, which means adding more servers to distribute the load.

```typescript
// Example of adding web servers
const webServers: string[] = ['Server1', 'Server2', 'Server3'];
```

> [!tip]
> Use a load balancer to evenly distribute incoming requests across multiple servers, ensuring no single server becomes a bottleneck.

## Exercise: Build the System

Build a scalable web tier using horizontal scaling: add a load balancer and multiple web servers so client requests reach the web servers through the load balancer (not directly). Also include a database and connect the web servers to it.

Available components: Client / Browser, Load Balancer, Web Server, App Database, DNS

<details>
<summary>Solution</summary>

Connections:

- Client / Browser → Load Balancer
- Load Balancer → Web Server
- Load Balancer → Web Server
- Web Server → App Database
- Web Server → App Database

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
