# Skipping Iterations

The **continue** keyword skips the rest of the current iteration and jumps straight to the next one. The loop keeps running. It just ignores that particular pass.

```typescript
for (let i = 0; i < 6; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
// 1, 3, 5
```

Where `break` kills the whole loop, `continue` only skips one round. It's useful for filtering out values you don't care about without stopping everything.


## Assignment

Write an `oddOnly` function that uses **continue** to collect only the odd numbers from 1 to a given limit.

1. Accept a `limit` number
2. Loop from `1` to `limit` (inclusive)
3. If the current number is even (`i % 2 === 0`), use `continue` to skip it
4. Otherwise, push the number into a result array
5. Return the result array

`oddOnly(10)` should return `[1, 3, 5, 7, 9]`.

## Challenge

Write an `oddOnly` function that uses **continue** to collect only the odd numbers from 1 to a given limit.

1. Accept a `limit` number
2. Loop from `1` to `limit` (inclusive)
3. If the current number is even (`i % 2 === 0`), use `continue` to skip it
4. Otherwise, push the number into a result array
5. Return the result array

`oddOnly(10)` should return `[1, 3, 5, 7, 9]`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
