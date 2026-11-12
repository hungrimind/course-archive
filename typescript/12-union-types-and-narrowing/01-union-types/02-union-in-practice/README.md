# Union in Practice

Unions shine in functions that need to handle multiple input types. A single function can accept different kinds of values and still be type-safe.

```typescript
function formatId(id: string | number): string {
  return `ID: ${id}`;
}

formatId(42);       // "ID: 42"
formatId("abc");    // "ID: abc"
```

This pattern shows up constantly -- API responses that could be data or an error, config values that might be a string or a number, inputs that accept several formats. Unions let you model that flexibility without losing type safety.


## Assignment

Write a function `describeValue` that accepts a `string | number` parameter and returns a labeled string. For numbers, return `"number: {value}"` and for strings, return `"text: {value}"`. Use `typeof` to check the type at runtime.

## Challenge

Write a function `describeValue` that accepts a `string | number` parameter and returns a labeled string. For numbers, return `"number: {value}"` and for strings, return `"text: {value}"`. Use `typeof` to check the type at runtime.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
