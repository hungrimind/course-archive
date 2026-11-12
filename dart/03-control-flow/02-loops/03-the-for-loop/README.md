# The for Loop

In the previous lesson, we covered the while loop, but if you want a loop to run a set number of times, it is awkward to do it using a while loop.

```dart
int i = 0;
while (i < 5) {
  print(i);
  i++;
}
```

This will print out the numbers 0 to 4, but you have to declare a variable outside the while loop and then increase it within the loop. The initialization, checking, and incrementing are done in 3 different places. 

Instead, you can use a `for` loop. 

```dart
for (int i = 0; i < 5; i++) {
  print(i);
}
```

The for loop code is a lot more concise than the while loop code. There are 3 things inside the parentheses of a for loop

1. Variable Initialization - This is where you declare a variable that will keep track of how many times the loop has run.
2. Condition - This is a condition that must be true for the loop to run. As soon as it is false, the loop will stop running.
3. Afterthought - This is what happens after every iteration of the loop.

So, when a for loop runs, it first declares the variable, then checks the condition, and if the condition is true, it executes the code inside the for loop. After executing the code, it runs the afterthought, which is usually incrementing the variable, and then checks the condition again. This cycle continues until the condition becomes false.

### Loop Variable

In the for loop, we created a variable called `i`. This variable is only accessible inside the for loop. This variable is called the loop variable, and you can name it whatever you want, but `i` is the most common name for a loop variable. The reason for this is that a lot of times, you will want to use the loop variable as an index for a list, which we will cover in a future lesson.

The for loop is the most common loop in programming, because it is less likely to end up in an infinite loop.

## Assignment

Replace the TODO comment with a `for` loop that iterates from 1 to 10. Inside the loop, calculate the product of `number` and the loop variable, then print each line in the format: `number x loopVariable = product`.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/multiplication_table.dart`. Tests: `test/multiplication_table_test.dart`.

---

[← Course overview](../../../README.md)
