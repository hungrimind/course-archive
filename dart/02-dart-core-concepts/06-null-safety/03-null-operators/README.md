# Null Operators

The previous lesson was about nullable and non-nullable variables. In this lesson, we will cover the null operators.

Null operators are operators that allow us to work with nullable variables. There are three null operators in Dart:

-   Null assertion operator (`!`)
-   Null coalescing operator (`??`)
-   Null aware assignment operator (`??=`)

Let's go through each one.

## Null Assertion Operator

The null assertion operator (`!`) is a postfix operator that can be used on nullable variables.

> We had this same operator for Booleans, but for Booleans, it came before and meant the opposite value.

If you are trying to use a nullable variable where a non-nullable variable is expected, your IDE will show an error. Usually, it's a good sign to add some safety mechanisms. However, sometimes you know that it will never break, and you want the IDE to just accept the nullable value.

By using the `!` operator, you are taking responsibility for the variable not being null, and if it is, the program will throw a runtime error.

```dart
void main() {
  int? num;
  print(num!);
}
```

I use the null assertion operator on the `num` variable in the code above. Normally, this code would not be able to compile because of the null value being printed. But since we assert that it is not null using the `!`, it will run. But the value is still null, so at runtime, the program throws a runtime error and your code will be broken.

## Null Coalescing Operator

The null coalescing operator (`??`) is a binary operator that checks if the left-hand side of the operator is `null`. If it is, the operator returns the right-hand side value.

```dart
void main() {
  int? num1;
  int num2 = num1 ?? 10;
  print(num2);
}
```

Since `num1` is `null`, instead of setting the value of `num2` to be that of `num1`, it sets the value of `num2` to 10.

## Null Aware Assignment Operator

The null aware assignment operator (`??=`) is similar to the null coalescing operator. However, it only assigns the right-hand value to the left-hand variable if the variable is null.

```dart
void main() {
  int? num1;
  num1 ??= 10;
  print(num1);
}
```

Since `num1` is `null`, the value of `num1` is assigned to 10.

The key difference between the null coalescing and the null-aware assignment operator is that with the null coalescing operator, the value can be assigned to a different variable. With the null-aware assignment operator, the value must be assigned to the same variable.

## Quiz

**1. Which operator asserts that a nullable value is not null and will throw a runtime error if it is?**

- A) !
- B) ??
- C) ??=
- D) ==

<details>
<summary>Answer</summary>

- A) !

</details>

**2. What does the following print?
```dart
void main() {
  int? num1;
  int num2 = num1 ?? 10;
  print(num2);
}
```**

- A) null
- B) 0
- C) 10
- D) It throws a runtime error

<details>
<summary>Answer</summary>

- C) 10

</details>

**3. What does the following print?
```dart
void main() {
  int? n = 2;
  n ??= 10;
  print(n);
}
```**

- A) null
- B) 2
- C) 10
- D) It throws a runtime error

<details>
<summary>Answer</summary>

- B) 2

</details>

---

[← Course overview](../../../README.md)
