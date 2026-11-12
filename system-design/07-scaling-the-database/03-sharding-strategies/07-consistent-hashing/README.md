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

## Exercise: Build the System

Build a consistent-hashing-based routing flow: include a hash function and a consistent hash ring, ensure there are at least two storage nodes reachable from the client via the hashing/ring path, and avoid directly connecting the client (or the hash function) straight to a specific storage node.

Available components: Client, Hash Function, Consistent Hash Ring, Storage Node, Replica Node, Data Item (Key)

<details>
<summary>Solution</summary>

Connections:

- Client → Hash Function
- Data Item (Key) → Hash Function
- Hash Function → Consistent Hash Ring
- Consistent Hash Ring → Storage Node
- Consistent Hash Ring → Storage Node
- Storage Node → Replica Node

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
