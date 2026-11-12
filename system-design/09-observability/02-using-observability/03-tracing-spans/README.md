# Tracing Spans

A **tracing span** represents a single operation or request in a distributed system, capturing its start and end time. It's part of a trace, which tracks the journey of a request across multiple services.

```typescript
span.start();
// ... some operation ...
span.end();
```

Spans help identify performance bottlenecks by showing where time is spent in a request's lifecycle.

> [!info]
> Spans can include metadata like operation name and status to enhance trace analysis.

## Exercise: Build the System

Build a simple distributed request flow and an observability pipeline for tracing spans: create an end-to-end request path from the Client to the Database through intermediary components, ensure both services export spans to a central Tracing Collector, and connect the collector to a Trace UI for analysis. Do not connect the Client directly to the Database.

Available components: Client, API Gateway, Service A, Service B, Database, Tracing Collector, Trace UI

<details>
<summary>Solution</summary>

Connections:

- Client → API Gateway
- API Gateway → Service A
- Service A → Service B
- Service A → Database
- Service B → Database
- API Gateway → Tracing Collector
- Service A → Tracing Collector
- Service B → Tracing Collector
- Tracing Collector → Trace UI

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
