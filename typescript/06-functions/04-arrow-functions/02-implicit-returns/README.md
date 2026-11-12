# Implicit Returns

When an arrow function has a single expression, you can drop the curly braces and the `return` keyword. The value is returned automatically. This is called an **implicit return**.

```typescript
const double = (n) => n * 2;

console.log(double(4)); // 8
```

This only works for single expressions. If you need multiple lines of logic, you still need curly braces and an explicit `return`.


## Assignment

Create an arrow function called `double` that accepts a `number` parameter and returns twice its value using an implicit return (no curly braces, no `return` keyword).

Expected output:
```
8
14
```

## Challenge

Create an arrow function called `double` that accepts a `number` parameter and returns twice its value using an implicit return (no curly braces, no `return` keyword).

Expected output:
```
8
14
```

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
