# Why D.R.Y. Matters

Code duplication makes updates tedious; change one instance, and you must update every duplicate. With D.R.Y., you update a single source, making maintenance easier.

> [!tip]
> Keep your code organized by ensuring functions and variables serve as a *single source of truth*.

Readable code helps you and others understand logic quickly. D.R.Y. minimizes clutter by eliminating repetition, focusing on what the code does.

Fewer duplicates reduce the chance of inconsistent changes, leading to fewer bugs. When all logic is centralized, it's easier to ensure accuracy across your application.

```dart
// Without D.R.Y.
int add(int a, int b) {
  return a + b;
}
int addNumbers(int x, int y) {
  return x + y;
}

// With D.R.Y.
int add(int a, int b) {
  return a + b;
}
```

Here, `addNumbers` repeats the same logic as `add`. Using D.R.Y., you eliminate redundant code.

## Quiz

**1. What is the main purpose of the D.R.Y. principle?**

- A) To make code more complex
- B) To enhance code maintainability and readability by reducing duplication
- C) To create more functions and variables
- D) To complicate debugging processes

<details>
<summary>Answer</summary>

- B) To enhance code maintainability and readability by reducing duplication

</details>

**2. How does applying the D.R.Y. principle help in reducing bugs?**

- A) By increasing the number of code tests
- B) By ensuring consistent logic across the application
- C) By making code independent of logic
- D) By adding more comments to the code

<details>
<summary>Answer</summary>

- B) By ensuring consistent logic across the application

</details>

**3. In the given example, why is it beneficial to eliminate the 'addNumbers' function?**

- A) It reduces the number of lines of code, making it harder to understand
- B) It removes redundant logic, ensuring that changes are made in one place
- C) It renames the function for clarity
- D) It combines multiple operations into one function

<details>
<summary>Answer</summary>

- B) It removes redundant logic, ensuring that changes are made in one place

</details>

---

[← Course overview](../../../README.md)
