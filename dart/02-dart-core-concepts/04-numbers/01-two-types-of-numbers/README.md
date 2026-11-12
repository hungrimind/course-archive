# Two Types of Numbers

Dart is designed to be efficient. Because of this it has two different types of numbers, `int` and `double`. 

Let's learn about them.

### int

`int` is short for "integer," which means a whole number. `int` is used to represent all integers between -2^53 and 2^53.

The reason for this limitation is again, because it is stored in binary. It is a 64-bit integer, which means it will be represented by 64 1's and 0's, and the maximum and minimum numbers you can represent with 64 1's and 0's are -2^53 and 2^53.

```dart
int age = 18;
int negativeNumber = -18;
int zero = 0;
```

### double

So, how do we represent numbers like 3.14? For that, we use the `double` type. The `double` type is used to represent numbers with decimals and is called that because it uses double-precision floating-point representation.

I know that was a mouthful, but all that means is that the numbers are represented in a way that is efficient for computers to process.

```dart
double pi = 3.14;
double negative = -3.14;
double temperature = 98.6;
```

## Quiz

**1. You need to store the number of students in a classroom. Which data type is the most appropriate for this?**

- A) double
- B) int

<details>
<summary>Answer</summary>

- B) int

</details>

**2. Which of the following lines of code correctly declares a variable to store the value of Pi (approximately 3.14)?**

- A) int pi = 3.14;
- B) double pi = "3.14";
- C) double pi = 3.14;
- D) int pi = 3;

<details>
<summary>Answer</summary>

- C) double pi = 3.14;

</details>

---

[← Course overview](../../../README.md)
