# The while Loop

The first loop we will discuss is the while loop. The while loop is a type of loop that repeatedly executes a block of code as long as a specified condition is true. The syntax is as follows.

```dart
while (condition) {
  // Code to be executed as long as the condition is true
}
```

The while loop starts by evaluating the condition. If the condition is true, the code block inside the loop is executed. After the code block has been executed, the condition is evaluated again. This process continues until the condition becomes false.

In the following code, we have a while loop that prints the value of `i` while it is less than 5. After every iteration, we increment the value of `i` by 1. This loop will run 5 times, from 0 to 4.

```dart
int i = 0;
while (i < 5) {
  print(i);
  i++;
}
```


## While Loops Must End

It is important to note that all loops must eventually end. Otherwise, your program will become stuck in an infinite loop and never be able to complete.

In the above code, if we forgot to increment the value of `i`, the loop would never end. The value of `i` would always be 0, so the loop would run forever.

```dart
int i = 0;
while (i < 5) {
  print(i);
}
```

This is called an infinite loop. When you run the program, it will get stuck and never finish running. 

> There are some cases when you want to run an infinite loop, the most common example is an operating system. 

## Break Statement

Normally, you would want to use a while loop with a condition that eventually becomes false, but you can run a while loop with a condition that will never be false. This will create an infinite loop that will run forever.

```dart
while (true) {
  // Code to be executed forever
}
```

This allows us to use the `break` statement to exit the loop whenever we want. The `break` statement allows you to immediately break out of a loop and continue with the rest of your code. The break statement can also be used in other types of loops.

```dart
int i = 0;
while (true) {
  print(i);
  i++;
  if (i > 10) {
    break;
  }
}
```

The above code will print the numbers from 0 to 10 and then break out of the loop.

## Assignment

Wrap the existing code in a `while` loop so that the game continues asking for guesses until the user guesses correctly.

1. Add a `while (true)` loop around all the guessing code (from the `print` statement to the end of the `if-else` block).

2. Add a `break` statement after the line that prints `"You got it!"` to exit the loop when the guess is correct.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/guessing_game.dart`. Tests: `test/guessing_game_test.dart`.

---

[← Course overview](../../../README.md)
