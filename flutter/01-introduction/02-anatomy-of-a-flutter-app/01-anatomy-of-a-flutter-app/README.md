# Anatomy of a Flutter App

When you create a new Flutter application, you will see many files and folders. Let's walk through all of them to help you get familiar with Flutter.

You will spend 99% of your time within the `lib` folder. This is the primary directory in a Flutter project where all the Dart source code is stored. It contains the `main.dart` file, which serves as the entry point of the application, initiating its execution. You'll write most of your app's logic, user interface, and functionality in this folder.

## lib Folder

```bash {5-6}
📁.dart_tool/
📁android/
📁build/
📁ios/
📁lib/
  └── main.dart
📁linux/
📁macos/
📁web/
📁windows/
.metadata
analysis_options.yaml
pubspec.lock
pubspec.yaml
README.md
```

### main.dart

Every Flutter app starts with the `main.dart` file, located in the `lib` folder. This file contains the **entry point** of the app, which is the `main()` function. The `main()` function calls `runApp()`, a Flutter function that takes a widget as an argument. The widget passed to `runApp()` becomes the root of your app, and everything else builds on top of it.

## Platform Folders

```bash {2,4,7-10}
📁.dart_tool/
📁android/
📁build/
📁ios/
📁lib/
  └── main.dart
📁linux/
📁macos/
📁web/
📁windows/
.metadata
analysis_options.yaml
pubspec.lock
pubspec.yaml
README.md
```

Most other folders are named according to the platform they will run on (e.g., iOS, Android, Linux, Web, etc.).

This is where the platform-specific code lives. Depending on the application you are building, sometimes you might have to add code in here to enable device-specific permissions or if you’re writing platform-specific code.

## pubspec.yaml File

This will be covered in detail in the next lesson.

```bash {14}
📁.dart_tool/
📁android/
📁build/
📁ios/
📁lib/
  └── main.dart
📁linux/
📁macos/
📁web/
📁windows/
.metadata
analysis_options.yaml
pubspec.lock
pubspec.yaml
README.md
```

## Other Files

```bash {1,3,11-13}
📁.dart_tool/
📁android/
📁build/
📁ios/
📁lib/
  └── main.dart
📁linux/
📁macos/
📁web/
📁windows/
.metadata
analysis_options.yaml
pubspec.lock
pubspec.yaml
README.md
```

The rest of the folders and files you shouldn’t ever need to modify, but let’s run through them anyway:

- **build:** is where files are generated when you run your application.
- **.dart_tool:** is a directory used by the tools that help your application run.
- **.metadata:** is a generated file containing information about your project.
- **pubspec.lock:** This file is generated from the `pubspec.yaml`, retrieves the specific version of the package, and “locks” (or saves) it.
- **analysis_options.yaml:** configures the static analysis on your projects. These are the squiggly lines that show when you mistype something. You can modify this to ensure specific coding standards.

## Quiz

**1. What is the entry point of a Flutter application?**

- A) main.dart
- B) pubspec.yaml
- C) main.js
- D) entryfile.dart

<details>
<summary>Answer</summary>

- A) main.dart

</details>

---

[← Course overview](../../../README.md)
