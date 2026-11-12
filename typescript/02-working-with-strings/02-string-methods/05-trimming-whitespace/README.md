# Trimming Whitespace

**`.trim()`** removes spaces, tabs, and newlines from both ends of a string. The middle stays untouched.

```typescript
const input = "  hello world  ";
console.log(input.trim()); // "hello world"
```

This is especially handy for cleaning up user input. People accidentally add leading or trailing spaces more often than you'd think.


## Assignment

Complete the `cleanInput` function so it removes any leading and trailing whitespace from the given text. Use the `.trim()` method. Spaces in the middle of the string should remain untouched.

## Challenge

Complete the `cleanInput` function so it removes any leading and trailing whitespace from the given text. Use the `.trim()` method. Spaces in the middle of the string should remain untouched.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
