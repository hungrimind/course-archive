# Signs of LSP Violations

## Signs of LSP Violations

A **violation of the Liskov Substitution Principle (LSP)** occurs when a subclass cannot be used as a substitute for its superclass without altering the desirable properties of the program. 

Signs of LSP violations include requiring checks for a subclass type or noticing unexpected behavior when substituting a subclass. If a subclass overrides a method and throws an exception not present in the superclass, that's a clear violation.

```dart
class Bird {
  void fly() {
    print("Flying");
  }
}

class Penguin extends Bird {
  @override
  void fly() {
    // Penguins cannot fly
    throw Exception("Penguins can't fly");
  }
}
```

In this example, substituting `Penguin` for `Bird` would break the program's logic, indicating an LSP violation.

## Quiz

**1. What is a sign of a Liskov Substitution Principle (LSP) violation?**

- A) When a subclass performs better than its superclass
- B) When a subclass requires type checks to work properly
- C) When a superclass has more methods than its subclass
- D) When a subclass adds new methods that are never used

<details>
<summary>Answer</summary>

- B) When a subclass requires type checks to work properly

</details>

**2. In the provided Dart example, which behavior indicates an LSP violation?**

- A) The Penguin class does not implement any new methods
- B) The fly method in Penguin calls the superclass's method
- C) The Penguin class overrides fly and throws an exception not present in Bird
- D) The Bird class has more overridden methods than the Penguin class

<details>
<summary>Answer</summary>

- C) The Penguin class overrides fly and throws an exception not present in Bird

</details>

**3. Why is substituting 'Penguin' for 'Bird' a violation of LSP in the given example?**

- A) Because Penguin adds new flying capabilities to Bird
- B) Because Penguin instances exhibit unexpected behavior compared to Bird when flying
- C) Because both Penguin and Bird have the same properties and methods
- D) Because Penguin can live in different climates compared to other Birds

<details>
<summary>Answer</summary>

- B) Because Penguin instances exhibit unexpected behavior compared to Bird when flying

</details>

---

[← Course overview](../../../README.md)
