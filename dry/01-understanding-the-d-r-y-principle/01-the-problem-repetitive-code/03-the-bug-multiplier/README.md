# The Bug Multiplier

Repetitive code increases the chances of bugs, a phenomenon known as the **bug multiplier**. When the same logic is copied across multiple places, each instance becomes a potential bug source. Fixing a bug in one spot doesn't automatically fix it everywhere else.

```dart
// Example of repetitive code
int calculateTotal(int a, int b) {
  return a + b;
}

int calculateSum(int x, int y) {
  return x + y;
}
```

If a bug exists in the addition logic, it must be fixed in both functions separately, increasing maintenance effort.

> [!warning]
> Repetitive code can make bug fixes inconsistent and time-consuming, as every duplicate must be individually updated.

## Quiz

**1. What is the main disadvantage of repetitive code as described in the lesson?**

- A) It makes the code easier to read.
- B) It increases the chances of bugs, known as the bug multiplier.
- C) It improves program execution speed.
- D) It reduces the need for documentation.

<details>
<summary>Answer</summary>

- B) It increases the chances of bugs, known as the bug multiplier.

</details>

**2. In the provided Dart example, what issue arises from having both functions `calculateTotal` and `calculateSum`?**

- A) The functions use too many parameters.
- B) Changes or bug fixes must be applied to each function separately.
- C) They can't handle subtraction operations.
- D) They have syntax errors in their definitions.

<details>
<summary>Answer</summary>

- B) Changes or bug fixes must be applied to each function separately.

</details>

**3. How does repetitive code affect bug fixes according to the lesson?**

- A) Bug fixes automatically propagate across all instances of the code.
- B) Bug fixes become easier and quicker to implement.
- C) Bug fixes must be applied to each duplicate instance, making the process time-consuming.
- D) Bug fixes are unnecessary if the code is repetitive.

<details>
<summary>Answer</summary>

- C) Bug fixes must be applied to each duplicate instance, making the process time-consuming.

</details>

---

[← Course overview](../../../README.md)
