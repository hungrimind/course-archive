# try-catch

When a function throws an error, the program will stop executing, and everything will come to a halt.

If the error is not dealt with, then this is called an **uncaught error**.

## Catching an Error

To catch an error, the code that could possibly throw an error must be wrapped in a `try` block.

If an error is thrown within the `try` block, the execution will continue to the `catch` block. This is where you can handle the error.

```dart
void main() {
  try {
    int result = 4 ~/ 0;
    print(result);
  } catch (e) {
    print("Cannot divide by zero");
  }
}
```

In the `catch` block, the error is passed in as a parameter. This allows you to access information about the error, like the error message.

```dart
void main() {
  try {
    int result = 4 ~/ 0;
    print(result);
  } catch (e) {
    print(e);
  }
}
```

This outputs the error message: `IntegerDivisionByZeroException`.


## The finally block

There is another block that you can add after `catch` called the `finally` block. The code in this block will always be executed, whether there is an error or not.

```dart
void main() {
  try {
    int result = 4 ~/ 0;
    print(result);
  } catch (e) {
    print(e);
  } finally {
    print("Done!");
  }
}
```

## Assignment

You are parsing user age data that comes from a database as a string. Sometimes the data is invalid and cannot be converted to a number, which would cause your program to crash.

1. Wrap the `int.parse(ageString)` call and the print statement in a `try` block.
2. Add a `catch` block that prints `"Error: Could not parse age. The value is not a valid number."` when the parsing fails.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/safe_data_parsing.dart`. Tests: `test/safe_data_parsing_test.dart`.

---

[← Course overview](../../../README.md)
