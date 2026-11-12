# Defining a Function

Before we use a function, it needs to be defined. We define a function by using the `returnType` followed by the function `name` and then a pair of parentheses `()`.

```dart
int add() {

}
```

### Function Signature

The `returnType`, `name`, and `()` together are called the function signature. The `name` is what we use to call the function, and the parentheses are used to pass inputs to the function.

### Function Body

The body of the function is defined with a pair of curly brackets `{}`.

```dart
int add() {

}
```

Within the curly brackets, you can write whatever code you want to execute when this function is called.

Let's write a function that returns the sum of `1 + 1`.

```dart
int add() {
  return 1 + 1;
}
```

Within the function, we used the `return` keyword to send the value of `1 + 1` back to whoever called this function.

### Return Type

The `returnType` of the function defines the type of value that is being returned from the function. Since we are returning a number, the `returnType` should be `int`.

If the function is not returning anything, the `returnType` should be `void`.

```dart
void add() {
  print(1 + 1);
}
```

The function above doesn't return anything, but it does print `2` to the console.

## Quiz

**1. Which code snippet correctly defines a function named `calculateScore` that returns an integer?**

- A) `function calculateScore() { return 100; }`
- B) `int calculateScore[] { return 100; }`
- C) `int calculateScore() { return 100; }`
- D) `calculateScore(): int { return 100; }`

<details>
<summary>Answer</summary>

- C) `int calculateScore() { return 100; }`

</details>

**2. What does the `void` return type signify?**

- A) The function will return a `null` value.
- B) The function does not return any value.
- C) The function's body is empty.
- D) The function contains an error and is invalid.

<details>
<summary>Answer</summary>

- B) The function does not return any value.

</details>

---

[← Course overview](../../../README.md)
