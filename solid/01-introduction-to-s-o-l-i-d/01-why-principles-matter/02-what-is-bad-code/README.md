# What is 'Bad' Code?

Bad code lacks clear design principles, making it hard to read, understand, and maintain. It often features poor readability, minimal documentation, and a lack of modularity, which complicates future changes.

> [!note]
> *Modularity* refers to breaking code into smaller, manageable parts, like building with LEGO bricks.

Common signs of bad code include dense, unstructured logic and functions doing too many things. This makes debugging a nightmare and scaling nearly impossible. Without modularity, even small changes can ripple through the codebase, causing unexpected issues.

```dart
// Example of bad code: a function doing too much
void processOrder(Order order) {
  // Validate order
  // Calculate total
  // Update inventory
  // Send confirmation email
}
```

Such code is difficult to maintain and hinders the flexibility needed for growth and adaptation.

## Quiz

**1. Why is modularity important in code design?**

- A) It allows code to run faster.
- B) It makes code easier to manage and modify.
- C) It reduces the need for comments.
- D) It enables code to look more complex.

<details>
<summary>Answer</summary>

- B) It makes code easier to manage and modify.

</details>

**2. What is a common issue with functions that attempt to do too much?**

- A) They often require less debugging.
- B) They make it easier to write code.
- C) They complicate debugging and scaling.
- D) They enhance readability.

<details>
<summary>Answer</summary>

- C) They complicate debugging and scaling.

</details>

**3. What is a characteristic of bad code?**

- A) High level of modularity.
- B) Well-documented functions.
- C) Dense and unstructured logic.
- D) Clear separation of concerns.

<details>
<summary>Answer</summary>

- C) Dense and unstructured logic.

</details>

---

[← Course overview](../../../README.md)
