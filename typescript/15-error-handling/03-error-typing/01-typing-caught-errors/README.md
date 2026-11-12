# Typing Caught Errors

Caught errors in TypeScript have type **`unknown`** because technically anything can be thrown, not just `Error` objects. You need to narrow the type before accessing properties like `.message`.

```typescript
try {
  doSomethingRisky();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
```

> [!warning]
> Accessing `error.message` directly without checking will give you a type error. Always narrow with `instanceof Error` first.


## Assignment

Complete the `getErrorMessage` function. It takes a function `fn` and calls it inside a try-catch block.

1. If `fn` runs without error, return `"No error"`.
2. In the catch block, use `instanceof Error` to check the caught error. If it is an `Error`, return its `.message`. Otherwise, return `"Unknown error"`.

## Challenge

Complete the `getErrorMessage` function. It takes a function `fn` and calls it inside a try-catch block.

1. If `fn` runs without error, return `"No error"`.
2. In the catch block, use `instanceof Error` to check the caught error. If it is an `Error`, return its `.message`. Otherwise, return `"Unknown error"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
