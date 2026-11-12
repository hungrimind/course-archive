# Extracting Parts

**`.slice(start, end)`** pulls out a portion of a string. The character at `start` is included, but the character at `end` is not.

```typescript
const text = "TypeScript";
console.log(text.slice(0, 4)); // "Type"
console.log(text.slice(4));    // "Script"
```

Positions start at **0**, not 1. If you leave out `end`, it slices all the way to the end of the string.


## Assignment

Complete `getFirstFour` to return the first 4 characters of the given text, and `getRest` to return everything from position 4 onward. Use the `.slice()` method for both functions.

## Challenge

Complete `getFirstFour` to return the first 4 characters of the given text, and `getRest` to return everything from position 4 onward. Use the `.slice()` method for both functions.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
