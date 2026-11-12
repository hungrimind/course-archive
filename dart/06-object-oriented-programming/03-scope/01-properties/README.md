# Properties

We can create variables inside a class, just like we did when creating functions. These variables are known as **properties** of a class.

```dart
class Person {
  String name = "John";
  int age = 30;
}
```

Properties are variables that are accessible anywhere in the class. This makes sense because properties are meant to represent some aspect of an object. In the case of the `Person` class, the `name` and `age` properties represent the name and age of a person.

## Accessing Properties

We can access the properties of a class using the dot notation.

```dart
void main() {
  Person person = Person();
  print(person.name);
  print(person.age);
}
```

Since properties are just variables, you can perform all the operations you can do with variables, such as assigning and updating their values.

```dart
void main() {
  Person person = Person();
  print(person.name);
  print(person.age);

  person.name = "Bob";
  person.age = 20;

  print(person.name);
  print(person.age);
}
```

This will print `John` and `30` since we defined those at the top, followed by `Bob` and `20`.

## Assignment

You are building a simple game and need to create a template for player profiles. Inside the `Player` class, define three properties: a `String` named `username` with default value `'Guest'`, an `int` named `health` with default value `100`, and a `double` named `score` with default value `0.0`.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/player_profile.dart`. Tests: `test/player_profile_test.dart`.

---

[← Course overview](../../../README.md)
