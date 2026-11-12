# Similar Logic, Different Code

# Similar Logic, Different Code

Similar logic can be written with different code structures. This happens when the same task is implemented in unique ways, often leading to hidden duplication.

Consider the task of checking if a number is even:

```typescript
function isEvenModulo(num: number): boolean {
  return num % 2 === 0;
}

function isEvenBitwise(num: number): boolean {
  return (num  1) === 0;
}
```

Both functions check if a number is even but use different methods. Look for these situations to apply the D.R.Y. principle by unifying logic into a single, reusable piece of code. 

> [!note]
> Hidden duplication can complicate maintenance and introduce bugs.

## Assignment

Your task is to unify the two functions into one. 

1. Create a new function called `isEven` that consolidates the logic of both `isEvenModulo` and `isEvenBitwise` using the modulo method.
2. Replace all calls to `isEvenModulo` and `isEvenBitwise` in the `console.log` statements with `isEven`. 

Ensure the output remains consistent with the original code.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
