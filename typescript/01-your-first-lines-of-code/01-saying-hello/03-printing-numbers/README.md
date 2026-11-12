# Printing Numbers

Numbers go straight into console.log without quotes.

```typescript
console.log(42);
console.log(3.14);
```

> [!warning]
> `console.log("42")` prints the **string** "42", not the number 42. They look the same on screen, but TypeScript treats them very differently.

## True or False

**1. True or false:** console.log("42") and console.log(42) produce the same type of value in TypeScript.

<details>
<summary>Answer</summary>

**False**: They look the same on screen, but "42" is a string (text) while 42 is a number. TypeScript treats them as completely different types.

</details>

**2. True or false:** Numbers in console.log do not need to be wrapped in quotes.

<details>
<summary>Answer</summary>

**True**: Numbers go directly into console.log without quotes. Adding quotes would make them strings instead of numbers.

</details>

**3. True or false:** console.log(3.14) is valid TypeScript.

<details>
<summary>Answer</summary>

**True**: Decimal numbers like 3.14 can be passed directly to console.log just like whole numbers.

</details>

---

[← Course overview](../../../README.md)
