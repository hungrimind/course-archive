# typeof Checks

**Type narrowing** is when TypeScript figures out a more specific type inside a conditional block. The most common way to narrow is with `typeof`.

```typescript
function double(value: string | number) {
  if (typeof value === "string") {
    return value.repeat(2);   // TypeScript knows it's a string
  }
  return value * 2;           // TypeScript knows it's a number
}
```

Inside the `if` block, TypeScript sees the `typeof` check and **narrows** `value` from `string | number` down to just `string`. In the `else` branch, it knows only `number` remains. You get full autocomplete and type safety in both branches.


## Assignment

Export a `stringify` function that accepts a `string | number | boolean` parameter and returns a `string`. Use `typeof` checks to narrow the type: for strings return `"text: "` followed by the value, for numbers return `"number: "` followed by the value, and for booleans return `"boolean: "` followed by the value.

## Challenge

Export a `stringify` function that accepts a `string | number | boolean` parameter and returns a `string`. Use `typeof` checks to narrow the type: for strings return `"text: "` followed by the value, for numbers return `"number: "` followed by the value, and for booleans return `"boolean: "` followed by the value.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
