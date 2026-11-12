# Update Theme

In the last lesson, we set the theme of the `AppBar` directly. However we want the `AppBar` to be black for the entire application.

We also want the app in general to not only be dark theme, but to be completely black.

## Assignment

Remove the black background from the `AppBar` and update the app-wide theme to the following:

```dart
ThemeData(
  appBarTheme: const AppBarTheme(
    backgroundColor: Colors.black,
  ),
  bottomNavigationBarTheme: const BottomNavigationBarThemeData(
    backgroundColor: Colors.black,
  ),
  colorScheme: const ColorScheme.dark(
    primary: Colors.white,
    secondary: Colors.grey,
  ),
  scaffoldBackgroundColor: Colors.black,
  textTheme: const TextTheme(
    bodyMedium: TextStyle(fontSize: 16),
  ),
),
```

### Requirements

1. `AppBar` should not set the background color directly.
2. `AppBar` is black for the entire application.
3. The background color of the app is black.

> **Hint**
>
> App-wide theme is set in the `MaterialApp` widget.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/pages/signin.dart`. Tests: `test/pages/signin_test.dart`, `test/main_test.dart`.

---

[← Course overview](../../../README.md)
