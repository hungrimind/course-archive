# Required vs Optional Parameters

When you define parameters in a function, you have to decide if that parameter is required by the function or if it is optional for the user to provide it.

## Required Parameters

For positional parameters, all the parameters are required. You cannot create a positional parameter that is optional.

```dart
void printFullName(String firstName, String lastName) {
	print('$firstName $lastName');
}
```

When you call the `printFullName` function, you must provide both the first and last names, or you will get a compile-time error.

```dart
printFullName('Tadas', 'Petra'); // Tadas Petra
printFullName('Tadas'); // Compile time error
```

For named parameters, all parameters are optional by default. You can make a named parameter required by using the `required` keyword.

```dart
void printFullName({
	required String firstName,
	required String lastName,
}) {
	print('$firstName $lastName');
}
```

Now, if you try to call the function without the `lastName`, you will get a compile-time error.

```dart
printFullName(firstName: 'Tadas', lastName: 'Petra'); // Tadas Petra
printFullName(firstName: 'Tadas'); // Compile time error
```

## Optional Parameters

For named parameters, all parameters are optional by default. You can call the function without passing in any arguments, and you will not get an error.

```dart
void printFullName({
	String? firstName,
	String? lastName,
}) {
	print('$firstName $lastName');
}
```

```dart
printFullName(firstName: 'Tadas', lastName: 'Petra'); // Tadas Petra
printFullName(firstName: 'Tadas'); // Tadas null
printFullName(); // null null
```

## Quiz

**1. Consider the following function definition:


```dart
void printUserDetails({String? name, int? age}) {
  print('Name: $name, Age: $age');
}
```

By default, what is the status of the `name` and `age` parameters?**

- A) Both are required.
- B) `name` is required, but `age` is optional.
- C) Both are optional.
- D) The code will cause an error because they are not given a default value.

<details>
<summary>Answer</summary>

- C) Both are optional.

</details>

**2. You are writing a function to create a user profile, where the `username` must always be provided, but the `bio` can be omitted. Which function signature correctly enforces this?**

- A) `void createProfile(required String username, String? bio)`
- B) `void createProfile({required String username, String? bio})`
- C) `void createProfile(String username, {required String? bio})`
- D) `void createProfile({String username, String? bio})`

<details>
<summary>Answer</summary>

- B) `void createProfile({required String username, String? bio})`

</details>

**3. Given this function that uses a positional parameter:


```dart
void greet(String name) {
  print('Hello, $name!');
}
```

Which of the following statements is true?**

- A) You can call the function like `greet()` without any arguments.
- B) The `name` parameter is optional by default.
- C) Calling the function without the `name` argument will result in a compile-time error.
- D) You can make the `name` parameter optional by changing its type to `String?`.

<details>
<summary>Answer</summary>

- C) Calling the function without the `name` argument will result in a compile-time error.

</details>

---

[← Course overview](../../../README.md)
