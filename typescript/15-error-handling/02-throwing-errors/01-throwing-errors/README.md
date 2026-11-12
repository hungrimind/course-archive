# Throwing Errors

**`throw new Error()`** lets you create your own errors when something goes wrong. This immediately stops the function and hands control to the nearest `catch` block.

```typescript
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
```

You throw errors to signal that a function can't do its job. The calling code can then decide how to handle it with try-catch.


## Assignment

Complete the `withdraw` function that takes a `balance` and an `amount`. If the `amount` is negative, throw a new `Error` with the message `"Amount must be positive"`. If the `amount` exceeds the `balance`, throw a new `Error` with the message `"Insufficient funds"`. Otherwise, return the remaining balance.

## Challenge

Complete the `withdraw` function that takes a `balance` and an `amount`. If the `amount` is negative, throw a new `Error` with the message `"Amount must be positive"`. If the `amount` exceeds the `balance`, throw a new `Error` with the message `"Insufficient funds"`. Otherwise, return the remaining balance.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
