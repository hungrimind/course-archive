# Optional Chaining

The **`?.` operator** safely accesses properties on values that might be `null` or `undefined`. Instead of crashing, it short-circuits and returns `undefined`.

```typescript
type User = { address?: { city: string } };

function getCity(user: User | null): string | undefined {
  return user?.address?.city;
}
```

Without `?.`, you'd need nested `if` checks to avoid a runtime error. Each `?.` in the chain says "if this part is null or undefined, stop here and give me `undefined`." It works on property access, method calls (`obj?.method()`), and even array indexing (`arr?.[0]`).


## Assignment

Complete the `getEmail` function using optional chaining (`?.`) to safely access the user's email. The function should return the email string when it exists, or `undefined` when the user is `null`, the `contact` property is missing, or the `email` property is missing.

## Challenge

Complete the `getEmail` function using optional chaining (`?.`) to safely access the user's email. The function should return the email string when it exists, or `undefined` when the user is `null`, the `contact` property is missing, or the `email` property is missing.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
