# Grouping and Setup/Teardown

We don’t use any strict rules for grouping your tests. If you have something that works for you, keep doing it. We use what logically makes sense for this. If a group of tests makes sense to be grouped, then we do so.

> **Note:** Some companies have a rule to put all tests within a group so that they can run a script during CI to group all the tests into a single file to run them faster. A good rule of thumb is to always have a group for a file.

To group tests, you put the tests within a group function.

```dart
  group(Demo, () {
    test('Test 1', () {
    });

    test('Test 2', () {
    });
  }
```

There is a case where grouping always makes sense when you need a similar setup for multiple tests.

## Setup

The `test` and the `flutter_test` frameworks give you access to a `setUp` function. This will allow you to run code before each test.

```dart
void main() {
  late Car car;

  setUp(() {
    // This runs before each test
    car = Car(fuel: 50);
  });

  test('should start with 50 fuel', () {
    expect(car.fuel, 50);
  });

  test('can drive and consume fuel', () {
    car.drive();
    expect(car.fuel, 45);
  });
}
```

There's also `setUpAll` which runs only once before all tests in a group or file:

```dart
void main() {
  late Car car;

  setUpAll(() {
    // Runs once before all tests
    car = Car(fuel: 100);
  });

  test('has correct initial fuel', () {
    expect(car.fuel, 100);
  });

  test('can check engine status', () {
    expect(car.isEngineRunning, false);
  });
}
```

## Teardown

The `tearDown` function is like the `setUp` function, except it runs **after** every test instead of before.

```dart
void main() {
  late Car car;

  setUp(() {
    car = Car(fuel: 50);
  });

  tearDown(() {
    // Reset car state after each test
    car.stopEngine();
  });

  test('can start engine', () {
    car.startEngine();
    expect(car.isEngineRunning, true);
  });
}
```

Similar to `setUpAll`, there's `tearDownAll` which runs once after all tests are complete:

```dart
void main() {
  late Car car;

  setUpAll(() {
    car = Car(fuel: 50);
  });

  tearDownAll(() {
    // Final cleanup after all tests
    car.stopEngine();
  });

  test('can start engine', () {
    car.startEngine();
    expect(car.isEngineRunning, true);
  });
}
```

## Quiz

**1. When does setUp() run in relation to tests?**

- A) Before each test
- B) After each test
- C) Only once before all tests
- D) Only when explicitly called

<details>
<summary>Answer</summary>

- A) Before each test

</details>

**2. What is the main purpose of grouping tests?**

- A) To make the code look organized
- B) To share common setup and teardown code between related tests
- C) To run tests faster
- D) To separate test files

<details>
<summary>Answer</summary>

- B) To share common setup and teardown code between related tests

</details>

**3. What's the difference between setUpAll and setUp?**

- A) setUp runs before each test, setUpAll runs once before all tests
- B) setUp runs after each test, setUpAll runs before each test
- C) They are the same thing
- D) setUpAll is for groups, setUp is for individual tests

<details>
<summary>Answer</summary>

- A) setUp runs before each test, setUpAll runs once before all tests

</details>

---

[← Course overview](../../../README.md)
