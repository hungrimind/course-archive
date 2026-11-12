# Scope

Scope is a concept we have already discussed when we talked about functions. It is also important to understand how it works with classes.

> Scope determines where a variable or function is accessible in your code.

Let's look at an example.

```dart
String name = 'Kyle';

class Person {
  int age = 29;

  void printName() {
    String text = "His name is...";
    print(text + name);
  }
}
```

There is a variable called `name` outside of any class or function, making it a global variable. This means that the variable `name` can be accessed anywhere in your program, inside classes, functions, and methods.

There is also a variable `age` inside the `Person` class. This variable is only accessible inside the `Person` class, making it a member variable.

Inside the `printName` method, we can access both the `name` and `age` variables. This is because the `name` variable is global, which means it is accessible everywhere in the code, and the `age` variable is accessible because it is a member variable of the `Person` class.

But the `printName` function also has a variable `text` defined within it. This variable is only accessible within that function.

The same applies to methods. Methods are only accessible inside the class they are defined in.

## Quiz

**1. What is the primary purpose of "scope" in Dart?**

- A) A) To define the data type of a variable, like `String` or `int`.
- B) B) To determine where a variable or function is accessible in the code.
- C) C) To assign an initial value to a variable when it is declared.
- D) D) To control the flow of the program using `if` and `else` statements.

<details>
<summary>Answer</summary>

- B) B) To determine where a variable or function is accessible in the code.

Scope is the concept that defines the visibility or accessibility of a variable or function. A variable's scope determines from which parts of the code you can see and use it.

</details>

**2. Consider the following code snippet:

```dart
String gameTitle = 'The Legend of Zelda';

class Player {
  int health = 100;

  void displayStatus() {
    // Which variables are accessible here?
  }
}
```

Inside the `displayStatus` method, which variables are directly accessible?**

- A) A) Only the `health` variable.
- B) B) Only the `gameTitle` variable.
- C) C) Both `gameTitle` and `health`.
- D) D) Neither `gameTitle` nor `health`.

<details>
<summary>Answer</summary>

- C) C) Both `gameTitle` and `health`.

The `gameTitle` variable is a global variable, so it's accessible everywhere, including inside the `displayStatus` method. The `health` variable is a member variable (property) of the `Player` class, so it is also accessible from within a method of that same class.

</details>

**3. Why will the following code result in an error?

```dart
class Car {
  String model = 'Mustang';
}

void main() {
  print(model); // Error on this line
}
```**

- A) A) The `print` function cannot be called inside the `main` function.
- B) B) The `model` variable is out of scope; it's only accessible inside the `Car` class.
- C) C) All variables inside a class must be declared with the `final` keyword.
- D) D) The `Car` class needs a method before its properties can be used.

<details>
<summary>Answer</summary>

- B) B) The `model` variable is out of scope; it's only accessible inside the `Car` class.

The `model` variable is defined within the scope of the `Car` class. This means it can only be accessed from within that class. The `main` function is in the global scope and cannot directly access a variable defined inside a class's scope.

</details>

---

[← Course overview](../../../README.md)
