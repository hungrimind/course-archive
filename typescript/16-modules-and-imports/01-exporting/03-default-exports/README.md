# Default Exports

A **default export** marks one value as the main thing a file provides. A file can only have one.

```typescript
export default class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}
```

Unlike named exports, whoever imports a default can call it whatever they want. No curly braces, no name matching required. Use default exports when a file has a single clear purpose, and named exports when it provides multiple utilities.


## Assignment

Implement the `Formatter` class as a default export. Complete the `uppercase` method to return the text in all caps, and the `wrap` method to surround text with the given wrapper string on both sides.

## Challenge

Implement the `Formatter` class as a default export. Complete the `uppercase` method to return the text in all caps, and the `wrap` method to surround text with the given wrapper string on both sides.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
