# Filtering Items

**`.filter()`** creates a new array containing only the items that pass a test. If the callback returns `true`, the item stays. If `false`, it's left out.

```typescript
const numbers = [1, 2, 3, 4, 5];
const big = numbers.filter(n => n > 3);

console.log(big); // [4, 5]
```

Like `.map()`, the original array is never modified. The result can be shorter than the original, or even empty if nothing passes.


## Assignment

Complete the `filterBigNumbers` function so that it uses `.filter()` to return a new array containing only numbers greater than 3. The original array should remain unchanged.

## Challenge

Complete the `filterBigNumbers` function so that it uses `.filter()` to return a new array containing only numbers greater than 3. The original array should remain unchanged.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
