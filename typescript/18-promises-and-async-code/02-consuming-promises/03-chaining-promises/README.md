# Chaining Promises

Each **`.then()`** returns a new promise, so you can chain them into a pipeline. Each step receives the result of the previous one.

```typescript
fetch("/api/user")
  .then((response) => response.json())
  .then((data) => data.name)
  .then((name) => console.log(name))
  .catch((err) => console.log(err));
```

A single `.catch()` at the end handles errors from any step in the chain. If step two fails, steps three and four are skipped and the error flows straight to `.catch()`.


## Assignment

Create a function called `processName` that takes a `Promise<string>` representing a name. Chain `.then()` calls to:

1. Trim whitespace from the name
2. Convert it to uppercase
3. Prepend `"Hello, "` to it

The function should return a `Promise<string>`. For example, if the input resolves with `"  alice  "`, the result should be `"Hello, ALICE"`.

## Challenge

Create a function called `processName` that takes a `Promise<string>` representing a name. Chain `.then()` calls to:

1. Trim whitespace from the name
2. Convert it to uppercase
3. Prepend `"Hello, "` to it

The function should return a `Promise<string>`. For example, if the input resolves with `"  alice  "`, the result should be `"Hello, ALICE"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
