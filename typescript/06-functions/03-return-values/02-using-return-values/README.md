# Using Return Values

A function's return value can be stored in a variable, passed to another function, or used directly in an expression.

```typescript
function double(n) {
  return n * 2;
}

let result = double(5);
console.log(double(3) + double(4)); // 14
```

The return value is just a value. You can use it anywhere you'd use a number, string, or any other data.


## Assignment

Create a `square` function that takes a `number` parameter and returns its square (the number multiplied by itself). Store the result of `square(4)` in a variable called `result` and print it. Then print the sum of `square(2)` and `square(3)`.

## Challenge

Create a `square` function that takes a `number` parameter and returns its square (the number multiplied by itself). Store the result of `square(4)` in a variable called `result` and print it. Then print the sum of `square(2)` and `square(3)`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
