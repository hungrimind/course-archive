# Integration Testing Theory

## What are Integration Tests?

Integration tests are similar to widget tests in syntax but with one key difference: they run on actual devices or emulators and can access external services like HTTP calls.

## When to Use Integration Tests?

Integration tests are particularly valuable for:

- Testing app startup and initialization
- Testing real device features (camera, sensors, etc.)
- Verifying network interactions
- Performance testing on real devices

## Setup Requirements

To get started with integration testing, you need:

1. Add the dependencies to `pubspec.yaml`:

```yaml title="pubspec.yaml"
dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^4.0.0
  integration_test:
    sdk: flutter
```

2. Create an `integration_test/` folder in your project root
3. Initialize the integration test binding in your test file

## Example Integration Test

Here's a simple counter app integration test:

```dart title="integration_test/counter_test.dart"
void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  group('end-to-end test', () {
    testWidgets('tap on the floating action button, verify counter',
        (tester) async {
      // Load app widget
      await tester.pumpWidget(const MyApp());

      // Verify the counter starts at 0
      expect(find.text('0'), findsOneWidget);

      // Finds the floating action button to tap on
      final fab = find.byType(FloatingActionButton);

      // Emulate a tap on the floating action button
      await tester.tap(fab);

      // Trigger a frame
      await tester.pump();

      // Verify the counter increments by 1
      expect(find.text('1'), findsOneWidget);
    });
  });
}
```

## Best Practices

1. **Test Complete Flows**: Test entire user journeys rather than individual screens

```dart
testWidgets('complete login flow', (tester) async {
  await tester.pumpWidget(const MyApp());

  // Enter credentials
  await tester.enterText(find.byKey(Key('email')), 'test@example.com');
  await tester.enterText(find.byKey(Key('password')), 'password123');

  // Submit form
  await tester.tap(find.byType(ElevatedButton));
  await tester.pumpAndSettle();

  // Verify navigation to home screen
  expect(find.text('Welcome'), findsOneWidget);
});
```

When you run integration tests, you'll see the app launch on your device/emulator and the test performing the actions in real-time.

## Quiz

**1. What is the key difference between widget tests and integration tests?**

- A) Integration tests are faster
- B) Integration tests run on actual devices and can access external services
- C) Integration tests don't require any setup
- D) Widget tests can't test UI

<details>
<summary>Answer</summary>

- B) Integration tests run on actual devices and can access external services

</details>

**2. What package is required for integration testing?**

- A) test
- B) flutter_test
- C) integration_test
- D) widget_test

<details>
<summary>Answer</summary>

- C) integration_test

</details>

**3. Where should integration test files be located?**

- A) test/ directory
- B) lib/ directory
- C) integration_test/ directory
- D) test/integration/ directory

<details>
<summary>Answer</summary>

- C) integration_test/ directory

</details>

---

[← Course overview](../../../README.md)
