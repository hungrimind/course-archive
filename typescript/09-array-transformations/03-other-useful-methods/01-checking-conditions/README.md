# Checking Conditions

**`.every()`** returns `true` only if all items pass a test. **`.some()`** returns `true` if at least one item passes.

```typescript
const ages = [18, 25, 30, 16];

const allAdults = ages.every(age => age >= 18);
const anyAdult = ages.some(age => age >= 18);

console.log(allAdults); // false
console.log(anyAdult);  // true
```

Both short-circuit. `.every()` stops at the first failure, and `.some()` stops at the first success.


## Assignment

Complete both functions to check conditions on an array of ages:

1. `areAllAdults` should use `.every()` to return `true` only if all ages are 18 or above.
2. `hasAnyAdult` should use `.some()` to return `true` if at least one age is 18 or above.

## Challenge

Complete both functions to check conditions on an array of ages:

1. `areAllAdults` should use `.every()` to return `true` only if all ages are 18 or above.
2. `hasAnyAdult` should use `.some()` to return `true` if at least one age is 18 or above.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
