# The late keyword

In Dart, you can use the `late` keyword to avoid making a variable nullable. For example:

```dart
late String name;
```

The `late` keyword tells Dart that the variable will be assigned before it is accessed, so there is no need for the question mark.

```dart
late String name;
name = "Tadas";
print(name); // Tadas
```

The `late` keyword is used for variables that are declared before being initialized. If a variable is declared with `late` and is not assigned a value before being accessed, the program will throw a runtime error.

```dart
late String name;
print(name); // Error
```

It is the developer's responsibility to ensure the variable is assigned before being accessed.

## Assignment

Use the `late` keyword to declare a non-nullable String named `summary` that will be initialized later in the program.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/main.dart`. Tests: `test/main_test.dart`.

---

[← Course overview](../../../README.md)
