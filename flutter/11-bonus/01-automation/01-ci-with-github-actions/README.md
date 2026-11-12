# CI with GitHub Actions

Let's go through how to add Continuous Integration (CI) to your Flutter project using GitHub Actions. CI helps ensure your code maintains quality standards by automatically running tests and checking whenever changes occur.

## Understanding the Workflow

The CI pipeline we'll create does three main things:

1. **Lint and Format Check**: Ensures code follows style guidelines and catches potential issues
2. **Unit and Widget Tests**: Runs your app's tests (excluding golden tests)
3. **Golden Tests**: Runs visual regression tests separately

## Workflow Configuration

The workflow runs in these situations:

- On every push to the main branch
- On pull requests to main
- Manually through the GitHub GUI

Let's break down each part of the configuration:

## Basic Setup

```yaml
name: CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  workflow_dispatch:

env:
  FLUTTER_VERSION: "3.27.3"
```

This defines when the workflow runs and sets up the Flutter version as an environment variable.

## Lint and Format Job

```yaml
jobs:
  lint:
    name: Lint and Format Check
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: subosito/flutter-action@v2
        with:
          channel: "stable"
          flutter-version: ${{ env.FLUTTER_VERSION }}

      - run: flutter pub get
      - run: dart analyze . --fatal-infos
      - run: dart format $(find lib -name "*.dart" -not \( -name "*.*freezed.dart" -o -name "*.*g.dart" \) ) --set-exit-if-changed
```

This job:

1. Checks out your code
2. Sets up Flutter
3. Gets dependencies
4. Runs the analyzer
5. Checks code formatting (excluding generated files)

## Test Jobs

```yaml
unit_and_widget_tests:
  needs: lint
  name: Unit and Widget tests
  runs-on: ubuntu-latest

  steps:
    - uses: actions/checkout@v4

    - uses: subosito/flutter-action@v2
      with:
        channel: "stable"
        flutter-version: ${{ env.FLUTTER_VERSION }}

    - name: Run tests
      run: flutter test --exclude-tags=golden

    # - name: Install coverage package
    #   run: flutter pub global activate coverage

    # - name: Run tests with coverage
    #   run: flutter test --coverage --exclude-tags=golden

    # - name: Upload coverage reports to Codecov
    #   uses: codecov/codecov-action@v3
    #   env:
    #     CODECOV_TOKEN: ${{ secrets.CODECOV_TOKEN }}
    #   with:
    #     file: coverage/lcov.info
    #     fail_ci_if_error: false
```

This job runs all tests except golden tests. We've commented out code coverage reporting, but you can uncomment it if you want to track coverage with Codecov.

## Golden Tests

```yaml
golden_tests:
  needs: lint
  name: Golden tests
  runs-on: ubuntu-latest

  steps:
    - uses: actions/checkout@v4

    - uses: subosito/flutter-action@v2
      with:
        channel: "stable"
        flutter-version: ${{ env.FLUTTER_VERSION }}

    - name: Run golden tests
      run: flutter test --tags=golden

    - name: Upload failure artifacts
      if: failure()
      uses: actions/upload-artifact@v3
      with:
        name: golden-failure-artifacts
        path: |
          test/failures/
          test/goldens/
```

This job specifically handles golden tests and uploads any failure artifacts for debugging.

## Setting Up CI in Your Project

1. Inside your project, create a folder called `.github/workflows` and create a file called `ci.yaml`.
2. Copy the complete code below and paste it into the `ci.yaml` file.
3. Commit and push the changes to your repository.

> Note: The workflow will run on every push to main and pull request to main. It also allows you to manually run it through the GitHub Interface.

Here's the complete workflow file:

```yaml
name: CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  workflow_dispatch:

env:
  FLUTTER_VERSION: "3.29.0"

jobs:
  lint:
    name: Lint and Format Check
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: subosito/flutter-action@v2
        with:
          channel: "stable"
          flutter-version: ${{ env.FLUTTER_VERSION }}

      - run: flutter pub get
      - run: dart analyze . --fatal-infos
      - run: dart format $(find lib -name "*.dart" -not \( -name "*.*freezed.dart" -o -name "*.*g.dart" \) ) --set-exit-if-changed

  unit_and_widget_tests:
    needs: lint
    name: Unit and Widget tests
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: subosito/flutter-action@v2
        with:
          channel: "stable"
          flutter-version: ${{ env.FLUTTER_VERSION }}

      - name: Run tests
        run: flutter test --exclude-tags=golden

      # - name: Install coverage package
      #   run: flutter pub global activate coverage

      # - name: Run tests with coverage
      #   run: flutter test --coverage --exclude-tags=golden

      # - name: Upload coverage reports to Codecov
      #   uses: codecov/codecov-action@v3
      #   env:
      #     CODECOV_TOKEN: ${{ secrets.CODECOV_TOKEN }}
      #   with:
      #     file: coverage/lcov.info
      #     fail_ci_if_error: false

  golden_tests:
    needs: lint
    name: Golden tests
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: subosito/flutter-action@v2
        with:
          channel: "stable"
          flutter-version: ${{ env.FLUTTER_VERSION }}

      - name: Run golden tests
        run: flutter test --tags=golden

      - name: Upload failure artifacts
        if: failure()
        uses: actions/upload-artifact@v3
        with:
          name: golden-failure-artifacts
          path: |
            test/failures/
            test/goldens/
```

Once set up, GitHub will automatically run these checks whenever you push code or create pull requests, helping maintain code quality across your project.

## Quiz

**1. Which of these are included in our CI pipeline?**

- A) Lint checks, unit tests, and golden tests
- B) Only unit tests
- C) Only deployment steps
- D) Database migrations

<details>
<summary>Answer</summary>

- A) Lint checks, unit tests, and golden tests

</details>

**2. Why do we separate golden tests from other tests in the CI pipeline?**

- A) Because they're not important
- B) As sometimes golden test can require special handling per platform
- C) Because they only run on production
- D) To save money on CI costs

<details>
<summary>Answer</summary>

- B) As sometimes golden test can require special handling per platform

</details>

---

[← Course overview](../../../README.md)
