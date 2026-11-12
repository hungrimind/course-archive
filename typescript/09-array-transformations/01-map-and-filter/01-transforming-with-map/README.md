# Transforming with map

**`.map()`** creates a new array by applying a function to every item in the original. The original array stays untouched.

```typescript
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3]
```

Whatever you return from the callback becomes the corresponding item in the new array. The length always matches the original.


## Assignment

Complete the `doubleNumbers` function so that it uses `.map()` to return a new array where every number is doubled. The original array should not be modified.

## Challenge

Complete the `doubleNumbers` function so that it uses `.map()` to return a new array where every number is doubled. The original array should not be modified.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
