# Document Databases

A **document database** stores data in flexible, semi-structured formats like JSON or BSON, allowing fields to vary between documents and supporting complex data types.

```json
{
  "title": "Document Databases",
  "description": "Store data in a flexible, JSON-like format.",
  "advantages": ["Flexibility", "Scalability"]
}
```

This flexibility makes document databases ideal for applications requiring rapid iteration and schema evolution, such as content management systems or real-time analytics.

> [!note]
> Document databases handle nested data well, making them suitable for complex, hierarchical data structures.

## Exercise: Build the System

Build a simple architecture for an app that stores flexible, JSON-like documents and supports real-time analytics. Include an API layer between the client and the database, ensure there is a valid request path from the client to the document database through the API (without a direct client-to-database connection), and add an analytics worker that is connected to the document database.

Available components: Web Client, API Service, Document Database (JSON/BSON), Search Index, Real-time Analytics Worker, Object Storage (Media/Files)

<details>
<summary>Solution</summary>

Connections:

- Web Client → API Service
- API Service → Document Database (JSON/BSON)
- API Service → Search Index
- API Service → Object Storage (Media/Files)
- Document Database (JSON/BSON) → Real-time Analytics Worker
- Real-time Analytics Worker → Document Database (JSON/BSON)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
