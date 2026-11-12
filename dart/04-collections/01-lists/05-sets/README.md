# Sets

Another type of collection is a Set. A set is a collection of elements where each element is unique. The difference between a Set and a List is that a List can contain duplicate values whereas a Set only contains unique values.

The syntax for a Set is very similar to a List, but instead of square brackets, you use curly brackets.

```dart
void main() {
  Set numberSet = {1, 2, 3};
  print(numberSet);
}
```

If you try to add a duplicate value to a Set, it will just ignore it.

```dart
void main() {
  Set numberSet = {1, 2, 3, 3};
  print(numberSet); // {1, 2, 3}
}
```

If you try to add a duplicate value to a List, it will add it.

```dart
void main() {
  List numberList = [1, 2, 3, 3];
  print(numberList); // [1, 2, 3, 3]
}
```

We won't go much deeper into sets because they are much less commonly used than Lists. But they work in similar ways.

## Quiz

**1. What is the primary characteristic that distinguishes a `Set` from a `List` in Dart?**

- A) A `Set` preserves the order of its elements, while a `List` does not.
- B) A `Set` is created using square brackets `[]`, while a `List` uses curly brackets `{}`.
- C) A `Set` can only contain `String` values, while a `List` can contain any data type.
- D) A `Set` can only contain unique values, while a `List` can contain duplicates.

<details>
<summary>Answer</summary>

- D) A `Set` can only contain unique values, while a `List` can contain duplicates.

</details>

**2. Consider the following Dart code. What will be the output?

```dart
void main() {
  var numberSet = {10, 20, 30, 20, 10};
  print(numberSet);
}
```**

- A) `{10, 20, 30, 20, 10}`
- B) `[10, 20, 30]`
- C) `{10, 20, 30}`
- D) The code will produce an error.

<details>
<summary>Answer</summary>

- C) `{10, 20, 30}`

</details>

**3. Which line of code correctly initializes a `Set` of numbers?**

- A) `var myNumbers = [100, 200, 300];`
- B) `var myNumbers = {100, 200, 300};`
- C) `var myNumbers = (100, 200, 300);`
- D) `var myNumbers = "100, 200, 300";`

<details>
<summary>Answer</summary>

- B) `var myNumbers = {100, 200, 300};`

</details>

---

[← Course overview](../../../README.md)
