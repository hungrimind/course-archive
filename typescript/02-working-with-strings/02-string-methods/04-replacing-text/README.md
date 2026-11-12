# Replacing Text

**`.replace()`** swaps the first occurrence of a piece of text for something else. The original string stays untouched.

```typescript
const msg = "I like cats and cats";
const updated = msg.replace("cats", "dogs");
console.log(updated); // "I like dogs and cats"
```

Only the **first** match gets replaced. If you need to replace all occurrences, use **`.replaceAll()`** instead.


## Assignment

Complete `replaceFirst` to swap only the first occurrence of `oldWord` with `newWord` using `.replace()`. Then complete `replaceEvery` to swap all occurrences using `.replaceAll()`.

## Challenge

Complete `replaceFirst` to swap only the first occurrence of `oldWord` with `newWord` using `.replace()`. Then complete `replaceEvery` to swap all occurrences using `.replaceAll()`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
