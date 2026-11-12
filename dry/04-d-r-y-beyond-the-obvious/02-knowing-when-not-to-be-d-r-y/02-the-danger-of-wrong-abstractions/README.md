# The Danger of Wrong Abstractions

A **wrong abstraction** occurs when code is generalized poorly, leading to complexity and harder maintenance. Instead of simplifying, it introduces confusion.

For example, abstracting unrelated functions under a single utility can make code harder to read and modify.

```typescript
function operate(x: number, y: number, type: string): number {
  if (type === 'add') return x + y;
  if (type === 'subtract') return x - y;
  throw new Error('Invalid operation');
}
```

Avoid creating abstractions that don't align with the problem domain. Focus on clarity and logical grouping.

> [!tip]
> Ensure your abstraction solves a real, recurring problem without over-complicating the codebase.

## Quiz

**1. What is a wrong abstraction?**

- A) An abstraction that simplifies code and improves maintenance
- B) An abstraction that complicates code and leads to confusion
- C) An abstraction that correctly aligns with the problem domain
- D) An abstraction that occurs only in complex software systems

<details>
<summary>Answer</summary>

- B) An abstraction that complicates code and leads to confusion

</details>

**2. Why is the 'operate' function example considered a wrong abstraction?**

- A) It correctly establishes logical groups for operations
- B) It introduces complexity by grouping unrelated functions
- C) It uses a clearly-defined operation type parameter
- D) It throws an error for invalid operations

<details>
<summary>Answer</summary>

- B) It introduces complexity by grouping unrelated functions

</details>

**3. What should guide the creation of a proper abstraction?**

- A) The goal to solve a real, recurring problem
- B) The necessity to display programming skill and complexity
- C) The need to use as many functions as possible
- D) The desire to avoid any changes in the code in the future

<details>
<summary>Answer</summary>

- A) The goal to solve a real, recurring problem

</details>

---

[← Course overview](../../../README.md)
