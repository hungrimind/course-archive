# Modifying Items

You change an item by assigning a new value to its index. The array is updated **in place** -- no new array is created.

```typescript
const colors = ["red", "green", "blue"];
colors[0] = "yellow";
console.log(colors); // ["yellow", "green", "blue"]
```

Even though `colors` is declared with `const`, you can still change the items inside it. The `const` only prevents reassigning the variable itself, not mutating the array's contents.


## Assignment

Start with the array `const colors = ["red", "green", "blue"]`.

1. Change the item at index 0 to `"yellow"`
2. Change the item at index 2 to `"purple"`

Then print the entire array with `console.log(colors)`.

## Challenge

Start with the array `const colors = ["red", "green", "blue"]`.

1. Change the item at index 0 to `"yellow"`
2. Change the item at index 2 to `"purple"`

Then print the entire array with `console.log(colors)`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
