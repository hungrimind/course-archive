# indexOf and includes

**.includes()** checks whether a value exists in the array and returns `true` or `false`. **.indexOf()** tells you the position of that value, returning `-1` if it's not found.

```typescript
const colors = ["red", "green", "blue"];
console.log(colors.includes("green")); // true
console.log(colors.indexOf("blue"));   // 2
console.log(colors.indexOf("purple")); // -1
```

Use `includes` when you only care about yes or no. Use `indexOf` when you need the position.


## Assignment

Start with `const colors = ["red", "green", "blue", "yellow"]`.

1. Use `includes` to check if `"green"` is in the array. Store the result in `hasGreen`.
2. Use `includes` to check if `"purple"` is in the array. Store the result in `hasPurple`.
3. Use `indexOf` to find the position of `"blue"`. Store it in `blueIndex`.
4. Use `indexOf` to find the position of `"orange"`. Store it in `orangeIndex`.

Print all four variables, each on its own line.

## Challenge

Start with `const colors = ["red", "green", "blue", "yellow"]`.

1. Use `includes` to check if `"green"` is in the array. Store the result in `hasGreen`.
2. Use `includes` to check if `"purple"` is in the array. Store the result in `hasPurple`.
3. Use `indexOf` to find the position of `"blue"`. Store it in `blueIndex`.
4. Use `indexOf` to find the position of `"orange"`. Store it in `orangeIndex`.

Print all four variables, each on its own line.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
