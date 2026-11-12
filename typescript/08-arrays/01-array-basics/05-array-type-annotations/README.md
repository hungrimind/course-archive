# Array Type Annotations

A **type annotation** on an array tells TypeScript what kind of items it holds. Write the item type followed by `[]`.

```typescript
const names: string[] = ["Alice", "Bob"];
const ages: number[] = [25, 30];
const flags: boolean[] = [true, false, true];
```

TypeScript will now stop you from pushing a `number` into `names` or a `string` into `ages`. If you skip the annotation, TypeScript infers the type from the initial values.


## Assignment

Create three arrays with explicit type annotations:

1. `names` -- a `string[]` containing `"Alice"` and `"Bob"`
2. `scores` -- a `number[]` containing `100`, `95`, and `88`
3. `flags` -- a `boolean[]` containing `true`, `false`, and `true`

Print each array with `console.log`.

## Challenge

Create three arrays with explicit type annotations:

1. `names` -- a `string[]` containing `"Alice"` and `"Bob"`
2. `scores` -- a `number[]` containing `100`, `95`, and `88`
3. `flags` -- a `boolean[]` containing `true`, `false`, and `true`

Print each array with `console.log`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
