# Generic Functions

A **generic function** declares a **type parameter** in angle brackets before the parentheses. That parameter acts as a placeholder for a real type.

```typescript
function first<T>(items: T[]): T {
  return items[0];
}

const result = first<string>(["a", "b"]); // result is string
```

`T` isn't special. It's just a convention. You could call it `Item` or `X`. What matters is that TypeScript now knows `result` is a `string`, not `any`.


## Assignment

Create a generic function called `wrap` that takes a single value of type `T` and returns it inside an array of type `T[]`. This lets you safely wrap any value in an array while preserving its type.

## Challenge

Create a generic function called `wrap` that takes a single value of type `T` and returns it inside an array of type `T[]`. This lets you safely wrap any value in an array while preserving its type.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
