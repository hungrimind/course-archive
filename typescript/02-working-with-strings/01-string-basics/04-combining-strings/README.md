# Combining Strings

The `+` operator joins strings together. This is called **string concatenation**.

```typescript
const full = "Hello" + " " + "World";
console.log(full); // "Hello World"
```

Notice you need to add the space yourself. TypeScript won't insert one for you. For anything beyond simple joins, template literals are usually cleaner.


## Assignment

Complete the `combineWords` function so it joins `word1` and `word2` with a space in between using the `+` operator. For example, `combineWords("Hello", "World")` should return `"Hello World"`.

## Challenge

Complete the `combineWords` function so it joins `word1` and `word2` with a space in between using the `+` operator. For example, `combineWords("Hello", "World")` should return `"Hello World"`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
