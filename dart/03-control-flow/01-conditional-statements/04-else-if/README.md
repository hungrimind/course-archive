# else if

The `if` and `else` statements are great if we only have two possible conditions. However, if we want to check more than two conditions, we can use the `else if` statement.

```dart
void main() {
  bool isSunny = true;
  bool isRaining = false;

  if (isSunny) {
    print('Wear sunglasses');
  } else if (isRaining) {
    print('Take an umbrella');
  } else {
    print('Check the weather app');
  }
}
```

The `else if` statement allows you to check for another condition before the final `else` condition. You can add as many `else if` statements as you want.

The order matters for the `else if` statements. It will stop checking the statements as soon as it finds one to be `true`. In this example, since the `isSunny` variable is set to `true`, it won't check any `else if` or `else` statements. If `isSunny` was `false`, it would check the `else if` statement.

## Assignment

Complete the grade calculator program by implementing the following steps:

1. Convert the input string to a number using `int.parse()` and store it in a variable named `score`.

2. Create an `if`/`else if`/`else` chain to determine the letter grade based on the score:
   - If the score is 90 or higher, assign the grade `'A'`
   - Otherwise, if the score is 80 or higher, assign the grade `'B'`
   - Otherwise, if the score is 70 or higher, assign the grade `'C'`
   - Otherwise, if the score is 60 or higher, assign the grade `'D'`
   - Otherwise, assign the grade `'F'`

3. Print the letter grade to the console.

Make sure to check the conditions in the correct order (highest to lowest) so that each score falls into the appropriate grade range.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/grade_calculator.dart`. Tests: `test/grade_calculator_test.dart`.

---

[← Course overview](../../../README.md)
