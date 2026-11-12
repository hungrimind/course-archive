# else if Chains

**`else if`** lets you check multiple conditions in order. TypeScript runs the first branch that's `true` and skips the rest.

```typescript
const score: number = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}
```

Order matters. Since conditions are checked top-to-bottom, put the most specific ones first.


## Assignment

Complete the `getGrade` function using an `if`/`else if`/`else` chain. Return `"A"` for scores 90 and above, `"B"` for 80 and above, `"C"` for 70 and above, and `"F"` for everything else.

## Challenge

Complete the `getGrade` function using an `if`/`else if`/`else` chain. Return `"A"` for scores 90 and above, `"B"` for 80 and above, `"C"` for 70 and above, and `"F"` for everything else.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
