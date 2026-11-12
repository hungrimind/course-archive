# TypeScript Knows Types

TypeScript automatically figures out a variable's type from the value you assign. This is called **type inference**.

```typescript
const name = "Alice";  // TypeScript knows: string
const age = 30;        // TypeScript knows: number
const active = true;   // TypeScript knows: boolean
```

You didn't have to write the types anywhere. TypeScript reads the right side of the `=` and works it out. Less typing, same safety.

## Matching

Sort each item into the right category: **Inferred as string**, **Inferred as number**, **Inferred as boolean**

- const active = true
- const age = 30
- const city = 'Oslo'
- const done = false
- const name = "Alice"
- const price = 9.99

<details>
<summary>Answer</summary>

**Inferred as string**
- const name = "Alice"
- const city = 'Oslo'

**Inferred as number**
- const age = 30
- const price = 9.99

**Inferred as boolean**
- const active = true
- const done = false

</details>

---

[← Course overview](../../../README.md)
