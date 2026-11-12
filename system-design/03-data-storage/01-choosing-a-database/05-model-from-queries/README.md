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

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
