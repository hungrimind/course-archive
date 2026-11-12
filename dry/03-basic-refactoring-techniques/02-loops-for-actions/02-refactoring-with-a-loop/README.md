# Refactoring with a Loop

To eliminate redundancy, identify repeated actions in your code and use a **loop** to perform these actions iteratively.

```typescript
// Without loop: repetitive actions
console.log('Hello');
console.log('Hello');
console.log('Hello');

// With loop: D.R.Y. solution
for (let i = 0; i < 3; i++) {
  console.log('Hello');
}
```

Instead of repeating `console.log('Hello')`, the loop runs the action three times. This approach makes your code cleaner and easier to maintain.

> [!tip]
> Use loops for tasks that repeat a predictable number of times or when iterating over collections.

## Assignment

To simplify your `repeatHello` function, refactor the code to use a loop instead of repeated `lines.push('Hello')` statements. 

1. Replace the three `lines.push('Hello')` calls with a `for` loop that runs `times` number of times.
2. Change the console log statements to iterate over the `lines` array with a loop instead of accessing each index directly.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
