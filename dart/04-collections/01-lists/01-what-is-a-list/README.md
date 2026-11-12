# What is a List?

When building applications, we often need to store a collection of values. It could be a collection of users, a collection of posts, or a collection of orders.

We can store all these in individual variables, but that will get very messy.

```dart
String user1 = 'user1';
String user2 = 'user2';
String user3 = 'user3';
String user4 = 'user4';
String user5 = 'user5';
```

Dart gives us a much cleaner way to store a collection of values, which is called a **List**.

A List allows us to store a collection of multiple values in a single variable.

```dart
var users = ['user1', 'user2', 'user3', 'user4', 'user5'];
```

A List is defined by putting all the values in between brackets `[]` and separating them by commas. Then assign this list to a single variable. 

Just like variables, we can define the exact type of variable we want. But with collections, you have 2 things you can define. 

First, you can define the type of collection it is. In this case, we defined a `List`. And then you can define the type of each entry within the `List`. If you don't define this, they can be of any type. To define it, you put the type within `<>`.

```dart
// let Dart decide on the type
var users = ['user1', 'user2', 'user3', 'user4', 'user5'];
// List type, but Dart decides on the types within the list
List users = ['user1', 'user2', 'user3', 'user4', 'user5'];
// List of String types
List<String> users = ['user1', 'user2', 'user3', 'user4', 'user5'];
```

## Quiz

**1. Why use a List instead of multiple individual variables like user1, user2, user3?**

- A) It automatically makes the app run faster.
- B) It converts all values to strings.
- C) It prevents null values everywhere in your program.
- D) It keeps related values together in one variable, making code cleaner and easier to manage.

<details>
<summary>Answer</summary>

- D) It keeps related values together in one variable, making code cleaner and easier to manage.

</details>

**2. Which declaration ensures the List can only contain String values?**

- A) List<String> users = ['user1', 'user2', 'user3'];
- B) List users = ['user1', 'user2', 'user3'];
- C) var users = ['user1', 'user2', 'user3'];
- D) String users = ['user1', 'user2', 'user3'];

<details>
<summary>Answer</summary>

- A) List<String> users = ['user1', 'user2', 'user3'];

</details>

**3. When declaring a collection in Dart, what two things can you define?**

- A) The variable name and the amount of memory it uses
- B) The file path and the import alias
- C) The type of collection (e.g., List) and the type of each entry (e.g., String)
- D) The print format and the debug level

<details>
<summary>Answer</summary>

- C) The type of collection (e.g., List) and the type of each entry (e.g., String)

</details>

---

[← Course overview](../../../README.md)
