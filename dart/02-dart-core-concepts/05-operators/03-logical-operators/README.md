# Logical Operators

The next type of operator is called a logical operator. Logical operators operate on booleans. There are three logical operators: `&&`, `||`, and `!`.

## And Operator

The `&&` operator is called the and operator. It is used to check if two conditions are both `true`.

```dart
print(true && true); // true
print(true && false); // false
print(false && true); // false
print(false && false); // false
```

The output is only `true` if both conditions are true.

We can use this to check if a number is greater than 5 **and** less than 10.

```dart
var num1 = 6;
print(num1 > 5 && num1 < 10);
```

## Or Operator

The `||` operator is called the or operator. It checks if either condition is `true`.

```dart
print(true || true); // true
print(true || false); // true
print(false || true); // true
print(false || false); // false
```

## Not Operator

The `!` operator is called the not operator. It is used to check if a condition is not true.

```dart
print(!true); // false
print(!false); // true
```

We can use it in conjunction with the comparison operators to check if two values are not equal.

```dart
print(2 != 3); // true
```

## Quiz

**1. What does this print in Dart?

Code: print(6 > 5 && 6 < 10);**

- A) false
- B) 6
- C) It causes an error
- D) true

<details>
<summary>Answer</summary>

- D) true

</details>

**2. Which statement about the not operator (!) is correct?**

- A) ! flips a boolean value: !true is false, !false is true
- B) ! checks if two values are not equal
- C) ! only works with numbers
- D) ! makes both sides of && become true

<details>
<summary>Answer</summary>

- A) ! flips a boolean value: !true is false, !false is true

</details>

---

[← Course overview](../../../README.md)
