# Loop Counters

A **loop counter** is a variable that tracks how many times the loop has run. You set it before the loop, check it in the condition, and update it inside the body.

```typescript
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
```

Three pieces work together here: the initial value (`0`), the condition (`< 5`), and the update (`count++`). Forget the update and the loop never ends.


## Assignment

Write a `multiplyByAddition` function that multiplies two numbers without using the `*` operator. Instead, use a while loop with a counter to add `a` to a running total exactly `b` times.

`multiplyByAddition(3, 4)` should return `12` and `multiplyByAddition(6, 0)` should return `0`.

## Challenge

Write a `multiplyByAddition` function that multiplies two numbers without using the `*` operator. Instead, use a while loop with a counter to add `a` to a running total exactly `b` times.

`multiplyByAddition(3, 4)` should return `12` and `multiplyByAddition(6, 0)` should return `0`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
