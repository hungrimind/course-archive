# Chaining Methods

**Method chaining** works because `.map()` and `.filter()` both return new arrays, so you can call another method right on the result.

```typescript
const numbers = [-2, -1, 0, 1, 2, 3];

const result = numbers
  .filter(n => n > 0)
  .map(n => n * 10);

console.log(result); // [10, 20, 30]
```

Each step feeds into the next like a pipeline. Filter first to shrink the list, then map to transform what's left. Order matters, since filtering before mapping avoids wasted work.


## Assignment

Complete the `filterAndScale` function by chaining `.filter()` and `.map()` together. First, filter to keep only positive numbers (greater than 0), then multiply each remaining number by 10.

## Challenge

Complete the `filterAndScale` function by chaining `.filter()` and `.map()` together. First, filter to keep only positive numbers (greater than 0), then multiply each remaining number by 10.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
