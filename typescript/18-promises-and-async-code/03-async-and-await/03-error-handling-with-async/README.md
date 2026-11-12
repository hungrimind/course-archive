# Error Handling with Async

Wrap your `await` calls in **try/catch** to handle errors, the same pattern you already know from synchronous code.

```typescript
async function loadUser() {
  try {
    const response = await fetch("/api/user");
    const data = await response.json();
    console.log(data.name);
  } catch (err) {
    console.log("Something went wrong:", err);
  }
}
```

If any awaited promise rejects, execution jumps straight to the `catch` block. This replaces `.catch()` and keeps your error handling visually close to the code that might fail.


## Assignment

Create an `async` function called `safeAwait` that takes a `Promise<string>` parameter.

Use `try/catch` to:
- Return the resolved value if the promise succeeds
- Return `"Error occurred"` if the promise rejects

The function should return `Promise<string>` and never reject.

## Challenge

Create an `async` function called `safeAwait` that takes a `Promise<string>` parameter.

Use `try/catch` to:
- Return the resolved value if the promise succeeds
- Return `"Error occurred"` if the promise rejects

The function should return `Promise<string>` and never reject.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
