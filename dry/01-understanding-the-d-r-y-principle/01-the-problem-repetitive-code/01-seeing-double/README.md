# Seeing Double

Repetitive code occurs when the same logic or code blocks appear multiple times in a program. This redundancy can lead to maintenance headaches and bugs.

**Why is repetitive code a problem?** If a change is needed, each instance must be updated, increasing the chance of errors. It also makes the codebase harder to understand.

The **D.R.Y. (Don't Repeat Yourself)** principle offers a solution. It advocates for a single, unambiguous representation of logic or data, reducing duplication.

Consider this repetitive code:

```dart
print('Hello, John!');
print('Hello, Sarah!');
```

Instead, use D.R.Y. by extracting the repetitive logic:

```dart
void greet(String name) {
  print('Hello, $name!');
}

greet('John');
greet('Sarah');
```

> [!tip]
> Look for repeated patterns in your code; these are candidates for refactoring using D.R.Y. principles.

## Fill in the Blanks

Fill in the blanks:

```dart
void __(1)__(String name) {
  print('Hello, $__(2)__! Welcome to the platform!');
}

__(3)__('Alice');
__(4)__('Bob');
```

<details>
<summary>Answer</summary>

1. `greet`
2. `name`
3. `greet`
4. `greet`

</details>

---

[← Course overview](../../../README.md)
