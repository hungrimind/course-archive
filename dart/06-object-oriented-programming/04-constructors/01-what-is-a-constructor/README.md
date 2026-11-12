# What is a Constructor?

The word “constructor” comes from the word “construct,” which means “to build or create.” In programming, a constructor is a function that helps build or create objects from a class.

When we create a class in Dart, the object has no special data.

```dart
class Player {
  String? name;
  int? age;
  String? team;
}

void main() {
  Player player1 = Player();
  print(player1.name); // null
}
```

But this is not very useful. What we want to do is create multiple football players with different names, ages, and teams.

To do that, that’s where constructors come in.

A constructor is a special function that is executed when the object is created. Oftentimes, it's used to assign values to the object.

It is defined inside the class but without a return type, and the function name must be the same as the class name.

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

To create an instance of this class, we have to pass in the required values in the constructor.

```dart
void main() {
  Player player1 = Player('Lionel Messi', 36, 'Inter Miami');
  print(player1.name); // Lionel Messi
  print(player1.age); // 36
  print(player1.team); // Inter Miami
}
```

## Quiz

**1. What is a constructor in Dart and when does it run?**

- A) A function that runs when the program starts
- B) A special function used to destroy objects when they are no longer needed
- C) A regular method that must return a value
- D) A special function that runs when an object is created to help initialize it

<details>
<summary>Answer</summary>

- D) A special function that runs when an object is created to help initialize it

</details>

**2. Which of the following is a valid constructor definition for a Player class in Dart?**

- A) Player(String n, int a, String t) { name = n; age = a; team = t; }
- B) void Player(String n, int a, String t) { name = n; age = a; team = t; }
- C) constructor Player(String n, int a, String t) { name = n; age = a; team = t; }
- D) Player(String n, int a, String t) { return Player(); }

<details>
<summary>Answer</summary>

- A) Player(String n, int a, String t) { name = n; age = a; team = t; }

</details>

**3. Given:
```dart
class Player {
  String name;
  int age;
  String team;
  Player(String n, int a, String t) {
    name = n;
    age = a;
    team = t;
  }
}
```
Which line correctly creates an instance?**

- A) Player('Lionel Messi', 36, 'Inter Miami')
- B) Player()
- C) Player(name: 'Lionel Messi', age: 36, team: 'Inter Miami')
- D) new Player('Inter Miami', 'Lionel Messi', 36)

<details>
<summary>Answer</summary>

- A) Player('Lionel Messi', 36, 'Inter Miami')

</details>

**4. In the version without a constructor:
```dart
class Player {
  String? name;
  int? age;
  String? team;
}
print(player1.name);
```
prints what and why?**

- A) "", because strings default to an empty string
- B) Compile-time error, because name must be non-null
- C) null, because name is declared as String? and was never assigned
- D) undefined, because Dart doesn't initialize fields

<details>
<summary>Answer</summary>

- C) null, because name is declared as String? and was never assigned

</details>

---

[← Course overview](../../../README.md)
