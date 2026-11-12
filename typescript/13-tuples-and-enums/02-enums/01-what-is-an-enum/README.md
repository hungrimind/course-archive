# What is an Enum?

An **enum** defines a set of named constants, giving friendly names to a fixed group of values. Instead of scattering magic numbers or strings through your code, you reference them by name.

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

By default, TypeScript assigns numeric values starting at `0`, so `Direction.Up` is `0`, `Direction.Down` is `1`, and so on. The big win is readability: `Direction.Left` tells you far more than the number `2`.

## Quiz

**1. What numeric value does TypeScript assign to the first member of a default enum?**

- A) 1
- B) 0
- C) -1
- D) It does not assign a number unless you specify one

<details>
<summary>Answer</summary>

- B) 0

By default, TypeScript assigns numeric values starting at 0. So the first member gets 0, the second gets 1, and so on.

</details>

**2. What is the main benefit of using an enum instead of raw numbers?**

- A) Enums make your code run faster
- B) Enums use less memory than numbers
- C) Enums give friendly, readable names to a fixed set of values
- D) Enums allow you to use decimal numbers

<details>
<summary>Answer</summary>

- C) Enums give friendly, readable names to a fixed set of values

The primary benefit of enums is readability. Direction.Left tells you far more than the number 2. Enums replace magic numbers and strings with meaningful names.

</details>

---

[← Course overview](../../../README.md)
