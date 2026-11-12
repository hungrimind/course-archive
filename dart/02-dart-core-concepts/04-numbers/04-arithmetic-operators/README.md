# Arithmetic Operators

Addition, Subtraction, Multiplication, and Division are the basic operations you can perform on numbers. Dart uses the same symbols for this that you use in regular mathematics.

```dart
print(1 + 2); // 3
print(2 - 1); // 1
print(2 * 3); // 6
print(6 / 2); // 3
```

There are a few different things to note here.

### Integers and Doubles

Addition, Subtraction, and Multiplication between two integers will always return an integer. However, division is the only operation that will always return a double, even if both numbers are integers.

```dart
print(2 + 2); // 4
print(2 - 2); // 0
print(2 * 2); // 4
print(2 / 2); // 1.0
```

This is because there is a chance that you are dividing two numbers that do not divide evenly, and the result is a decimal point. In that case, it would be weird if Dart only returned the integer portion of the answer, so it always returns a `double` value.

```dart
print(5 / 2); // 2.5
```

If you want to get the integer portion of the result, you can use the integer division operator `~/`.

```dart
print(5 ~/ 2); // 2
```

This is only valid for integers. If you try to integer divide a double, you will get an error.

### Modulus Operator

The modulus operator `%` returns the remainder of a division problem. So when you calculate `5 % 2`, it will return `1` because 2 goes into 5 two times, with 1 left over.

```dart
print(5 % 2); // 1
```

### Order of Operations

Dart, just like regular math, uses PEMDAS to calculate the results of complex equations.

```dart
print(5 + 3 * 2); // 11
print((5 + 3) * 2); // 16
```

## Quiz

**1. What will be the output of: `int difference = 10 - 5; print(difference);`?**

- A) 5
- B) 15
- C) 50
- D) 2

<details>
<summary>Answer</summary>

- A) 5

</details>

**2. What data type is returned when using the `/` division operator in Dart?**

- A) double
- B) int
- C) String
- D) num

<details>
<summary>Answer</summary>

- A) double

</details>

**3. Which operator should you use to perform integer division in Dart?**

- A) /
- B) //
- C) ~/
- D) %

<details>
<summary>Answer</summary>

- C) ~/

</details>

**4. What does the modulo operator (%) return?**

- A) The quotient of a division operation
- B) The product of two numbers
- C) The percentage of a number
- D) The remainder of a division operation

<details>
<summary>Answer</summary>

- D) The remainder of a division operation

</details>

**5. What is the result of `10 * 5` in Dart?**

- A) 15
- B) 50
- C) 5
- D) 2

<details>
<summary>Answer</summary>

- B) 50

</details>

---

[← Course overview](../../../README.md)
