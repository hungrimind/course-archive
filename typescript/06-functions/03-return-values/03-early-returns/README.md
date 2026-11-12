# Early Returns

An **early return** exits a function before reaching the end, usually based on a condition. This keeps your code flat and avoids deeply nested `if` blocks.

```typescript
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}
```

The guard check at the top handles the edge case and bails out. The "happy path" lives at the bottom, unindented and easy to read.


## Assignment

Create a `withdraw` function that takes a `balance` (number) and an `amount` (number). Use an early return to check if `amount` is greater than `balance` and return `"Insufficient funds"`. Otherwise, return the new balance after subtracting the amount.

## Challenge

Create a `withdraw` function that takes a `balance` (number) and an `amount` (number). Use an early return to check if `amount` is greater than `balance` and return `"Insufficient funds"`. Otherwise, return the new balance after subtracting the amount.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
