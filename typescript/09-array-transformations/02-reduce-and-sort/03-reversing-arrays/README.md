# Reversing Arrays

**`.reverse()`** flips the order of items in an array in place, just like `.sort()`.

```typescript
const letters = ["a", "b", "c"];
letters.reverse();

console.log(letters); // ["c", "b", "a"]
```

A common pattern is combining `.sort()` and `.reverse()`, but for numbers, using `b - a` in the sort comparison is simpler than sorting ascending and then reversing.


## Assignment

Complete the `reverseArray` function so that it returns a reversed copy of the input array without modifying the original. Use the spread operator to create a copy first, then call `.reverse()` on it.

## Challenge

Complete the `reverseArray` function so that it returns a reversed copy of the input array without modifying the original. Use the spread operator to create a copy first, then call `.reverse()` on it.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
