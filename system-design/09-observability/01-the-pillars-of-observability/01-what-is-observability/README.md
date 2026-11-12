# What is Observability?

A **system's observability** is its ability to provide insights into internal states through external outputs. It helps identify and diagnose issues efficiently.

```plaintext
Inputs (Logs, Metrics, Traces) → Insights
```

> [!tip]
> Observability is crucial for maintaining system health and ensuring quick responses to problems.

## Exercise: Build the System

Build an observability pipeline where an application emits the three core signals (logs, metrics, traces) into dedicated collectors, the signals are stored centrally, and insights are produced via dashboards & alerting. Ensure there is a valid end-to-end path from the application to dashboards/alerting, and do not connect the application directly to dashboards/alerting.

Available components: Application Service, Log Collector, Metrics Collector, Trace Collector, Telemetry Storage, Dashboards & Alerting

<details>
<summary>Solution</summary>

Connections:

- Application Service → Log Collector
- Application Service → Metrics Collector
- Application Service → Trace Collector
- Log Collector → Telemetry Storage
- Metrics Collector → Telemetry Storage
- Trace Collector → Telemetry Storage
- Telemetry Storage → Dashboards & Alerting

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
