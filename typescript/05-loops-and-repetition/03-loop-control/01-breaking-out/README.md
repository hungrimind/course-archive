# Breaking Out

The **break** keyword immediately exits the loop, skipping all remaining iterations.

```typescript
for (let i = 0; i < 100; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
// 0, 1, 2, 3, 4
```

Once `break` runs, the loop is done. Execution jumps straight to the code after the closing brace. It's handy when you're searching for something and want to stop as soon as you find it.


## Assignment

Write a `firstNegative` function that uses **break** to find the first negative number in an array.

1. Accept an array of numbers
2. Default the result to `-1` (meaning "not found")
3. Loop through the array with a for loop
4. When you find a negative number, store it in `result` and `break` out of the loop
5. Return `result`

`firstNegative([3, 7, -2, 5, -8])` should return `-2`.
`firstNegative([1, 2, 3])` should return `-1`.

## Challenge

Write a `firstNegative` function that uses **break** to find the first negative number in an array.

1. Accept an array of numbers
2. Default the result to `-1` (meaning "not found")
3. Loop through the array with a for loop
4. When you find a negative number, store it in `result` and `break` out of the loop
5. Return `result`

`firstNegative([3, 7, -2, 5, -8])` should return `-2`.
`firstNegative([1, 2, 3])` should return `-1`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
