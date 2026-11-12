# Order of Operations

TypeScript follows standard math rules: **multiplication and division happen before addition and subtraction**.

```typescript
const result = 2 + 3 * 4;   // 14, not 20
const forced = (2 + 3) * 4; // 20
```

When in doubt, use **parentheses**. They make your intent obvious and prevent surprises.

## Quiz

**1. What does `2 + 3 * 4` evaluate to in TypeScript?**

- A) 20
- B) 14
- C) 24
- D) 9

<details>
<summary>Answer</summary>

- B) 14

Multiplication happens before addition. 3 * 4 is 12, then 2 + 12 is 14.

</details>

**2. How do you force addition to happen before multiplication?**

- A) Use curly braces: {2 + 3} * 4
- B) Use parentheses: (2 + 3) * 4
- C) Use square brackets: [2 + 3] * 4
- D) Put addition first on the line

<details>
<summary>Answer</summary>

- B) Use parentheses: (2 + 3) * 4

Parentheses override the default order of operations, forcing the enclosed expression to be evaluated first.

</details>

**3. What does `10 - 2 * 3` evaluate to?**

- A) 24
- B) 4
- C) 8
- D) 16

<details>
<summary>Answer</summary>

- B) 4

Multiplication happens first: 2 * 3 is 6. Then 10 - 6 is 4.

</details>

---

[← Course overview](../../../README.md)
