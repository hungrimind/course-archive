# Readonly in Classes

A **`readonly`** property can only be set in the constructor. After that, any attempt to change it causes a compile error.

```typescript
class Order {
  readonly id: string;
  total: number;

  constructor(id: string, total: number) {
    this.id = id;
    this.total = total;
  }
}

const order = new Order("abc-123", 49.99);
order.total = 59.99; // OK
// order.id = "xyz"; // Error: cannot assign to 'id'
```

This is perfect for values like IDs or timestamps that should never change after creation. You can combine `readonly` with other modifiers too. `private readonly id: string` keeps it both locked down and immutable.

## Fill in the Blanks

Fill in the blanks:

```typescript
class Order {
  __(1)__ id: string;
  total: number;

  constructor(id: string, total: number) {
    this.id = id;
    this.total = total;
  }
}

const order = new Order("abc", 49.99);
order.total = 59.99;
// order.__(2)__ = "xyz"; // Error!
```

<details>
<summary>Answer</summary>

1. `readonly`
2. `id`

</details>

---

[← Course overview](../../../README.md)
