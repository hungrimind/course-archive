# Truthiness Narrowing

Checking `if (value)` narrows out `null`, `undefined`, `0`, `""`, and other **falsy** values. TypeScript uses this to eliminate types that could be missing.

```typescript
function greet(name: string | null) {
  if (name) {
    console.log(`Hi, ${name.toUpperCase()}`);
  }
}
```

Inside the `if` block, TypeScript knows `name` is a `string` because `null` is falsy and gets filtered out. This is the simplest form of narrowing -- just a plain truthiness check.

> [!warning] This also filters out empty strings and `0`, so be careful when those are valid values.


## Assignment

Export a function `formatUsername` that takes a `name` parameter of type `string | null` and returns a `string`. Use truthiness narrowing to check if `name` is truthy. If it is, return the name unchanged. If it is falsy, return `"Anonymous"`.

## Challenge

Export a function `formatUsername` that takes a `name` parameter of type `string | null` and returns a `string`. Use truthiness narrowing to check if `name` is truthy. If it is, return the name unchanged. If it is falsy, return `"Anonymous"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
