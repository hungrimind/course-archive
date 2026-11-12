# Parameters vs Arguments

When we define the function below, we are using two variables named `a` and `b` inside the parentheses. These variables are called **parameters**. These are the variables that will be used inside the function and are defined at the time of function declaration.

```dart
int add(int a, int b) {
  return a + b;
}
```

When calling the function, we pass in the values 2 and 3. These are called **arguments**. These are the actual values that will be passed into the function and used in place of the parameters. These values are passed in when the function is called.

```dart
add(2, 3);
```

You will see the terms **parameters** and **arguments** used interchangeably in the real world, but they are different things.

## Quiz

**1. Consider the following Dart function:


```dart
void printMessage(String message) {
  print(message);
}

printMessage('Hello, Dart!');
```

In the code above, what is the **parameter**?**

- A) printMessage
- B) 'Hello, Dart!'
- C) message
- D) void

<details>
<summary>Answer</summary>

- C) message

The correct answer is `message`. A **parameter** is the variable name (`message`) declared inside the parentheses of the function definition. It acts as a placeholder for the value that will be passed in.

</details>

**2. Consider the following Dart function call:


```dart
int subtract(int a, int b) {
  return a - b;
}

int difference = subtract(10, 4);
```

In the code above, what is the **argument**?**

- A) a
- B) 10
- C) difference
- D) int

<details>
<summary>Answer</summary>

- B) 10

The correct answer is `10`. An **argument** is the actual value (`10` or `4`) that is passed to the function when it is called. It provides the value for the corresponding parameter.

</details>

**3. Which statement best describes the difference between parameters and arguments?**

- A) Parameters and arguments are two different names for the exact same thing.
- B) A parameter is the value you pass to a function; an argument is the variable that receives the value.
- C) A parameter is the variable in the function definition; an argument is the actual value passed during the function call.
- D) Arguments are used when a function returns a value, and parameters are used when it does not.

<details>
<summary>Answer</summary>

- C) A parameter is the variable in the function definition; an argument is the actual value passed during the function call.

The correct answer is the third option. **Parameters** are the variables you define when you create a function. **Arguments** are the concrete values you provide for those parameters when you call the function.

</details>

---

[← Course overview](../../../README.md)
