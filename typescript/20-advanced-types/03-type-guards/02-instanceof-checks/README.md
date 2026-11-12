# instanceof Checks

The **`instanceof`** operator checks whether an object was created from a specific class. TypeScript uses it as a built-in type guard. Inside the `if` block, the type is automatically narrowed.

```typescript
function handleError(err: Error) {
  if (err instanceof TypeError) {
    console.log(err.message); // narrowed to TypeError
  } else if (err instanceof RangeError) {
    console.log(err.message); // narrowed to RangeError
  }
}
```

Unlike custom type guards, `instanceof` works without any extra functions. TypeScript already understands it. The catch is it only works with classes, not plain interfaces or type aliases, since those don't exist at runtime.


## Assignment

Implement the `classifyError` function. Use `instanceof` checks to determine the error type and return a message specific to each class. For a `TemporaryError`, include the retry delay. For a `PermanentError`, include the error code. Return a generic message for any other `Error`.

## Challenge

Implement the `classifyError` function. Use `instanceof` checks to determine the error type and return a message specific to each class. For a `TemporaryError`, include the retry delay. For a `PermanentError`, include the error code. Return a generic message for any other `Error`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
