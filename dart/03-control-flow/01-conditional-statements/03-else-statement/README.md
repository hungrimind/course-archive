# else statement

The `if` statement can be used to run a block of code if a certain condition is met.

But what if you want another block of code to run if the condition is not met? That is where `else` comes in.

The `else` statement can be used after an `if` statement, and it will run a block of code if the `if` statement is false.

```dart
if (userInput == 'password') {
  print('Correct password!');
} else {
  print('Wrong password!');
}
```

When using the `else` keyword, one of the two statements must run. So if the `if` condition is not met, then the `else` statement must execute.

This is a common problem people run into when using the `if` statement for something like a password check.

```dart
if (userInput == 'password') {
  print('Correct password!');
}
print('Wrong password!');
```

With this code, both statements can be executed if the user input was `password`, so you would see:

```bash
Correct password!
Wrong password!
```

This is not what we want. By using the `else` statement, we can ensure that only one of the two statements will be executed.

## Assignment

Complete the if-else statement in the `main` function. Add an `else` clause that prints `"Sorry, you are not old enough to enter."` when the age is less than 18.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/nightclub_bouncer.dart`. Tests: `test/nightclub_bouncer_test.dart`.

---

[← Course overview](../../../README.md)
