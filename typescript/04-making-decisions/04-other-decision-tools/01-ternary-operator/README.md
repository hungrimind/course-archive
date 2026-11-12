# Ternary Operator

The **ternary operator** is a one-line if-else: `condition ? valueIfTrue : valueIfFalse`.

```typescript
const age: number = 20;
const label: string = age >= 18 ? "adult" : "minor";
```

It's perfect for picking between two values when assigning a variable. For anything more complex than a simple either-or, stick with a regular `if`/`else`. Readability wins.


## Assignment

Complete the `getLabel` function using a ternary operator. If the age is 18 or older, the label should be `"adult"`. Otherwise, it should be `"minor"`. Assign the result to the `label` variable using `condition ? valueIfTrue : valueIfFalse`.

## Challenge

Complete the `getLabel` function using a ternary operator. If the age is 18 or older, the label should be `"adult"`. Otherwise, it should be `"minor"`. Assign the result to the `label` variable using `condition ? valueIfTrue : valueIfFalse`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
