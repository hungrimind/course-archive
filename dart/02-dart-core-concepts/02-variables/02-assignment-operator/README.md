# Assignment Operator

To assign a value to a variable, we use the assignment operator, which is the equal sign `=`. This operator is called the assignment operator because it assigns the value on the right-hand side of the operator to the variable on the left-hand side. In the example below, we are assigning the value `10` to the variable `age` using the assignment operator.

```dart
void main() {
  int age = 10;
}
```

You may have also noticed the semicolon `;` at the end of each line in Dart.

The reason we use a semicolon to end a line of code in Dart goes way back through programming history. Dart’s syntax is based on languages like Java and C, and both of those use semicolons to mark the end of a statement. C itself inherited that idea from an older language called ALGOL, which was created in the 1950s.

So, the reason we use a semicolon at the end of each line is that people were used to it in the 1950s.

I know what you're thinking, "Can't we just remove the semicolon?".

Yes, we can. And some languages have, but Dart still uses them because programmers are so used to them.

Now, let's get back to the assignment operator.

We can also assign the value of one variable to another variable. In the example below, we are assigning the value of the `age` variable to the `myAge` variable.

```dart
void main() {
  int age = 10;
  int myAge = age;
}
```

Once a variable is created, we can update the value of that variable. In the example below, we are updating the value of the `age` variable to `20`.

```dart
void main() {
  int age = 10;
  age = 20;
}
```

## Assignment

Inside the `main` function, create a variable named `age` and assign it the value `10` using the assignment operator (`=`).

Then, use the `print` function to display the value of `age` in the console.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/assign_variable.dart`. Tests: `test/assign_variable_test.dart`.

---

[← Course overview](../../../README.md)
