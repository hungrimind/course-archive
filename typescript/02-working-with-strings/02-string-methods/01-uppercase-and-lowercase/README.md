# Uppercase and Lowercase

**`.toUpperCase()`** and **`.toLowerCase()`** change the casing of a string. They return a brand new string. The original is never modified.

```typescript
const word = "Hello";
console.log(word.toUpperCase()); // "HELLO"
console.log(word.toLowerCase()); // "hello"
console.log(word);               // "Hello" (unchanged)
```

Strings in TypeScript are **immutable**. Every string method gives you back a new one.


## Assignment

Complete the `shout` function to return the text converted to all uppercase, and the `whisper` function to return the text converted to all lowercase. Use the appropriate string methods for each.

## Challenge

Complete the `shout` function to return the text converted to all uppercase, and the `whisper` function to return the text converted to all lowercase. Use the appropriate string methods for each.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
