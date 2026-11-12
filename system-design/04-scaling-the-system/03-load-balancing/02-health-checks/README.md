# Health Checks

A **health check** is a test to determine if a server or service is functioning correctly. Load balancers use health checks to decide which servers can handle requests.

```typescript
// Example of a simple HTTP health check
GET /health
200 OK
```

> [!tip]
> Regular health checks ensure that traffic is only sent to healthy servers, maintaining system reliability and performance.

## True or False

**1. True or false:** A health check is only necessary when initially setting up a server.

<details>
<summary>Answer</summary>

**False**: Health checks are not only necessary during the initial setup; they should be performed regularly to ensure the server remains healthy and can handle requests efficiently.

</details>

**2. True or false:** Load balancers use health checks to determine which servers can handle incoming requests.

<details>
<summary>Answer</summary>

**True**: Load balancers use the results of health checks to route traffic only to servers that are deemed healthy and capable of handling requests, thereby improving system reliability.

</details>

**3. True or false:** A health check that returns a 200 OK response indicates that the server is functioning correctly.

<details>
<summary>Answer</summary>

**True**: A 200 OK response from a health check means that the server is operational and ready to handle requests appropriately.

</details>

**4. True or false:** Once a server passes a health check, it doesn't need further checks unless manually triggered.

<details>
<summary>Answer</summary>

**False**: Regular health checks are necessary to continuously monitor the server's status and ensure that it remains in a healthy state over time, not just at a single point in time.

</details>

---

[← Course overview](../../../README.md)
