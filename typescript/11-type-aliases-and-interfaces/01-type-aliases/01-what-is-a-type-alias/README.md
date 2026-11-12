# What is a Type Alias?

A **type alias** gives a name to a type so you can reuse it instead of writing the same shape over and over. You create one with the `type` keyword.

```typescript
type Person = {
  name: string;
  age: number;
};

const alice: Person = { name: "Alice", age: 30 };
```

Without the alias, you'd repeat `{ name: string; age: number }` every time you need that shape. With it, you just write `Person`.

## Quiz

**1. What keyword do you use to create a type alias in TypeScript?**

- A) interface
- B) type
- C) alias
- D) define

<details>
<summary>Answer</summary>

- B) type

The 'type' keyword is used to create a type alias, e.g. type Person = { name: string; age: number };

</details>

**2. What is the main benefit of using a type alias?**

- A) It makes your code run faster at runtime
- B) It lets you reuse a type definition instead of repeating it everywhere
- C) It automatically validates data from APIs
- D) It converts JavaScript to TypeScript

<details>
<summary>Answer</summary>

- B) It lets you reuse a type definition instead of repeating it everywhere

A type alias gives a name to a type so you can reuse it instead of writing the same shape over and over. If the shape changes, you update it in one place.

</details>

---

[← Course overview](../../../README.md)
