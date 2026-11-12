# Finding Items

**.find()** returns the first item that matches a condition you provide. It takes a function that runs on each item and returns the first one where the function returns `true`.

```typescript
const numbers = [3, 7, 12, 5, 18];
const big = numbers.find((n) => n > 10);
console.log(big); // 12
```

If nothing matches, `find` returns `undefined`. Unlike `includes` and `indexOf`, `find` works with any condition, not just simple equality.


## Assignment

Start with `const numbers = [4, 11, 2, 19, 7, 15]`.

1. Use `find` to get the first number greater than 10. Store it in `firstBig`.
2. Use `find` to get the first number less than 3. Store it in `firstSmall`.

Print `firstBig` and then `firstSmall`, each on its own line.

## Challenge

Start with `const numbers = [4, 11, 2, 19, 7, 15]`.

1. Use `find` to get the first number greater than 10. Store it in `firstBig`.
2. Use `find` to get the first number less than 3. Store it in `firstSmall`.

Print `firstBig` and then `firstSmall`, each on its own line.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
