# Copy-Pasted Logic

Copy-pasting logic leads to repetitive code, making maintenance difficult and error-prone. When logic is duplicated, updating one instance often requires updating all copies, increasing the risk of bugs.

```dart
// Copy-pasted logic example
int addTen(int number) {
  return number + 10;
}

int addTenAgain(int number) { // Redundant function
  return number + 10;
}
```

In this example, the same logic appears in two functions. If the logic changes, both need updates, risking inconsistencies.

> [!warning]
> Copy-pasting code may seem quick, but it creates hidden maintenance costs and potential for errors.

## Matching

Sort each item into the right category: **Problems with Copy-Pasting**, **Example of Redundant Code**, **Best Practices**

- Avoid logic duplication
- Inconsistent updates
- Increased maintenance effort
- Risk of bugs
- Use helper functions
- addTen function
- addTenAgain function

<details>
<summary>Answer</summary>

**Problems with Copy-Pasting**
- Increased maintenance effort
- Risk of bugs
- Inconsistent updates

**Example of Redundant Code**
- addTen function
- addTenAgain function

**Best Practices**
- Avoid logic duplication
- Use helper functions

</details>

---

[← Course overview](../../../README.md)
