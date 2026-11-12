# The Rule of Three

The **Rule of Three** is a guideline that suggests you should only refactor repetitive code after you've identified the same pattern three times. This helps avoid premature abstraction, which can complicate code unnecessarily.

```dart
// Example of duplication:
void printUser() {
  print('User: John Doe');
}

void printAdmin() {
  print('Admin: Jane Doe');
}

// Apply Rule of Three after a third similar function appears
```

By waiting for a third occurrence, you ensure that the pattern is common enough to warrant abstraction, leading to more maintainable code.

> [!tip]
> Resist the urge to refactor too early; code can become over-engineered without clear repetition.

## Quiz

**1. What is the main purpose of following the Rule of Three in code refactoring?**

- A) To optimize code performance by using fewer lines of code.
- B) To avoid premature abstraction, which can unnecessarily complicate the code.
- C) To ensure all variables are declared globally for easier access.
- D) To make code abstract right after the first instance of repetition.

<details>
<summary>Answer</summary>

- B) To avoid premature abstraction, which can unnecessarily complicate the code.

</details>

**2. When should you consider refactoring according to the Rule of Three?**

- A) After identifying the same pattern twice in the code.
- B) As soon as you notice any repetition in the code.
- C) After encountering the same pattern for the third time.
- D) Only during major codebase overhauls mandated by management.

<details>
<summary>Answer</summary>

- C) After encountering the same pattern for the third time.

</details>

**3. What can happen if you refactor your code too early, according to the Rule of Three?**

- A) The code will only become slightly more complex.
- B) There is a risk of unnecessary complications and over-engineering.
- C) All bugs in the code will be automatically resolved.
- D) The code will become non-functional and will not compile.

<details>
<summary>Answer</summary>

- B) There is a risk of unnecessary complications and over-engineering.

</details>

---

[← Course overview](../../../README.md)
