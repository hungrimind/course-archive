# Splitting Strings

**`.split()`** breaks a string into an **array** of smaller strings based on a separator you provide.

```typescript
const csv = "red,green,blue";
const colors = csv.split(",");
console.log(colors); // ["red", "green", "blue"]
```

The separator itself gets removed. It's just the dividing line. Use `""` as the separator to split every single character into its own element.


## Assignment

Complete `splitByComma` to split a string into an array using `","` as the separator. Then complete `splitIntoChars` to split a string into individual characters by using `""` as the separator.

## Challenge

Complete `splitByComma` to split a string into an array using `","` as the separator. Then complete `splitIntoChars` to split a string into individual characters by using `""` as the separator.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
