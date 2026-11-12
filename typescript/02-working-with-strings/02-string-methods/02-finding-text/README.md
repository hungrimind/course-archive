# Finding Text

**`.includes()`** checks whether a string contains a specific piece of text. It returns `true` or `false`.

```typescript
const sentence = "TypeScript is great";
console.log(sentence.includes("Script")); // true
console.log(sentence.includes("script")); // false
```

> **Watch out:** It's case-sensitive. `"Script"` and `"script"` are not the same match.


## Assignment

Complete the `containsWord` function so it checks whether `sentence` contains the given `word`. Use the `.includes()` method. Remember that it is case-sensitive.

## Challenge

Complete the `containsWord` function so it checks whether `sentence` contains the given `word`. Use the `.includes()` method. Remember that it is case-sensitive.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
