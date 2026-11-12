# Spreading Arrays

The **spread operator** (`...`) unpacks an array's items into individual elements. It's the quickest way to copy or merge arrays.

```typescript
const first = [1, 2];
const second = [3, 4];

const copy = [...first];
const merged = [...first, ...second];

console.log(merged); // [1, 2, 3, 4]
```

Spreading creates a **shallow copy**, so the new array is independent of the original. This is handy when you want to sort or reverse without mutating the source. Just spread into a new array first: `[...numbers].sort()`.


## Assignment

Complete both functions using the spread operator (`...`):

1. `mergeArrays` should return a new array that combines `first` and `second` into one.
2. `copyArray` should return a shallow copy of the input array.

Neither function should modify the original arrays.

## Challenge

Complete both functions using the spread operator (`...`):

1. `mergeArrays` should return a new array that combines `first` and `second` into one.
2. `copyArray` should return a shallow copy of the input array.

Neither function should modify the original arrays.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
