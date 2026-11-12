# Custom Type Guards

A **custom type guard** is a function whose return type is `value is Type`. When the function returns `true`, TypeScript narrows the variable to that specific type inside any `if` block.

```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}

const input: unknown = "hello";
if (isString(input)) {
  console.log(input.toUpperCase()); // TypeScript knows it's a string
}
```

This is especially useful when `typeof` alone isn't enough, like checking if an object matches a particular interface. You write the logic once, and TypeScript trusts the guard everywhere you call it.


## Assignment

1. Implement the `isFish` type guard by checking whether the `"swim"` property exists on the animal using the `in` operator.
2. Implement the `move` function that uses `isFish` to call `animal.swim()` for fish and `animal.fly()` for birds.

## Challenge

1. Implement the `isFish` type guard by checking whether the `"swim"` property exists on the animal using the `in` operator.
2. Implement the `move` function that uses `isFish` to call `animal.swim()` for fish and `animal.fly()` for birds.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
