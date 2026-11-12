# Promise all

**`Promise.all()`** takes an array of promises and waits for all of them to finish. It returns an array of results in the same order you passed them in.

```typescript
const [users, posts] = await Promise.all([
  fetchUsers(),
  fetchPosts(),
]);
```

This is faster than awaiting each one sequentially because the requests run in parallel. But it's all or nothing. If any single promise rejects, the entire `Promise.all` rejects.


## Assignment

Create an `async` function called `fetchAll` that takes three parameters: `a` of type `Promise<string>`, `b` of type `Promise<string>`, and `c` of type `Promise<string>`.

Use `Promise.all` to wait for all three promises to resolve, then return the three values joined with `", "`.

For example, if the promises resolve with `"one"`, `"two"`, and `"three"`, return `"one, two, three"`.

## Challenge

Create an `async` function called `fetchAll` that takes three parameters: `a` of type `Promise<string>`, `b` of type `Promise<string>`, and `c` of type `Promise<string>`.

Use `Promise.all` to wait for all three promises to resolve, then return the three values joined with `", "`.

For example, if the promises resolve with `"one"`, `"two"`, and `"three"`, return `"one, two, three"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
