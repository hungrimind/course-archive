# Not Equal

**`!==`** checks if two values are NOT equal. It's the opposite of `===`.

```typescript
const status: string = "active";
const isNotActive: boolean = status !== "active"; // false
const isNotPending: boolean = status !== "pending"; // true
```

Just like with equality, always use `!==` over `!=`. Same reason: `!=` does weird type conversions behind your back.

## Fill in the Blanks

Fill in the blanks:

```typescript
const status: string = "active";
const isNotActive: boolean = status __(1)__ "active"; // false
const isNotPending: boolean = status __(2)__ "pending"; // true
```

<details>
<summary>Answer</summary>

1. `!==`
2. `!==`

</details>

---

[← Course overview](../../../README.md)
