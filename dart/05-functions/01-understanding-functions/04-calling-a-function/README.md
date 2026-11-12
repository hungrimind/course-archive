# Calling a Function

Now that you have created a function, you can use that function by _calling_ it. You can call a function by writing the function's name followed by two parenthesis. This is the same way that you call the `print()` function. Here is an example of calling the function that we defined above.

```dart
void main() {
  add();
}

int add() {
  return 1 + 1;
}
```

If we run the code above, nothing will actually happen. This is because we are not doing anything with the value that is returned from the `add` function. 

To do something, we can either print it out to the console or assign it to a variable.

```dart
void main() {
  print(add());
  int sum = add();
  print(sum);
}

int add() {
  return 1 + 1;
}
```

One thing to note is that the order of the functions does not matter. You can define a function before or after the `main` function, and it will still work the same.

## Assignment

You're building a weather application that uses two provided functions to create a personalized weather report.

1. Call the `getCityName()` function and store its return value in a variable.
2. Call the `getTemperature()` function and store its return value in another variable.
3. Create a weather report sentence using string interpolation that combines the city name and temperature in the format: "The temperature in [city] is [temperature] degrees."
4. Print the weather report to the console.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/weather_report.dart`. Tests: `test/weather_report_test.dart`.

---

[← Course overview](../../../README.md)
