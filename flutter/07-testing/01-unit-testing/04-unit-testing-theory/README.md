# Unit Testing Theory

Unit testing should be testing one “unit” of code. The standard approach is to test a single function for each unit test. In theory, each function should cover one piece of functionality within your code, and by running a unit test, we can ensure that functionality works correctly.

## Arrange, Act, Assert

A unit test has 3 parts that need to be covered. There is even an acronym to remember: AAA.

- Arrange - Instantiate all the classes you need, create all the mocks, and set everything up for the action that needs to be tested.
- Act - Do the actions that are being tested.
- Assert - Check that the outcomes of those actions are what you expect them to be.

```dart title="test/demo_test.dart"
void main() {
  test('When adding two numbers, it should return the sum of two numbers', () {
   // Arrange
    final demo = Demo();

    // Act
    final result = demo.add(1, 2);

    // Assert
    expect(result, equals(3));
  });
}
```

In the Assert step, you call a function called `expect` to verify that the result you received matches your “matcher”. In this case, our matcher says we want our result to equal a specific integer. Some other commonly used matchers are:

- `isA<Type>()` - This checks whether the result is of the type that you are expecting
- `isEmpty`/`isNotEmpty` - For collections of data.
- `contains(value)` - Checks if a string or a collection contains a specific value.
- `throwsException` - If an exception was thrown.

## Assignment

Fix the calculator so that all our tests pass.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/calculator.dart`.

---

[← Course overview](../../../README.md)
