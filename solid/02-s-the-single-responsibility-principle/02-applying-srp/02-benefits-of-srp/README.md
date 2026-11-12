# Benefits of SRP

Applying the **Single Responsibility Principle (SRP)** in your code offers several key advantages. 

First, it enhances **maintainability**. With each class focused on one responsibility, changes are localized, making the code easier to update.

Second, SRP boosts **testability**. Smaller, single-purpose classes simplify writing precise unit tests, as each class has a clear function to validate.

Finally, SRP improves **scalability**. By decoupling responsibilities, you can extend your application without altering existing classes, fostering smoother growth.

```dart
class ReportGenerator {
  void generate() {
    // Code to generate report
  }
}

class ReportPrinter {
  void print() {
    // Code to print report
  }
}
```

Here, one class generates reports, and another handles printing, each with a single responsibility.

## Quiz

**1. What is one advantage of applying the Single Responsibility Principle (SRP) to your code?**

- A) It makes your code execute faster.
- B) It enhances maintainability by localizing changes.
- C) It makes your code more visually appealing.
- D) It reduces the need for documentation.

<details>
<summary>Answer</summary>

- B) It enhances maintainability by localizing changes.

</details>

**2. How does SRP improve testability?**

- A) By making the classes larger and more complex.
- B) By removing the need for tests completely.
- C) By making smaller, single-purpose classes that are easier to unit test.
- D) By integrating multiple functionalities into one class.

<details>
<summary>Answer</summary>

- C) By making smaller, single-purpose classes that are easier to unit test.

</details>

**3. In the given code example, why are there two separate classes for generating and printing reports?**

- A) To increase the number of lines of code.
- B) To keep the actions of generating and printing reports separated, each with a single responsibility.
- C) To confuse the developers and maintainers.
- D) Because Dart requires different classes for each action.

<details>
<summary>Answer</summary>

- B) To keep the actions of generating and printing reports separated, each with a single responsibility.

</details>

---

[← Course overview](../../../README.md)
