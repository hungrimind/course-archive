# Unit Testing Edge Cases

## Test Edge Cases

There is a very important thing to remember when writing tests. Tests are there to thoroughly test that function's functionality. It shouldn’t only test the “happy path”. Your unit tests should test the edge cases to ensure this function doesn’t break when your app doesn’t execute everything perfectly.

For example, let’s say we have a function that divides two numbers. The “happy path” test ensures the correct result when you divide normal numbers like 1/2.

```dart title="test/demo_test.dart"
test('When doing division, it should return the quotient of two numbers', () {
  final demo = Demo();

  final result = demo.divide(1, 2);

  expect(result, equals(0.5));
});
```

However, you should also consider what potential things could go wrong when using this function. When doing division, you shouldn’t be able to divide by 0. So we can write a test for this.

```dart title="test/demo_test.dart"
test('When doing division, it should throw an exception when the denominator is zero', () {
  final demo = Demo();

  expect(() => demo.divide(1, 0), throwsA(isA<ArgumentError>()));
});
```

For our demo app functionality, we want the `divide` function to throw an `ArgumentError` exception if we pass 0 to the second parameter.

## Test Driven Development (TDD)

This is a good place to mention Test Driven Development (TDD). It’s not something we use, but we want you to be aware of what it is. Some companies swear by TDD.

A note here would be that if you see an issue happen, a very potent way to address that issue is to start with the test. This is because whenever you later refactor to make an overall improvement or change, you have that test there to remind you to verify that the bug doesn't happen again.

Test-driven development can be boiled down to the following: Write the tests before the implementation.

For the `divide` example, you would write those tests before writing any implementation. Tests define what outputs you should receive, given the inputs. It’s pretty straightforward.

Once you have the tests written, given they are good tests, your goal when writing the implementation is simply to make the tests pass.

For example, dividing by 0 in Dart doesn’t throw an exception. Instead, it returns infinity. But our requirements defined by the test is that it _should_ throw an exception. To make our tests pass, our function should look like this.

```dart title="lib/demo.dart"
double divide(int a, int b) {
  if (b == 0) {
    throw ArgumentError('Division by zero');
  }
  return a / b;
}
```

## Quiz

**1. What is an edge case in testing?**

- A) A scenario that tests boundary conditions or unusual inputs
- B) The main functionality of the code
- C) The happy path scenario
- D) A type of performance test

<details>
<summary>Answer</summary>

- A) A scenario that tests boundary conditions or unusual inputs

</details>

**2. In Test Driven Development (TDD), what comes first?**

- A) The implementation code
- B) The tests
- C) The documentation
- D) The deployment

<details>
<summary>Answer</summary>

- B) The tests

</details>

**3. What would be considered an edge case in the division function example?**

- A) Dividing by zero
- B) Dividing 1 by 2
- C) Dividing positive numbers
- D) Multiplying numbers

<details>
<summary>Answer</summary>

- A) Dividing by zero

</details>

---

[← Course overview](../../../README.md)
