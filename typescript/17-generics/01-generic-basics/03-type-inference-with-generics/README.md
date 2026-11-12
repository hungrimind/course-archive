# Type Inference with Generics

TypeScript can **infer** the type parameter from the arguments you pass, so you usually don't need to write it out explicitly.

```typescript
function first<T>(items: T[]): T {
  return items[0];
}

const result = first(["a", "b"]); // T inferred as string
```

Since you passed a `string[]`, TypeScript figures out that `T` is `string` on its own. You only need to specify `<string>` explicitly when inference gets it wrong or when there are no arguments to infer from.

## True or False

**1. True or false:** When calling a generic function, you must always explicitly specify the type parameter in angle brackets.

<details>
<summary>Answer</summary>

**False**: TypeScript can infer the type parameter from the arguments you pass. You only need to specify it explicitly when inference gets it wrong or when there are no arguments to infer from.

</details>

**2. True or false:** If you pass a `string[]` to a function with signature `<T>(items: T[]): T`, TypeScript infers `T` as `string`.

<details>
<summary>Answer</summary>

**True**: TypeScript examines the argument type and works backwards to determine the type parameter. Since `string[]` matches `T[]`, it infers `T` as `string`.

</details>

**3. True or false:** Type inference with generics only works for primitive types like `string` and `number`, not for complex types.

<details>
<summary>Answer</summary>

**False**: Type inference works for any type, including objects, arrays, and custom types. TypeScript infers the type parameter based on whatever argument is passed, regardless of complexity.

</details>

---

[← Course overview](../../../README.md)
