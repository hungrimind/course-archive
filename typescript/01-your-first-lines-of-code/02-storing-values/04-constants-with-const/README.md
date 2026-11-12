# Constants with const

**`const`** creates a variable that can never be reassigned. If you accidentally try, TypeScript stops you with an error before your code even runs.

```typescript
const maxLives = 3;
maxLives = 5; // Error: Cannot assign to 'maxLives'
```

This is your safety net. When a value shouldn't change, `const` makes sure it doesn't.


## Assignment

Declare two constants using `const`:
1. `maxLives` with the value `3`
2. `gameName` with the value `"TypeScript Quest"`

The `console.log` statements are already in place to print them.

## Challenge

Declare two constants using `const`:
1. `maxLives` with the value `3`
2. `gameName` with the value `"TypeScript Quest"`

The `console.log` statements are already in place to print them.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
