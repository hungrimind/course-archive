# How to Return Data?

You now know how to pass information into a function through parameters. Now, we need to get information out of the function.

To return information from a function, you can use the `return` keyword.

```dart
void main() {
  print(add(2, 3));
}

int add(int num1, int num2) {
  return num1 + num2;
}
```

The `return` keyword will return the value and stop executing the function.

The value you return from the function must match the return type of the function.


## Assignment

You need to create a function that can answer a simple question: "Is this number even?"

Write a function named `isEven` that accepts one integer parameter called `number` and returns `true` if the number is even, `false` if it's odd. The function must have a return type of `bool`. Use the modulo operator (`%`) to check if the number is divisible by 2.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/even_number_checker.dart`. Tests: `test/even_number_checker_test.dart`.

---

[← Course overview](../../../README.md)
