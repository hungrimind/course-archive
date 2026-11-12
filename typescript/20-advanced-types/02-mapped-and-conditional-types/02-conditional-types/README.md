# Conditional Types

A **conditional type** picks one of two types based on a condition, using syntax that looks like a ternary: `T extends U ? X : Y`. If `T` is assignable to `U`, the result is `X`; otherwise it's `Y`.

```typescript
type IsString<T> = T extends string ? "text" : "other";

type A = IsString<string>;  // "text"
type B = IsString<number>;  // "other"
```

Many of TypeScript's built-in utility types (like `Extract`, `Exclude`, and `ReturnType`) are powered by conditional types. You won't write them daily, but recognizing the pattern helps you read library type definitions.


## Assignment

1. Complete the `IsString<T>` conditional type so it resolves to `"text"` when `T` extends `string`, and `"other"` otherwise.
2. Implement the `classify` function that returns `"text"` for string values and `"other"` for everything else.

## Challenge

1. Complete the `IsString<T>` conditional type so it resolves to `"text"` when `T` extends `string`, and `"other"` otherwise.
2. Implement the `classify` function that returns `"text"` for string values and `"other"` for everything else.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
