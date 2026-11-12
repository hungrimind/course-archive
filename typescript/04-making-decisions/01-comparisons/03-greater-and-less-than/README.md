# Greater and Less Than

Use **`>`**, **`<`**, **`>=`**, and **`<=`** to compare numbers. Each one returns a boolean.

```typescript
const score: number = 85;
const passing: boolean = score >= 70;  // true
const perfect: boolean = score > 100;  // false
const failing: boolean = score < 70;   // false
```

The `=` versions (`>=`, `<=`) include the boundary value. So `score >= 70` is `true` when score is exactly 70.


## Assignment

Complete the `checkScore` function by filling in the three boolean comparison expressions. Use `>=`, `>`, and `<` to compare the `score` parameter against the appropriate thresholds. A score of 70 or above is passing, above 100 is invalid, and below 70 is failing.

## Challenge

Complete the `checkScore` function by filling in the three boolean comparison expressions. Use `>=`, `>`, and `<` to compare the `score` parameter against the appropriate thresholds. A score of 70 or above is passing, above 100 is invalid, and below 70 is failing.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
