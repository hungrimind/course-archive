# Mapped Types

A **mapped type** loops over every property of a type and transforms it. The syntax `[K in keyof T]` iterates each key, and you decide what the new value type should be.

```typescript
type BooleanFlags<T> = {
  [K in keyof T]: boolean;
};

type User = { name: string; age: number };
type UserFlags = BooleanFlags<User>;
// { name: boolean; age: boolean }
```

This is exactly how TypeScript's built-in `Partial`, `Required`, and `Readonly` work under the hood. They map over every key and add or remove a modifier like `?` or `readonly`.


## Assignment

1. Complete the `BooleanFlags<T>` mapped type so that every property of `T` becomes `boolean`.
2. Implement the `createFlags` function that takes an object and a boolean value, and returns a new object where every key maps to that boolean value.

## Challenge

1. Complete the `BooleanFlags<T>` mapped type so that every property of `T` becomes `boolean`.
2. Implement the `createFlags` function that takes an object and a boolean value, and returns a new object where every key maps to that boolean value.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
