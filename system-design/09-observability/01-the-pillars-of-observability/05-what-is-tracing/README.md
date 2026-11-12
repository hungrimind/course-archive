# What is Tracing?

A **trace** is a detailed record of the journey a request takes through different components of a system. It helps identify performance bottlenecks and understand system behavior.

```plaintext
Example: Request ID 1234 passed through Service A -> Service B -> Service C
```

> [!tip]
> Use tracing to visualize dependencies and latency in complex, distributed systems.

## Exercise: Build the System

Build a diagram that shows an end-to-end request journey through multiple services, and how tracing data from those services is collected and stored. Your design must include an API Gateway entry point, a multi-hop path reaching Service C, and a Tracing Collector that receives spans from all services and persists them to trace storage. Avoid connecting the client directly to backend services.

Available components: Client, API Gateway, Service A, Service B, Service C, Tracing Collector, Trace Storage

<details>
<summary>Solution</summary>

Connections:

- Client → API Gateway
- API Gateway → Service A
- Service A → Service B
- Service B → Service C
- Service A → Tracing Collector
- Service B → Tracing Collector
- Service C → Tracing Collector
- Tracing Collector → Trace Storage

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
