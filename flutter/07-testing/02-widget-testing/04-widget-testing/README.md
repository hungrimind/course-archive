# Widget Testing

Widget testing focuses on testing the UI components and their interactions. Unlike unit tests that verify logic, widget tests ensure your UI behaves correctly when users interact with it.

## Find, Interact, Verify

Widget testing follows a pattern similar to how users interact with your app:

- Find - Locate the widget you want to interact with
- Interact - Perform actions like tap, enter text, or scroll
- Verify - Check that the UI updated correctly

```dart title="test/calculator_widget_test.dart"
void main() {
  testWidgets('Calculator adds two numbers correctly', (WidgetTester tester) async {
    // Find - Build the widget
    await tester.pumpWidget(const MaterialApp(home: CalculatorPage()));

    // Find - Locate input fields and button
    final firstNumber = find.byKey(const Key('first_number'));
    final secondNumber = find.byKey(const Key('second_number'));
    final addButton = find.byKey(const Key('add_button'));

    // Interact - Enter numbers and tap add
    await tester.enterText(firstNumber, '5');
    await tester.enterText(secondNumber, '3');
    await tester.tap(addButton);
    await tester.pump();

    // Verify - Check result
    expect(find.text('8'), findsOneWidget);
  });
}
```

Common widget testing functions:

- `tester.pumpWidget()` - Builds and renders the widget
- `find.byKey()` - Finds widget by its key
- `find.text()` - Finds widget containing text
- `tester.enterText()` - Types text into a text field
- `tester.tap()` - Taps a widget
- `tester.pump()` - Rebuilds widget after state changes

## Assignment

For some reason the addition and multiplication tests are failing. Look through the `calculator_page.dart` and see if you can make the tests pass again.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/calculator_page.dart`.

---

[← Course overview](../../../README.md)
