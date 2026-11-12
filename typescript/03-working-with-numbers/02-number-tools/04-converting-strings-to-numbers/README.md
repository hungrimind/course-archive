# Converting Strings to Numbers

**`Number()`** converts a string into a number. If the string isn't valid, you get **`NaN`** (Not a Number).

```typescript
const age = Number("42");     // 42
const oops = Number("hello"); // NaN
```

This comes up constantly. User input, form fields, and API responses often arrive as strings even when they represent numbers.


## Assignment

Implement two functions. `toNumber` takes a string and converts it to a number using `Number()`. `addFromStrings` takes two strings, converts each to a number, and returns their sum.

## Challenge

Implement two functions. `toNumber` takes a string and converts it to a number using `Number()`. `addFromStrings` takes two strings, converts each to a number, and returns their sum.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
