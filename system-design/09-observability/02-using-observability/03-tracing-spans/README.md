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

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
