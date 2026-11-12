# Checking for NaN

**`NaN`** is a special value meaning "this isn't a valid number." The weird part: `NaN === NaN` is `false`. It's not equal to anything, including itself.

```typescript
const value = Number("abc"); // NaN
Number.isNaN(value);         // true
value === NaN;               // false (never works)
```

> Always use **`Number.isNaN()`** to check for it. The `===` comparison will silently fail every time.

## True or False

**1. True or false:** NaN === NaN evaluates to true in TypeScript.

<details>
<summary>Answer</summary>

**False**: NaN is not equal to anything, including itself. NaN === NaN is always false, which is why you need Number.isNaN() to check for it.

</details>

**2. True or false:** Number.isNaN(Number("hello")) returns true.

<details>
<summary>Answer</summary>

**True**: Number("hello") produces NaN because "hello" is not a valid number. Number.isNaN() correctly detects it.

</details>

**3. True or false:** Number.isNaN(42) returns true.

<details>
<summary>Answer</summary>

**False**: 42 is a valid number, not NaN. Number.isNaN() only returns true when the value is actually NaN.

</details>

---

[← Course overview](../../../README.md)
