# The then Method

The **`.then()`** method lets you run code when a promise fulfills. You pass it a callback that receives the resolved value.

```typescript
fetchUsername().then((name) => {
  console.log(name); // "Alice"
});
```

The callback inside `.then()` only runs once the promise has settled with a value. If the promise is still pending, your callback waits. If it already fulfilled, the callback runs right away.


## Assignment

Create a function called `addExcitement` that takes a `Promise<string>` and uses `.then()` to append `"!"` to the resolved value. The function should return the resulting `Promise<string>`.

For example, if the input promise resolves with `"Hello"`, the returned promise should resolve with `"Hello!"`.

## Challenge

Create a function called `addExcitement` that takes a `Promise<string>` and uses `.then()` to append `"!"` to the resolved value. The function should return the resulting `Promise<string>`.

For example, if the input promise resolves with `"Hello"`, the returned promise should resolve with `"Hello!"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
