# for...of Loops

# for...of Loops

The **for...of** loop is the cleanest way to walk through every item in an array. It gives you each value directly, with no index to manage.

```typescript
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}
```

Each pass through the loop assigns the next item to `color`. When you don't need the index, `for...of` keeps things simple and readable.


## Assignment

Start with `const fruits = ["apple", "banana", "cherry"]`.

Use a `for...of` loop to print each fruit on its own line, converted to uppercase. Use the `.toUpperCase()` method on each string.

Expected output:
```
APPLE
BANANA
CHERRY
```


## Assignment

Start with `const fruits = ["apple", "banana", "cherry"]`.

Use a `for...of` loop to print each fruit on its own line, converted to uppercase. Use the `.toUpperCase()` method on each string.

Expected output:
```
APPLE
BANANA
CHERRY
```

## Challenge

Start with `const fruits = ["apple", "banana", "cherry"]`.

Use a `for...of` loop to print each fruit on its own line, converted to uppercase. Use the `.toUpperCase()` method on each string.

Expected output:
```
APPLE
BANANA
CHERRY
```

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
