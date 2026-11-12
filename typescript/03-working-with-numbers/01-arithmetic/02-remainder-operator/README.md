# Remainder Operator

The **`%`** operator returns the remainder after division. `10 % 3` is `1` because 3 goes into 10 three times with 1 left over.

```typescript
const remainder = 10 % 3; // 1
const isEven = 8 % 2;     // 0 (no remainder means it's even)
```

The classic trick: if `n % 2 === 0`, the number is **even**. If it's `1`, it's **odd**.


## Assignment

Implement two functions. `remainder` takes two numbers and returns the remainder after dividing the first by the second using the `%` operator. `isEven` takes a number and returns `true` if it is even, `false` if it is odd.

## Challenge

Implement two functions. `remainder` takes two numbers and returns the remainder after dividing the first by the second using the `%` operator. `isEven` takes a number and returns `true` if it is even, `false` if it is odd.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
