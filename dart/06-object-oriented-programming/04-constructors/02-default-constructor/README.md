# Default Constructor

In the previous lesson we created a constructor that looks like this:

```dart
class Player {
  String? name;
  int? age;
  String? team;

  Player(String n, int a, String t) {
    name = n;
    age = a;
    team = t;
  }
}
```

You can achieve the same thing by writing it like this:

```dart
class Player {
  String name;
  int age;
  String team;

  Player(this.name, this.age, this.team);
}
```

And you can create this object the same way as before:

```dart
void main() {
  Player player1 = Player('Lionel Messi', 36, 'Inter Miami');
  print(player1.name); // Lionel Messi
  print(player1.age); // 36
  print(player1.team); // Inter Miami
}
```

This is called a **Default Constructor**. This action of initializing your object with values is one of the most common scenarios, so much so that Dart has a shorthand way to do it.

## Assignment

You are working with a `Book` class that has three properties: `title`, `author`, and `publicationYear`. 

1. Define a custom constructor for the `Book` class that accepts three parameters: a `String` for the title, a `String` for the author, and an `int` for the publication year. Use these parameters to initialize the properties.

2. In the `main` function, create an instance of `Book` using your custom constructor with the title "The Dart Guide", author "John Doe", and publication year 2023.

3. Print each property using the exact format: 

```dart 
  print("Title: ${book.title}");
  print("Author: ${book.author}");
  print("Publication Year: ${book.publicationYear}");
```

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/custom_constructors.dart`. Tests: `test/custom_constructors_test.dart`.

---

[← Course overview](../../../README.md)
