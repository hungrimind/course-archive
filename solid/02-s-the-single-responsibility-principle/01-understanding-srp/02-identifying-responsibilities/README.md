# Identifying Responsibilities

A **responsibility** in the context of the Single Responsibility Principle (SRP) is a reason for a class to change. To identify responsibilities, focus on the different actions a class performs.

If a class handles multiple tasks, like processing orders and sending notifications, it has multiple responsibilities. Each task that could change independently indicates a distinct responsibility.

```dart
class OrderManager {
  void processOrder(Order order) {
    // Order processing logic
  }

  void sendConfirmationEmail(Order order) {
    // Email sending logic
  }
}
```

In this example, `OrderManager` has two responsibilities: processing orders and sending emails. Separate these into different classes to adhere to SRP.

> [!tip]
> Ask, "Why might this class change?" Each answer should point to a single responsibility.

## Quiz

**1. According to the Single Responsibility Principle, what defines a class's 'responsibility'?**

- A) A list of functions the class performs
- B) A reason for the class to change
- C) The number of methods it contains
- D) The complexity of its methods

<details>
<summary>Answer</summary>

- B) A reason for the class to change

</details>

**2. Why should a class like OrderManager, which handles both processing orders and sending confirmation emails, be split into separate classes?**

- A) To make the code more visually appealing
- B) To reduce the number of classes in the project
- C) To adhere to the Single Responsibility Principle by reducing independent reasons for the class to change
- D) To simplify the method names for clarity

<details>
<summary>Answer</summary>

- C) To adhere to the Single Responsibility Principle by reducing independent reasons for the class to change

</details>

**3. When analyzing a class to determine its responsibilities, which question is most helpful?**

- A) How many lines of code does each method have?
- B) Why might this class need to change?
- C) How frequently is this class used?
- D) Who wrote the class and when?

<details>
<summary>Answer</summary>

- B) Why might this class need to change?

</details>

---

[← Course overview](../../../README.md)
