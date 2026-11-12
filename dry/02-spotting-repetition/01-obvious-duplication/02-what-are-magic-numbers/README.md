# What are Magic Numbers?

A **magic number** is a literal number in code with no clear explanation of its meaning. They can make code hard to understand and maintain.

```dart
if (score > 50) {
  print('You pass!');
}
```

Here, `50` is a magic number. It's unclear what `50` represents without context.

To avoid magic numbers, use descriptive constants:

```dart
const int passingScore = 50;
if (score > passingScore) {
  print('You pass!');
}
```

This improves code readability and makes updates easier.

> [!tip]
> Always replace magic numbers with named constants to clarify intent and ease maintenance.

## Matching

Sort each item into the right category: **Magic Number**, **Descriptive Constant**

- Example: '50' in code
- Example: 'passingScore'
- Facilitates updates
- Hinders readability
- Improves understanding
- Literal unexplained number

<details>
<summary>Answer</summary>

**Magic Number**
- Literal unexplained number
- Hinders readability
- Example: '50' in code

**Descriptive Constant**
- Improves understanding
- Facilitates updates
- Example: 'passingScore'

</details>

---

[← Course overview](../../../README.md)
