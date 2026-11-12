# What are Magic Strings?

A **magic string** is a hard-coded, unnamed string that appears directly in your code. It's problematic because it can lead to errors and makes code difficult to maintain.

```dart
if (userRole == "admin") {
  // do something
}
```

In this example, `"admin"` is a magic string. If you need to change it, you must find every instance in your code.

Avoid magic strings by using named constants, which provide a single point of change and improve readability.

```dart
const String ADMIN_ROLE = "admin";

if (userRole == ADMIN_ROLE) {
  // do something
}
```

> [!warning]
> Changing a magic string in multiple places is error-prone and can introduce bugs. Use constants to avoid this.

## Fill in the Blanks

Fill in the blanks:

```dart
String userRole = __(1)__;

// Avoid magic strings by using constants
const String __(2)__ = "admin";

if (__(3)__ == ADMIN_ROLE) {
  // do something
}
```

<details>
<summary>Answer</summary>

1. `"admin"`
2. `ADMIN_ROLE`
3. `userRole`

</details>

---

[← Course overview](../../../README.md)
