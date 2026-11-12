# Nested Loops

A **nested loop** is a loop inside another loop. The inner loop runs completely for every single step of the outer loop.

```typescript
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 4; col++) {
    console.log(`${row}, ${col}`);
  }
}
```

The outer loop runs 3 times, and for each of those, the inner loop runs 4 times. That's 12 total iterations. Multiply the counts to get the total. Nesting gets expensive fast, so keep it shallow.


## Assignment

Write a `grid` function that uses **nested for loops** to generate coordinate strings for a grid.

1. Accept `rows` and `cols` numbers
2. Use an outer loop for rows (0 to rows - 1) and an inner loop for columns (0 to cols - 1)
3. For each combination, push a string like `"0,2"` (row comma col, no spaces) into a result array
4. Return the result array

`grid(2, 3)` should return `["0,0", "0,1", "0,2", "1,0", "1,1", "1,2"]`.

## Challenge

Write a `grid` function that uses **nested for loops** to generate coordinate strings for a grid.

1. Accept `rows` and `cols` numbers
2. Use an outer loop for rows (0 to rows - 1) and an inner loop for columns (0 to cols - 1)
3. For each combination, push a string like `"0,2"` (row comma col, no spaces) into a result array
4. Return the result array

`grid(2, 3)` should return `["0,0", "0,1", "0,2", "1,0", "1,1", "1,2"]`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
