# Based on OS

## Based on OS

One key thing to remember when running golden tests is that the generated images depend on the platform.

If your golden images are generated on a Windows machine, and you run the golden tests on MacOS, there will be slight differences, and the test will fail. It checks that every single pixel is the same.

There are two solutions for this.

1. Always run the golden file tests on the same OS
2. Override the `matchesGoldenFile` function to allow some tolerance.

```dart
class GoldenDiffComparator extends LocalFileComparator {
  GoldenDiffComparator(
    String testFile, {
    required this.tolerancePercentage,
  }) : super(Uri.parse(testFile));

  /// Customise your threshold here in percentage
  /// Golden tests will pass if the pixel difference is equal to or below
  /// [tolerancePercentage]%
  final double tolerancePercentage;
  double get _kGoldenDiffTolerance => tolerancePercentage / 100;

  @override
  Future<bool> compare(Uint8List imageBytes, Uri golden) async {
    final ComparisonResult result = await GoldenFileComparator.compareLists(
      imageBytes,
      await getGoldenBytes(golden),
    );

    if (!result.passed && result.diffPercent > _kGoldenDiffTolerance) {
      final String error = await generateFailureOutput(result, golden, basedir);
      throw FlutterError(error);
    }
    if (!result.passed) {
      debugPrint(
        'A difference of ${result.diffPercent * 100}% was found when comparing $golden.',
      );
    }
    return result.passed ||
        (result.diffPercent <= _kGoldenDiffTolerance && Platform.isLinux);
  }
}
```

Then, having a test helper method, something like this reduces the overall boilerplate you will have to write.

```dart
Future<void> expectGoldenMatches(
  Finder actual,
  String goldenFileKey, {
  String? reason,
  double? tolerancePercentage,
}) {
  final goldenPath = 'goldens/$goldenFileKey';
  goldenFileComparator = GoldenDiffComparator(
    '${(goldenFileComparator as LocalFileComparator).basedir}/$goldenFileKey',
    tolerancePercentage: tolerancePercentage ?? 0.5,
  );

  return expectLater(
    actual,
    matchesGoldenFile(goldenPath),
    reason: reason,
  );
}
```

The test we had previously could look something like this, where we now don’t need to define the “goldens” folder and have a tolerance of 0.8%.

```dart title="test/widget_test.dart"
testWidgets('Counter increments smoke test', (WidgetTester tester) async {
  // Build our app and trigger a frame.
  await tester.pumpWidget(const MyApp());

  // Verify that our counter starts at 0.
  expect(find.text('0'), findsOneWidget);
  expect(find.text('1'), findsNothing);

  // Tap the '+' icon and trigger a frame.
  await tester.tap(find.byIcon(Icons.add));
  await tester.pump();

  // Verify that our counter has incremented.
  expect(find.text('0'), findsNothing);
  expect(find.text('1'), findsOneWidget);

  await expectGoldenMatches(find.byType(MyApp), 'my_app.png'), tolerancePercentage: 0.8);
});
```

## Quiz

**1. What is the main challenge with golden tests across different operating systems?**

- A) Tests run slower on different operating systems
- B) Golden files are not compatible across operating systems
- C) Different operating systems render UI elements slightly differently
- D) Golden tests only work on one operating system

<details>
<summary>Answer</summary>

- C) Different operating systems render UI elements slightly differently

</details>

**2. What does tolerancePercentage represent in GoldenDiffComparator?**

- A) The maximum allowed time for the test to run
- B) The percentage of pixels that can be different between images
- C) The image compression rate
- D) The minimum required test coverage

<details>
<summary>Answer</summary>

- B) The percentage of pixels that can be different between images

</details>

**3. What's the best practice for handling cross-platform golden tests?**

- A) Disable golden tests on certain platforms
- B) Run tests only on Windows
- C) Either run tests on the same OS or use tolerance settings
- D) Ignore platform differences

<details>
<summary>Answer</summary>

- C) Either run tests on the same OS or use tolerance settings

</details>

---

[← Course overview](../../../README.md)
