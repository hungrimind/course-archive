# Sorting Arrays

**`.sort()`** rearranges items in an array **in place**, meaning it modifies the original. By default it converts items to strings and sorts alphabetically, which gives wrong results for numbers.

```typescript
const numbers = [10, 5, 40, 1];
numbers.sort((a, b) => a - b);

console.log(numbers); // [1, 5, 10, 40]
```

The **comparison function** receives two items. Return a negative number to put `a` first, a positive number to put `b` first. The shorthand `a - b` gives ascending order; `b - a` gives descending.

> [!warning]
> Unlike `.map()` and `.filter()`, `.sort()` changes the original array.


## Assignment

You have an array of exam scores. Write two functions that each return a **new** sorted array without modifying the original:

- `sortLowestFirst` should sort scores from lowest to highest.
- `sortHighestFirst` should sort scores from highest to lowest.

## Challenge

You have an array of exam scores. Write two functions that each return a **new** sorted array without modifying the original:

- `sortLowestFirst` should sort scores from lowest to highest.
- `sortHighestFirst` should sort scores from highest to lowest.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
