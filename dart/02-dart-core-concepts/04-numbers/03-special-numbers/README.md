# Special Numbers

There are a few special numbers that you need to know about in Dart. The first is `double.nan`. This stands for “not a number” and is used for undefined or unrepresentable values, such as the result of `0 / 0` or `sqrt(-1)` (the square root of -1). These are mathematically undefined, so Dart will return `double.nan` to indicate that the operation failed.

```dart
import 'dart:math';

void main() {
  print(0 / 0); // NaN
  print(sqrt(-1)); // NaN
}
```

Another special number is `double.infinity`. This represents positive infinity. The most common way we get infinity is by dividing a number by zero.

```dart
void main() {
  print(1 / 0); // Infinity
}
```

And finally, there is `double.negativeInfinity`, which is negative infinity. This can be obtained by dividing a negative number by zero.

```dart
void main() {
  print(-1 / 0); // -Infinity
}
```

## Quiz

**1. What is the result of the expression `0 / 0` in Dart?**

- A) `0`
- B) An error is thrown
- C) `double.nan`
- D) `double.infinity`

<details>
<summary>Answer</summary>

- C) `double.nan`

</details>

**2. Which of the following expressions will result in `double.infinity`?**

- A) `0 / 5`
- B) `5 / 0`
- C) `-5 / 0`
- D) `0 / 0`

<details>
<summary>Answer</summary>

- B) `5 / 0`

</details>

---

[← Course overview](../../../README.md)
