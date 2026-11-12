# Concatenation & Interpolation

To combine multiple strings, you can use two methods: concatenation and interpolation.

## Concatenation

Concatenation refers to combining multiple strings into a single string using the `+` operator.

```dart
String firstName = "Tadas";
String lastName = "Petra";
String fullName = firstName + " " + lastName;
print("My full name is " + fullName); // My full name is Tadas Petra
```

The `+` operator can also combine a string with a variable that is not a string, but the non-string variable will automatically be converted into a string.

```dart
String name = "Tadas";
int age = 29;
print(name + " is " + age + " years old"); // Tadas is 29 years old
```

While concatenation works fine, it can become messy or hard to read when combining many strings or variables.

## Interpolation

Interpolation is a cleaner and more common way to combine strings. It allows you to insert variables directly into a string using the `$` symbol.

```dart
String firstName = "Tadas";
String lastName = "Petra";
String fullName = "$firstName $lastName";
print("My full name is $fullName"); // Tadas Petra
```

If you want to include something more complex, you can wrap it in `${}`.

```dart
int age = 29;
print("Next year, I’ll be ${age + 1} years old."); // Next year, I’ll be 30 years old
```

```dart
String name = "Tadas";
print("Hello ${name.toUpperCase()}!"); // Hello TADAS!
```

You also need ${} when the variable is followed by a character that could be confused as part of its name.

```dart
String name = "Tadas";
print("Hello ${name}Smith"); // Hello TadasSmith
```

Using interpolation makes your code easier to read and is generally preferred over concatenation in Dart.

## Quiz

**1. Which line correctly creates "Tadas Petra" using concatenation?**

- A) firstName + lastName
- B) firstName + " " + lastName
- C) "$firstName $lastName"
- D) firstName + " " . lastName

<details>
<summary>Answer</summary>

- B) firstName + " " + lastName

</details>

**2. What is printed with the following code?

```dart
String name = "Tadas";
int age = 29;
print(name + " is " + age + " years old");
```**

- A) Tadas is 29 years old
- B) Tadas is age years old
- C) A compile-time error occurs because age is an int
- D) Tadas is 29 years old years old

<details>
<summary>Answer</summary>

- A) Tadas is 29 years old

</details>

**3. Which interpolation correctly includes the result of age + 1?**

- A) "$name is $age + 1 years old"
- B) "$name is ${age + 1} years old"
- C) "$name is $(age + 1) years old"
- D) "$name is {age + 1} years old"

<details>
<summary>Answer</summary>

- B) "$name is ${age + 1} years old"

</details>

---

[← Course overview](../../../README.md)
