# Error Handling Patterns

Not every error needs try-catch. A common alternative is returning **`null`** to signal failure, letting the caller check the result instead of catching exceptions.

```typescript
function findUser(id: number): User | null {
  const user = users.find(u => u.id === id);
  return user ?? null;
}
```

Another pattern uses a **result object** with a `success` flag and either `data` or an `error` field. This makes success and failure explicit in the return type. Throwing errors works best for truly exceptional situations, things that shouldn't normally happen. For expected failures like "user not found," returning `null` or a result object is often cleaner.


## Assignment

Implement two error handling patterns for a division function. `safeDivide` should return the quotient or `null` when dividing by zero. `safeDivideResult` should return a result object: `{ success: true, data: quotient }` on success, or `{ success: false, error: "Cannot divide by zero" }` on failure.

## Challenge

Implement two error handling patterns for a division function. `safeDivide` should return the quotient or `null` when dividing by zero. `safeDivideResult` should return a result object: `{ success: true, data: quotient }` on success, or `{ success: false, error: "Cannot divide by zero" }` on failure.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
