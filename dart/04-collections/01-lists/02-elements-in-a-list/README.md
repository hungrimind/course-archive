# Elements in a List

The whole point of putting things in a list is to be able to access them later. There are several ways to access elements inside a list.

## Accessing by Index

Every element in a list has an **index** starting from `0`, so the first element in the list has an index of `0`, the second element has an index of `1`, and so on.

To access an element, we can use the index of the element in square brackets after the list name.

```dart
void main() {
  List<String> students = ['James', 'John', 'Paul'];
  print(students[0]); // James
}
```

## Updating Elements in a List

Sometimes you might want to change an element that’s already inside your list, maybe you need to fix a mistake or update a value. You can use that index to directly change the value stored there.

All you need to do is assign a new value to the position you want to update.

```dart
void main() {
  List<String> students = ['Ava', 'Ben', 'Charlie'];

  // Change the second element (index 1) to 'Mia'
  students[1] = 'Mia';

  print(students); // [Ava, Mia, Charlie]
}
```

## Getting the Length of a List

It is common to want to know how many elements are in a list, and there is a convenient property on the list that tells you the length of the list.

In the examples above, `students.length` is `3`.

## Assignment

Complete the three tasks in the `main` function to interact with the `scores` list:

1. **Print the top score**: Add a print statement that displays the first element in the `scores` list.

2. **Update the lowest score**: Update the last element in the `scores` list to `915`. 

> [!info] Hint
>
> Use `scores.length - 1` to get the index of the last element.

3. **Show the final leaderboard**: Add a print statement that displays the entire `scores` list after your update.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/leaderboard_update.dart`. Tests: `test/leaderboard_update_test.dart`.

---

[← Course overview](../../../README.md)
