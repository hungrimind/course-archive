# Relational Operators

Relational Operators are used to compare two values. The result of a relational operation is always a boolean value.

You can use relational operators to check if a value is greater than another value, less than another value, equal to another value, etc.

Here are the relational operators in Dart:

| Operator | Name | Description |
| --- | --- | --- |
| > | Greater Than | Checks if the left value is greater than the right value |
| < | Less Than | Checks if the left value is less than the right value |
| >= | Greater Than or Equal To | Checks if the left value is greater than or equal to the right value |
| <= | Less Than or Equal To | Checks if the left value is less than or equal to the right value |
| == | Equal To | Checks if the left value is equal to the right value |
| != | Not Equal To | Checks if the left value is not equal to the right value |

Here are some examples of relational operators in Dart:

```dart
void main() {
  print(1 > 2); // false
  print(2 < 3); // true
  print(1 >= 1); // true
  print(1 <= 0); // false
  print(1 == 2); // false
  print(1 != 2); // true
}
```

## Quiz

**1. What will the following Dart code print?

```dart
print(15 > 10);
```**

- A) false
- B) true
- C) It will cause an error.
- D) 15

<details>
<summary>Answer</summary>

- B) true

</details>

**2. What is the result of this expression?

```dart
25 < 25
```**

- A) false
- B) It will cause an error.
- C) true
- D) 25

<details>
<summary>Answer</summary>

- A) false

</details>

**3. What boolean value results from this comparison?

```dart
'hello' != 'world'
```**

- A) false
- B) It will cause an error.
- C) true
- D) 'hello'

<details>
<summary>Answer</summary>

- C) true

</details>

---

[← Course overview](../../../README.md)
