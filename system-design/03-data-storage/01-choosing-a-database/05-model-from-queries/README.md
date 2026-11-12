# Model From Queries

A **model from queries** approach means you design your storage shape based on the application's most important query patterns (your hottest reads/writes). You optimize the data model for the queries you *actually* need.

> [!note]
> Designing with query patterns in mind can lead to denormalization, which may improve read performance but increases duplication and the effort needed to keep copies in sync.

```text
# Example: denormalized “user profile” document optimized for one-read rendering
{
  "user_id": "123",
  "name": "Jane Doe",
  "posts": [
    {"post_id": "1", "content": "Hello World"},
    {"post_id": "2", "content": "Learning system design"}
  ]
}
```

This JSON-like structure represents a denormalized model, optimizing for quick access to a user profile and recent posts in a single read.

## Exercise: Build the System

Build a diagram that shows how an API designs and uses a denormalized storage shape based on the application's hottest query patterns. Include a 'Query Patterns' step that leads to a denormalized document store, ensure the API can reach the denormalized store via a valid path (not directly), and include a sync worker to represent the extra work required to keep duplicated/denormalized copies in sync.

Available components: Client App, API Service, Query Patterns (Hot Reads/Writes), Denormalized Document Store, Normalized Relational DB, Sync Worker (Keep Copies in Sync), Cache Layer

<details>
<summary>Solution</summary>

Connections:

- Client App → API Service
- API Service → Query Patterns (Hot Reads/Writes)
- Query Patterns (Hot Reads/Writes) → Denormalized Document Store
- API Service → Cache Layer
- Cache Layer → Denormalized Document Store
- API Service → Normalized Relational DB
- Normalized Relational DB → Sync Worker (Keep Copies in Sync)
- Sync Worker (Keep Copies in Sync) → Denormalized Document Store

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
