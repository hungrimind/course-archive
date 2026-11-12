# Reducing to a Value

**`.reduce()`** combines all items in an array into a single value. It takes a callback and a starting value, then runs the callback for each item, passing the running total forward.

```typescript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, n) => total + n, 0);

console.log(sum); // 10
```

The first argument to the callback (`total`) is called the **accumulator**, and it carries the result so far. The second argument is the current item. The `0` at the end is the initial value of the accumulator.


## Assignment

Complete the `sumAll` function so that it uses `.reduce()` to add up all numbers in the array and return the total. Use `0` as the initial accumulator value.

## Challenge

Complete the `sumAll` function so that it uses `.reduce()` to add up all numbers in the array and return the total. Use `0` as the initial accumulator value.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
