# Converting Between Types

We just covered the three main types of variables in Dart: `int`, `double`, and `String`.

But what if you want to convert or cast between the different types?

Converting between numbers is simple. You can use the `.toInt()` and `.toDouble()` methods.

```dart
void main() {
  double myDouble = 3.14;
  int myInt = myDouble.toInt();

  int myInt2 = 2;
  double myDouble2 = myInt2.toDouble();
}
```

To convert from a number to a string, we can use the `.toString()` method.

```dart
void main() {
  int myInt = 9;
  String myString = myInt.toString();
}
```

To convert from a string to a number, we can use the `int.parse()` and `double.parse()` methods.

```dart
void main() {
  String myString1 = '5';
  String myString2 = '3.14';

  int myInt = int.parse(myString1);
  double myDouble = double.parse(myString2);
}
```

It's essential to remember that when we receive input from a user, it will always be in the form of a string. So, if you want to do calculations with user inputs, you must convert them first.


## Assignment

Create a program that asks the user to enter two numbers.

Read both inputs using `readLineSync()`, convert the input strings to numbers, add them together, and print the result.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/interactive_adder.dart`. Tests: `test/interactive_adder_test.dart`.

---

[← Course overview](../../../README.md)
