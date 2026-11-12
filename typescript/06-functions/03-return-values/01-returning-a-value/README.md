# Returning a Value

The **return** keyword sends a value back to the code that called the function. Once `return` executes, the function stops immediately. Nothing after it runs.

```typescript
function add(a, b) {
  return a + b;
}

let sum = add(3, 5);
console.log(sum); // 8
```

Without `return`, a function gives back `undefined` by default.


## Assignment

Complete the `calculateArea` function so it returns the area of a rectangle. The function takes a `width` and a `height`, both numbers, and should return their product using the `return` keyword.

Expected output:
```
28
```

## Challenge

Complete the `calculateArea` function so it returns the area of a rectangle. The function takes a `width` and a `height`, both numbers, and should return their product using the `return` keyword.

Expected output:
```
28
```

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
