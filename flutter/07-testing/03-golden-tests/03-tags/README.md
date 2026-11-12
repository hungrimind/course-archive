# Tags

## Tags

A thing we recommend doing with golden tests is using the "tag" feature.

Again, if we take the previous example of our golden test, we can add a tag, which is just a simple string we recommend having as a constant.

```dart title="test/widget_test.dart"
testWidgets('Counter increments smoke test', tags: TestTags.golden, (WidgetTester tester) async {
  ...
});
```

Then, you would need to configure this in a `dart_test.yaml` file that you would put in the root of your project.

```yaml title="dart_test.yaml"
tags:
  golden:
    description: "These tests are used for golden files."
```

Now, when running tests, you can specifically target goldens

```bash
flutter test --tags golden # Run golden tests
flutter test --tags golden --update-goldens # Update golden tests without running other tests
```

## Quiz

**1. What is the main purpose of using tags in golden tests?**

- A) To make tests run faster
- B) To organize and selectively run specific types of tests
- C) To add metadata to test files
- D) To mark tests as completed

<details>
<summary>Answer</summary>

- B) To organize and selectively run specific types of tests

</details>

**2. Where should tags be configured in a Flutter project?**

- A) In pubspec.yaml
- B) In the test file
- C) In dart_test.yaml
- D) In README.md

<details>
<summary>Answer</summary>

- C) In dart_test.yaml

</details>

**3. Which command would you use to update only golden tests?**

- A) flutter test --golden
- B) flutter test --update
- C) flutter test --tags golden --update-goldens
- D) flutter golden --update

<details>
<summary>Answer</summary>

- C) flutter test --tags golden --update-goldens

</details>

---

[← Course overview](../../../README.md)
