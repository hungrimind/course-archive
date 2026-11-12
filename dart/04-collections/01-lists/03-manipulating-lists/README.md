# Manipulating Lists

When working with lists, you will want to add or remove elements from a list.

## Adding Elements

The most common way to add an element to a list is to use the `add()` method. This will add the element to the end of the list.

```dart
void main() {
  List<String> names = ['Angela', 'Jack', 'James'];
  names.add('Jill');
  print(names); // ['Angela', 'Jack', 'James', 'Jill']
}
```

You can use the `addAll()` method to add all the elements from another list to the current list.

```dart
void main() {
  List<String> names = ['Angela', 'Jack', 'James'];
  names.addAll(['Jill', 'Tom']);
  print(names); // ['Angela', 'Jack', 'James', 'Jill', 'Tom']
}
```

The `insert()` method allows you to add an element at a specific index in the list.

```dart
void main() {
  List<String> names = ['Angela', 'Jack', 'James'];
  names.insert(1, 'Jill');
  print(names); // ['Angela', 'Jill', 'Jack', 'James']
}
```

## Removing Elements

The `remove()` method allows you to remove a specific element from a list.

```dart
void main() {
  List<String> names = ['Angela', 'Jack', 'James'];
  names.remove('Jack');
  print(names); // ['Angela', 'James']
}
```

If there are multiple instances of the same element in a list, then only the first instance of the element will be removed.

```dart
void main() {
  List<String> names = ['Angela', 'Jack', 'James', 'Jack'];
  names.remove('Jack');
  print(names); // ['Angela', 'James', 'Jack']
}
```

If you want to remove an element at a given index, you can use the `removeAt()` method.

```dart
void main() {
  List<String> names = ['Angela', 'Jack', 'James', 'Jack'];
  names.removeAt(2);
  print(names); // ['Angela', 'Jack', 'Jack']
}
```

We can also remove all the elements in a list using the `clear()` method. 

```dart
void main() {
  List<String> names = ['Angela', 'Jack', 'James', 'Jack'];
  names.clear();
  print(names); // []
}
```

There are a few more ways to manipulate lists, but we have covered the most common ones. You can always learn more in the [Dart Documentation](https://api.dart.dev/dart-core/List-class.html).

## Assignment

You are managing a sports team's roster. A new player named "David" has just joined the team, and you need to update the official roster.

1. Add "David" to the end of the `teamRoster` list.
2. However, Bob doesn't like David, so he leaves. Remove 'Bob' from the list.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/team_roster.dart`. Tests: `test/team_roster_test.dart`.

---

[← Course overview](../../../README.md)
