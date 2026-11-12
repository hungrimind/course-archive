# Scaling Limits

A **scaling limit** is the point where adding more resources (bigger servers or more servers) **stops improving performance**.

A beginner-friendly way to think about it:

## Scaling stops working when you hit a shared bottleneck
Even if you add 10 more app servers, they may all still depend on the same thing:

- one **database**
- one **cache cluster**
- one **downstream API**
- one **lock / shared state**

So the shared dependency becomes the new ceiling.

## Example
- You add more app servers → requests per second increases.
- Then the database CPU hits 100% → latency spikes.
- Adding more app servers now **doesn’t help**, because the database is the bottleneck.

> [!warning]
> When you hit a scaling limit, the next step is usually to remove or reduce the shared bottleneck (e.g., add caching, add read replicas, shard/partition, or introduce a queue).

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
