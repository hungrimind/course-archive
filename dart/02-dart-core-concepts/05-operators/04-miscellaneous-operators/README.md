# Miscellaneous Operators

There are some operators which we have been using since the very beginning of this course. Let's cover them now.

## Parentheses `()`

We have been using `()` to call some of the methods we've been exposed to like `print()`, `main()`, `toInt()`. When we have a print statement, the `()` calls the function with the contents used within that function.

```dart
print('Hello World');
```

You can also use parentheses for arithmetic to set priority in the order of operations.

```dart
void main() {
  print(2 + 3 * 5); // 17
  print((2 + 3) * 5); // 25
}
```

## Brackets `[]`

You use brackets to get a specific index of something. This is most valuable when we learn about Collections. Since collections hold a list of numbers, you would use the brackets to select the appropriate index within the list.

You can also use the `[]` to get a specific index of a String, since a String is a list of characters. 

The index are zero-based, which mean they start at 0 to denote the first value within.

```dart
void main() {
  String name = 'Kumar';
  print(name[0]); // K

  List<int> numbers = [1, 2, 3];
  print(numbers[1]); // 2
}
```

We will learn more about this in the Collections module

## Dot Operator `.`

The dot operator is used to access the properties of a class or call the methods that are within a class.

Again, that sentence might sound confusing, but we will understand it better in the Object-Oriented Programming Module.

For now, just remember that `.` let's you access properties and methods of something.

```dart
void main() {
  String name = 'Kumar';
  print(name.length);
  print(name.toUpperCase());
}
```

## Quiz

**1. What does this print?
```dart
String name = 'Kumar';
print(name[0]);
```**

- A) K
- B) u
- C) Kumar
- D) It causes an error

<details>
<summary>Answer</summary>

- A) K

</details>

**2. What does this print?
```dart
List<int> numbers = [1, 2, 3];
print(numbers[1]);
```**

- A) 1
- B) 2
- C) 3
- D) It causes an error

<details>
<summary>Answer</summary>

- B) 2

</details>

**3. Which snippet uses the dot operator to call a method?**

- A) name.toUpperCase()
- B) numbers[0]
- C) (2 + 3) * 5
- D) print('Hi')

<details>
<summary>Answer</summary>

- A) name.toUpperCase()

</details>

---

[← Course overview](../../../README.md)
