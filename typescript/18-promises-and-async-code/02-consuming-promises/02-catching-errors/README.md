# Catching Errors

The **`.catch()`** method handles promise rejections. Without it, a failed promise causes an unhandled error that can crash your program silently.

```typescript
fetchUsername()
  .then((name) => console.log(name))
  .catch((err) => console.log("Failed:", err));
```

> [!warning]
> Always attach a `.catch()` to your promise chains. Unhandled rejections are one of the most common async bugs.


## Assignment

Create a function called `safeFetch` that takes a `Promise<string>` parameter. Use `.then()` to return the resolved value, and `.catch()` to return the string `"fallback"` if the promise rejects.

The function should return a `Promise<string>` that never rejects.

## Challenge

Create a function called `safeFetch` that takes a `Promise<string>` parameter. Use `.then()` to return the resolved value, and `.catch()` to return the string `"fallback"` if the promise rejects.

The function should return a `Promise<string>` that never rejects.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
