# forEach Method

**.forEach()** calls a function once for each item in the array. It passes the current item and its index to that function.

```typescript
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
```

It's functionally similar to `for...of`, but uses a callback instead of a loop body. One difference: you can't `break` out of a `forEach` early.


## Assignment

Start with `const colors = ["red", "green", "blue"]`.

Use the `forEach` method to print each color with its index in the format `index: color`. For example, the first line should be `0: red`.

## Challenge

Start with `const colors = ["red", "green", "blue"]`.

Use the `forEach` method to print each color with its index in the format `index: color`. For example, the first line should be `0: red`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
