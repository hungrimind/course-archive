# Understanding pubspec.yaml

In the last lesson, we skipped the `pubspec.yaml` file. Let's go over it now.

The `pubspec.yaml` file is the central configuration hub for your Flutter project. It contains:

1. App metadata (name, description, version)
2. Dependencies and dev dependencies
3. Asset declarations (images, fonts)
4. SDK version and environment constraints

This file streamlines dependency management, asset bundling, and project configuration, ensuring your app remains organized, maintainable, and scalable as it grows.

### Example of a pubspec.yaml File

Here’s an example of what a typical `pubspec.yaml` file might look like:

```yaml
name: best_flutter_course
description: The best Flutter course on the internet.
version: 1.0.0+1

environment:
  sdk: ">=2.12.0 <3.0.0"

dependencies:
  flutter:
    sdk: flutter
  chucknorris: ^1.0.0

dev_dependencies:
  flutter_test:
    sdk: flutter

flutter:
  assets:
    - assets/images/
    - assets/icons/
```

We will go over each section in detail in the next lessons.

## Quiz

**1. Which of these is not something configured in the pubspec.yaml?**

- A) App metadata
- B) Dependencies and Assets
- C) SDK version
- D) Environment variables

<details>
<summary>Answer</summary>

- D) Environment variables

</details>

---

[← Course overview](../../../README.md)
