# Consistent Hashing

Consistent Hashing is a technique used to evenly distribute data across nodes, minimizing data movement when nodes are added or removed.

In consistent hashing, each node and data item is assigned a position on a circular hash space. Data is mapped to the closest node in the clockwise direction.

```plaintext
Node1 (10) ----> Data1 (15)
Node2 (30) ----> Data2 (35)
Node3 (50)
```

> [!tip]
> Consistent hashing reduces the number of data items that need to be remapped when scaling your system, enhancing performance and stability.

## Exercise

On the platform this lesson ended with a drag-and-drop system diagram builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
