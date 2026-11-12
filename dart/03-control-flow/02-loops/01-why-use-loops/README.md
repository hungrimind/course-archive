# Why use Loops?

Say you have a list of usernames and you want to print each one out on a different line. You could do this:

```dart
void main() {
  print('john123');
  print('bob456');
  print('jane789');
  print('katie101');
}
```

That is fine for 4 usernames, but if you have 1000 usernames, that is not practical. What if you want to print the numbers between 1 to 1000? Do you really want to do this:

```dart
void main() {
  print(1);
  print(2);
  print(3);
  print(4);
  print(5);
  // ... imagine 995 more lines
  print(1000);
}
```

What if you need to make a change to all 1000 lines? That would be a nightmare!

These examples are a bit contrived, but there are many real-life examples where you will need to repeat the same set of instructions over and over again.

What if you wanted to create a program that simulates flipping a coin 1,000,000 times to determine the probability of it landing on heads or tails? 

That is why we use loops! Loops allow us to repeat the same set of instructions over and over again, without us having to copy and paste the code a bunch of times.

## Quiz

**1. What is the primary purpose of a loop in programming?**

- A) To make a decision based on a condition, like an `if` statement.
- B) To store a collection of values, like a list of usernames.
- C) To execute the same block of code repeatedly.
- D) To stop the program from running.

<details>
<summary>Answer</summary>

- C) To execute the same block of code repeatedly.

The correct answer is C. Loops are a fundamental control flow structure designed to repeat a set of instructions, which saves you from having to write the same code over and over again.

</details>

**2. Imagine you are writing a program to process a list of 500 user profiles. For each profile, you need to check if the user is active and then print their username. Which programming concept is best suited for this repetitive task?**

- A) An `if-else` statement.
- B) A `String` variable.
- C) A loop.
- D) A `const` variable.

<details>
<summary>Answer</summary>

- C) A loop.

The correct answer is C. The task involves repeating the same action (checking status and printing a username) for 500 different profiles. A loop is the perfect tool to handle this kind of repetition efficiently.

</details>

**3. What is the main advantage of using a loop to perform a task 1,000 times versus copying and pasting the code 1,000 times?**

- A) The program will always run faster with a loop.
- B) The code is much shorter, cleaner, and easier to modify.
- C) It's the only way to make a program repeat a task.
- D) Using a loop allows you to use the `print()` function.

<details>
<summary>Answer</summary>

- B) The code is much shorter, cleaner, and easier to modify.

The correct answer is B. As shown in the lesson, writing 1,000 lines of code is impractical. If you needed to change the repeated action, you'd have to edit all 1,000 lines. With a loop, you only have to edit the code in one place, making your program far more manageable.

</details>

---

[← Course overview](../../../README.md)
