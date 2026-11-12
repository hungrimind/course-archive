# Creating Promises

You create a promise with **`new Promise()`**, passing it a function that receives **resolve** and **reject**. Call `resolve(value)` when the operation succeeds, or `reject(error)` when it fails.

```typescript
const delay = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("Done!");
  }, 1000);
});
```

The value you pass to `resolve` becomes the fulfilled value of the promise. The value you pass to `reject` becomes the rejection reason. Most of the time you'll consume promises rather than create them, but understanding the internals helps.


## Assignment

Create a function called `makePromise` that takes a `value` of type `string` and returns a `Promise<string>`. Inside, use `new Promise()` and call `resolve` with the given value.

Also create a function called `makeRejectedPromise` that takes a `reason` of type `string` and returns a `Promise<string>`. Inside, use `new Promise()` and call `reject` with the given reason.

## Challenge

Create a function called `makePromise` that takes a `value` of type `string` and returns a `Promise<string>`. Inside, use `new Promise()` and call `resolve` with the given value.

Also create a function called `makeRejectedPromise` that takes a `reason` of type `string` and returns a `Promise<string>`. Inside, use `new Promise()` and call `reject` with the given reason.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
