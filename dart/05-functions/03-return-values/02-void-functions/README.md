# Void Functions

Sometimes, we don’t need a function to return anything. For example, if we are just printing something to the console, there is no data that we want to return to the caller.

But the function must return something. For these types of functions, we return a special type called `void`. Here is how we can define a function that returns void.

```dart
void printResult() {
  print('Nothing to return');
}
```

We can also explicitly add a `return` statement in a `void` function, but it shouldn't have any value following it. This is generally used to stop the execution of the function at a certain point.

```dart
void printResult() {
  print('Nothing to return');
  return;
}
```

## Quiz

**1. When is it most appropriate to declare a function with a `void` return type?**

- A) When the function needs to return a `null` value.
- B) When the function performs an action but does not need to return any data.
- C) When the function has no parameters.
- D) When the function needs to return an empty string (`""`).

<details>
<summary>Answer</summary>

- B) When the function performs an action but does not need to return any data.

</details>

**2. Consider the following Dart code. What will be printed to the console when this code is executed?


```dart
void showMessage() {
  print('Step 1');
  return;
  print('Step 2');
}

void main() {
  showMessage();
}
```**

- A) `Step 1`
- B) `Step 2`
- C) `Step 1` followed by `Step 2`
- D) The code will produce an error.

<details>
<summary>Answer</summary>

- A) `Step 1`

</details>

**3. Which of the following function definitions is a valid `void` function in Dart?**

- A) `void calculate() { return 0; }`
- B) `function calculate() { print('done'); }`
- C) `void calculate() { print('done'); }`
- D) `void calculate() => 'done';`

<details>
<summary>Answer</summary>

- C) `void calculate() { print('done'); }`

</details>

---

[← Course overview](../../../README.md)
