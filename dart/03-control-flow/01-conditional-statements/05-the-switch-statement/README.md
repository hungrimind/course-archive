# The switch Statement

There are many cases where `if` and `else` statements make your code unreadable and hard to maintain. A great example is when you have to check for the value of a single variable against multiple values. This is where `switch` statements come in handy.

A `switch` statement is used to compare the value of a variable against multiple values and execute a block of code depending on the value.

Let's look at an example where we use `if` and `else` statements to check if a variable is one of the primary colors.

```dart
void main() {
  var color = "yellow";

  if (color == "red") {
    print("Primary color");
  } else if (color == "blue") {
    print("Primary color");
  } else if (color == "yellow") {
    print("Primary color");
  } else {
    print("Not a primary color");
  }
}
```

This code would work, but it is not very readable. We have a lot of repetition, and there is no clear logic. It would be even worse if we had more conditions.

This is where we can use the `switch` statement.

```dart
void main() {
  var color = "yellow";

  switch (color) {
    case "red":
      print("Primary color");
      break;
    case "blue":
      print("Primary color");
      break;
    case "yellow":
      print("Primary color");
      break;
    default:
      print("Not a primary color");
  }
}
```

The code is much more readable and easier to maintain. We check if the `color` variable is `red`, `blue`, or `yellow` and print "Primary color" if it is. If it is none of the above, we print "Not a primary color".

It has more lines of code, but it also makes it much easier to read, and makes your code faster (although not by much).

## The break Statement

You might have noticed the `break` statement at the end of every case. The break statement is used to break out of the `switch` statement. If the `break` statement is not present, the code will continue executing the next case, which is not what we want.

For example, if the value of the `color` variable was `"red"` and we did not have the `break` statement, it would print `"Primary color"` three times because all three cases would be executed.

The `break` makes us exit the switch case.

## The default Case

The `default` case is used as a fallback if none of the cases match. It is similar to the `else` statement.

## Multiple Values

We use the `break` statement to exit the switch-case, but that also means we can not use it to stay within the switch-case when we want. 

The code below utilizes that to make the code even more readable. If the color is red, blue, or yellow, this will print "Primary Color" once, and then finally `break`.

```dart
void main() {
  var color = "yellow";

  switch (color) {
    case "red":
    case "blue":
    case "yellow":
      print("Primary color");
      break;
    default:
      print("Not a primary color");
  }
}
```

This makes the code much more readable and easier to maintain.

## Supported Types

The `switch` statement supports `int`, `String`, `enum`, and `bool` types. We will cover `enum` types in a future lesson.

## Assignment

Create a `switch` statement that evaluates the `dayOfWeek` variable to determine if it's a weekday or weekend.

1. Add a `switch` statement that evaluates `dayOfWeek`.

2. Group the weekday cases (`'Monday'`, `'Tuesday'`, `'Wednesday'`, `'Thursday'`, `'Friday'`) together so they all execute the same code block that prints `It's a weekday.` followed by a `break` statement.

3. Group the weekend cases (`'Saturday'`, `'Sunday'`) together so they both execute the same code block that prints `It's the weekend!` followed by a `break` statement.

4. Add a `default` case that prints `Invalid day.` to handle any other values.

**Hint**: You can group multiple cases together by listing them one after another before the code block. For example:

```dart
case 'Monday':
case 'Tuesday':
  print('Weekday');
  break;
```

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/day_of_week_switch.dart`. Tests: `test/day_of_week_switch_test.dart`.

---

[← Course overview](../../../README.md)
