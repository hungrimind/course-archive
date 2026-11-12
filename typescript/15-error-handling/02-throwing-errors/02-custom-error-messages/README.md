# Custom Error Messages

A **descriptive error message** makes debugging dramatically easier. The string you pass to `new Error()` shows up in logs and catch blocks, so make it count.

```typescript
// Bad, tells you nothing
throw new Error("Error");

// Good, tells you exactly what went wrong
throw new Error("User with id 42 not found");
```

Include relevant details like IDs, expected values, or what operation failed. Your future self will thank you when reading logs at midnight.


## Assignment

Complete the `findUser` function. Look up the user by `id` in the `users` object. If the user exists, return their name. If not, throw a new `Error` with a descriptive message that includes the id, like `"User with id 42 not found"`.

## Challenge

Complete the `findUser` function. Look up the user by `id` in the `users` object. If the user exists, return their name. If not, throw a new `Error` with a descriptive message that includes the id, like `"User with id 42 not found"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
