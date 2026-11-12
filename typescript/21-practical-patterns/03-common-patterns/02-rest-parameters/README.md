# Rest Parameters

A **rest parameter** collects all remaining arguments into an array using the `...` syntax. It must be the last parameter in the function signature.

```typescript
function sum(...nums: number[]): number {
  return nums.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20));  // 30
```

This lets a function accept any number of arguments without requiring the caller to build an array first. TypeScript enforces that every argument matches the declared type. Here, they all must be `number`.


## Assignment

Export a function `longest` that accepts any number of strings via a rest parameter and returns the longest one. If multiple strings share the maximum length, return the first one found. If no arguments are passed, return an empty string.

## Challenge

Export a function `longest` that accepts any number of strings via a rest parameter and returns the longest one. If multiple strings share the maximum length, return the first one found. If no arguments are passed, return an empty string.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
