# Creating a Class

A class in Dart is defined using the `class` keyword, and the naming convention for classes is PascalCase (where the first letter of each word in a compound word is capitalized, with no spaces or underscores separating them).

> The convention is to create a separate file for each class. This is not required, but it is good practice.

```dart
class Student {}
```

This is a class called `Student`. The `Student` class can be used as a custom type for our variables, just like `int`, `double`, or `String`.

```dart
void main() {
  Student student1;
  Student student2;
  Student student3;
}
```

But these variables are useless because the `Student` class has nothing in it.

We need to add some properties to describe a student.

```dart
class Student {
  String name;
  int age;
  String course;
}
```

Now our `Student` class is slightly more useful, and we can create variables of type `Student` to store information about each student.

## Quiz

**1. Following Dart's naming conventions, which of the following is the correct way to name a class that will represent a user's profile?**

- A) userProfile
- B) UserProfile
- C) user_profile
- D) USER_PROFILE

<details>
<summary>Answer</summary>

- B) UserProfile

</details>

**2. In the code snippet below, what are `name`, `age`, and `course` considered?

```dart
class Student {
  String name;
  int age;
  String course;
}
```**

- A) Functions
- B) Global variables
- C) Parameters
- D) Properties

<details>
<summary>Answer</summary>

- D) Properties

</details>

---

[← Course overview](../../../README.md)
