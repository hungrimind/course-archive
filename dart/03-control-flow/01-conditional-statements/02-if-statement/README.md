# if statement

The simplest conditional statement in Dart is the `if` statement. It will only run the lines of code within the curly brackets `{}` if the condition within the parentheses `()` is `true`.

```dart
if (condition) {
  // run some code
}
```

The code within the curly brackets will not run if the condition is `false`. The program will skip over it and move on to the next line of code.

```dart
void main() {
  int age = 19;
  if (age > 18) {
    print('You can vote!');
  }
  print('Moving on...');
}
```

In the above example, the `if` check will pass since `age` is greater than 18, so the message `You can vote!` will be printed to the console, followed by the message `Moving on...`.

If `age` was 16, then only the message `Moving on...` would be printed because the `if` statement would not pass since `16 > 18` is `false`.

## Assignment

Use an if statement to check whether the temperature is greater than 25.

If it is, print:

```txt
It's a hot day! Drink plenty of water.
```

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/weather_advisor.dart`. Tests: `test/weather_advisor_test.dart`.

---

[← Course overview](../../../README.md)
