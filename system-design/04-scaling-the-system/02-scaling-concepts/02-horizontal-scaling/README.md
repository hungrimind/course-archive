# Horizontal Scaling

A **horizontal scaling** increases system capacity by adding more machines, rather than upgrading a single machine. This method distributes the load across multiple servers, providing flexibility and resilience.

```markdown
> [!tip]
> Horizontal scaling is often more cost-effective and reliable than vertical scaling, especially for high-traffic systems.
```

## Exercise: Build the System

Build a horizontally scaled architecture where a load balancer fronts multiple app server instances. Include an auto scaling group that can add instances, and ensure there is an end-to-end path for requests from the client to the database through the application tier. Avoid direct client-to-app connections and avoid connecting the load balancer directly to the database.

Available components: Client, Load Balancer, App Server Instance, Cache, Database, Auto Scaling Group

<details>
<summary>Solution</summary>

Connections:

- Client → Load Balancer
- Load Balancer → App Server Instance
- Load Balancer → App Server Instance
- Auto Scaling Group → App Server Instance
- Auto Scaling Group → App Server Instance
- App Server Instance → Cache
- App Server Instance → Cache
- Cache → Database

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
