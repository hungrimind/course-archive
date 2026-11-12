# What is a CDN?

A **Content Delivery Network (CDN)** is a network of servers distributed globally to deliver web content more efficiently. It reduces latency by caching content close to users.

```typescript
// Simplified CDN concept
// User requests are routed to the nearest server
let nearestCDNServer = 'Server_US_East';
```

> [!tip]
> CDNs improve load times and reduce server load, enhancing user experience by serving content from the nearest location.

## Exercise: Build the System

Build a basic CDN request flow that routes a user to a CDN edge through a routing layer, ensures the CDN can fetch from an origin on cache misses, and avoids direct user access to the origin. Include the key components necessary to represent edge caching and an origin-backed content source.

Available components: User Browser, Geo DNS / Request Router, CDN Edge Server, Origin Web Server, Static Asset Storage, WAF / DDoS Protection

<details>
<summary>Solution</summary>

Connections:

- User Browser → Geo DNS / Request Router
- Geo DNS / Request Router → WAF / DDoS Protection
- WAF / DDoS Protection → CDN Edge Server
- CDN Edge Server → Origin Web Server
- Origin Web Server → Static Asset Storage

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
