# Different Types of Variables

There are many different types of variables you can use in Dart. You can't just store anything in a variable. For example, if you create a variable storing a name, you can't just change that variable to store someone's age.

Thus far, we have used the keyword `var` when declaring variables. By using `var`, you let Dart decide for you what type of variable it will be. 

But you can also set the type of variable yourself.

```dart
String name = 'Kyle';
name = 10; // Error, can't change a string to an integer
```

Each variable you create can only store one specific type of data. In the example above, we have created a `String` variable. A `String` is a variable type that stores text. So, if we try to change the `String` variable to store a number, it will throw an error.

There are a couple of different types of variables that you can use in Dart.

| Type | Value | Example |
| ---- | ----- | ------- |
| `String` | Text | `'Kyle'` |
| `int` | Whole Number | `10` |
| `double` | Decimal Number | `10.5` |
| `bool` | True or False | `true` or `false` |
| `List` | List of values | `[1, 2, 3, 4]` |
| `Map` | Key-value pairs | `{'name': 'Kyle'}` |
| `Set` | List of unique values | `{1, 2, 3, 4}` |

We will discuss all of these types throughout this course. But first, let's focus on the first four types, as they are the building blocks for everything else.

## Quiz

**1. You're building an app and need to store the number of items a user has in their shopping cart. The number of items will always be a whole number, like 5, 10, or 27. Which variable type should you use?**

- A) String
- B) double
- C) int
- D) bool

<details>
<summary>Answer</summary>

- C) int

</details>

**2. You want to create a variable to hold a user's full name, like 'Alice Smith'. Which is the correct way to declare this variable?**

- A) String name = 'Alice Smith';
- B) int name = 'Alice Smith';
- C) Text name = 'Alice Smith';
- D) String name = Alice Smith;

<details>
<summary>Answer</summary>

- A) String name = 'Alice Smith';

</details>

**3. Look at the following code snippet. What will happen when this code is run?

```dart
String userGreeting = 'Hello';
userGreeting = false;
```**

- A) The code will run successfully, and userGreeting will now be false.
- B) The code will cause an error because you can't change a String variable to a bool.
- C) The code will run successfully, and userGreeting will be converted to the text 'false'.
- D) The code will cause an error because you cannot change the value of a variable once it's set.

<details>
<summary>Answer</summary>

- B) The code will cause an error because you can't change a String variable to a bool.

</details>

---

[← Course overview](../../../README.md)
