# Return Type Annotations

A **return type annotation** goes after the parameter list, before the opening brace. It guarantees what the function gives back.

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

TypeScript can usually infer return types, so this annotation is optional. But it catches subtle bugs, like accidentally forgetting a `return` statement or returning the wrong type from one branch of an `if`.


## Assignment

Write two functions with explicit return type annotations. `multiply` takes two `number` parameters and returns their product as a `number`. `isEven` takes a `number` and returns a `boolean` indicating whether the number is even.

## Challenge

Write two functions with explicit return type annotations. `multiply` takes two `number` parameters and returns their product as a `number`. `isEven` takes a `number` and returns a `boolean` indicating whether the number is even.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
