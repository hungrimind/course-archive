# Closed for Modification

## Closed for Modification

The **Open/Closed Principle** states that software entities should be *open for extension* but **closed for modification**. This means you can add new functionality without changing existing code.

When a class is closed for modification, you avoid altering its source code. Instead, you extend its behavior using techniques like inheritance or composition.

```dart
class Notification {
  void send(String message) {
    // default implementation
  }
}

class EmailNotification extends Notification {
  @override
  void send(String message) {
    // send email
  }
}
```

Here, `Notification` is closed for modification. You extend it via `EmailNotification` to add new behavior.

> [!tip]
> Use interfaces or abstract classes to create extension points, keeping the original code intact.

## Quiz

**1. What does the Open/Closed Principle advocate for in software development?**

- A) Software should be open for modification but closed for extension.
- B) Software should be open for extension but closed for modification.
- C) Software should allow unlimited changes without restrictions.
- D) Software should be closed for both extension and modification.

<details>
<summary>Answer</summary>

- B) Software should be open for extension but closed for modification.

</details>

**2. How can you add new functionality to a class that is 'closed for modification'?**

- A) By modifying the existing class's source code directly.
- B) By using inheritance to extend the existing class.
- C) By copying the class and making changes to the copy.
- D) By writing additional functions within the original class.

<details>
<summary>Answer</summary>

- B) By using inheritance to extend the existing class.

</details>

**3. Which programming technique is NOT recommended when adhering to the Open/Closed Principle?**

- A) Inheritance
- B) Composition
- C) Modifying existing method implementations directly
- D) Using interfaces or abstract classes

<details>
<summary>Answer</summary>

- C) Modifying existing method implementations directly

</details>

---

[← Course overview](../../../README.md)
