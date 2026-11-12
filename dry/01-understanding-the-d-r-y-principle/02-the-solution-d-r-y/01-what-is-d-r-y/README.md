# What is D.R.Y.?

A **D.R.Y.** principle stands for "Don't Repeat Yourself." It encourages reducing repetition by ensuring each piece of knowledge exists in a single location. This minimizes errors and simplifies updates.

```dart
// Repetitive code
double areaCircle(double radius) {
  return 3.14 * radius * radius;
}

double areaSquare(double side) {
  return side * side;
}

// D.R.Y. approach
const double pi = 3.14;

double areaCircleDRY(double radius) {
  return pi * radius * radius;
}
```

By centralizing `pi` as a constant, changes only need to be made once, reducing the risk of inconsistencies.

## Quiz

**1. What does the D.R.Y. principle emphasize?**

- A) Reusing code in different projects
- B) Reducing repetition by centralizing information
- C) Writing code that is easy to read
- D) Avoiding variable declarations

<details>
<summary>Answer</summary>

- B) Reducing repetition by centralizing information

</details>

**2. Why is centralizing constants like 'pi' beneficial in programming?**

- A) It makes the code run faster
- B) It allows for easier updates and reduces errors
- C) It highlights the constants visually in the code
- D) It takes less memory

<details>
<summary>Answer</summary>

- B) It allows for easier updates and reduces errors

</details>

**3. How does the D.R.Y. approach simplify code maintenance?**

- A) By reducing the lines of code
- B) By making the code more visually appealing
- C) By ensuring changes only need to be made in one location
- D) By increasing code redundancy

<details>
<summary>Answer</summary>

- C) By ensuring changes only need to be made in one location

</details>

---

[← Course overview](../../../README.md)
