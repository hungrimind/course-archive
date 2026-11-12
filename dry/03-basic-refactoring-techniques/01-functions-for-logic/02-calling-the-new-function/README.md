# Calling the New Function

To call a new function, use its name followed by parentheses. This executes the function whenever needed, reducing repetition and aligning with the D.R.Y. principle.

```typescript
function calculateSum(a: number, b: number) {
  return a + b;
}

const total = calculateSum(5, 10); // Calls the function with 5 and 10 as arguments
```

By calling a function, you reuse code instead of duplicating logic, making your codebase easier to maintain and update.

## Fill in the Blanks

Fill in the blanks:

```typescript
function multiplyNumbers(x: number, y: number) {
  return x * y;
}

const result = __(1)__(4, 3); // Calls the function with 4 and 3 as arguments

// By using a function, we adhere to the __(2)__ principle and avoid code __(3)__.
```

<details>
<summary>Answer</summary>

1. `multiplyNumbers`
2. `D.R.Y.`
3. `duplication`

</details>

---

[← Course overview](../../../README.md)
