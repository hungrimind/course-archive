# Multi-line Strings

If a string goes over multiple lines, you can use triple quotes instead of single or double quotes.

```dart
void main() {
  String multiLineString = '''
      This is a string
      that goes over
      multiple lines
      ''';

  print(multiLineString);
}
```

You can use single `'''` or double `"""` triple quotes; it doesn’t matter. Just be consistent to finish the string with the same one you started with.

### Documentation Comments

In Dart, **triple slashes (`///`)** are used for documentation comments. These are different from triple-quoted strings and are used to describe code elements like functions, classes, or variables. Tools such as `dartdoc` use them to generate API documentation.

For example:

```dart
/// This function prints a greeting message to the console.
void greet() {
  print('Hello, world!');
}
```

## Quiz

**1. Which of the following correctly creates a multi-line string in Dart?**

- A) String poem = "Roses are red\n Violets are blue";
- B) String haiku = '''An old silent pond...
A frog jumps into the pond,
Splash! Silence again.''';
- C) String address = // 123 Main St
// Anytown, USA;
- D) String single = 'This is a string that
spans multiple lines';

<details>
<summary>Answer</summary>

- B) String haiku = '''An old silent pond...
A frog jumps into the pond,
Splash! Silence again.''';

</details>

**2. What is the primary purpose of using triple slashes (`///`) in Dart?**

- A) To create a string that spans multiple lines.
- B) To comment out a large block of code for debugging.
- C) To write documentation comments that tools can use to generate API documentation.
- D) To perform a special type of division operation.

<details>
<summary>Answer</summary>

- C) To write documentation comments that tools can use to generate API documentation.

</details>

---

[← Course overview](../../../README.md)
