# Assert

The try-catch block is helpful for handling errors, but there are some errors that we want to throw during development but not when our code is in production.

We can use the `assert` keyword to throw an error only during development. In the following code, we are asserting that the `age` variable is greater than 13.

```dart
void main() {
  int age = 10;
  assert(age > 13);
  print('The user is $age years old');
}
```

If we run the code, we get the following error:

```shell
Unhandled exception:
'file:///bin/dart_course.dart': Failed assertion: line 3 pos 10: 'age > 13': is not true.
```

The `assert` statement is only executed during development and is ignored when the code is compiled for release. This is useful for checking for errors in your code while developing without worrying about it affecting your users.

You can also pass a second argument to the `assert` statement to add a custom error message.

```dart
void main() {
  int age = 10;
  assert(age > 13, 'User must be older than 13');
  print('The user is $age years old');
}
```

## Quiz

**1. What is the primary purpose of the `assert` statement in Dart?**

- A) To handle all types of errors that might occur when the app is used by end-users.
- B) To check for conditions and throw errors exclusively during development.
- C) To print debugging information to the console, similar to the `print()` function.
- D) To replace the need for `try-catch` blocks throughout the code.

<details>
<summary>Answer</summary>

- B) To check for conditions and throw errors exclusively during development.

</details>

**2. Consider the following code snippet. What will be the output when this code is run in development mode?
```dart
void main() {
  String? username; // A nullable String
  username = 'Ada';
  assert(username != null, 'Username cannot be null');
  print('Welcome, $username!');
}
```**

- A) The program will throw an `AssertionError`.
- B) The program will print "Username cannot be null".
- C) The program will print "Welcome, Ada!".
- D) The code will not compile because `username` is nullable.

<details>
<summary>Answer</summary>

- C) The program will print "Welcome, Ada!".

</details>

**3. How would you modify the following `assert` statement to include a custom error message?
```dart
assert(password.length > 8);
```**

- A) `assert(password.length > 8, 'Password must be longer than 8 characters');`
- B) `assert(password.length > 8: 'Password must be longer than 8 characters');`
- C) `assert(password.length > 8) { 'Password must be longer than 8 characters' };`
- D) `assert('Password must be longer than 8 characters', password.length > 8);`

<details>
<summary>Answer</summary>

- A) `assert(password.length > 8, 'Password must be longer than 8 characters');`

</details>

---

[← Course overview](../../../README.md)
