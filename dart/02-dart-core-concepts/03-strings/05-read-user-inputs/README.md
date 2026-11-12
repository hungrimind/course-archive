# Read User Inputs

In the previous modules, we learned how to declare variables and use them to store String values. However, for our apps to be interactive, we need to be able to get inputs from the user. Dart provides the `stdin` class from the `dart:io` library to read user inputs.

When a user enters a value, the `stdin.readLineSync()` function reads the input until they press the ENTER key. The input is then returned as a String value, which we can store in a variable.

```dart
import 'dart:io';

void main() {
  print('Enter your name: ');
  String? name = stdin.readLineSync();
  print('Hello $name');
}
```

> We need to add the `import 'dart:io';` statement to use the `stdin` class, as it is not part of the built-in `dart:core` library that is imported by default.

If you run the program above, you will see the following output:

```bash
Enter your name: 
Tadas
Hello Tadas
```

> Notice that we have declared the type of the `name` variable with a `String?`. This question mark denotes a nullable type. (We will discuss nullable variables later in this section)

## Assignment

Your task is to prompt the user for their favorite city, read their input from the console, and then print a message that includes the city they entered.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/favorite_city.dart`. Tests: `test/favorite_city_test.dart`.

---

[← Course overview](../../../README.md)
