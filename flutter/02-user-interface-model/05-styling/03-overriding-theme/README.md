# Overriding Theme

The default theme is based on Material UI, Google's Android design language. Now, maybe it's because I'm an Apple fanboy, but it looks so ugly, at least the default options.

We can improve it by overriding different parts of the `Theme`.

To do this, you must create your own `ThemeData` with your colors and styles. There is a style for everything in the app. You can even set separate styles for dark theme using the `darkTheme` property.

```dart
MaterialApp(
  home: const Home(),
  theme: ThemeData(
    colorScheme: const ColorScheme.light(
      primary: Colors.white,
      secondary: Colors.grey,
    ),
    textTheme: const TextTheme(
      bodyMedium: TextStyle(fontSize: 16),
    ),
  ),
  darkTheme: ThemeData(
    scaffoldBackgroundColor: Colors.black,
  ),
);
```

## Quiz

**1. What is the purpose of ThemeData in Flutter?**

- A) To provide a default theme for the app
- B) To create a custom theme for the app
- C) To handle user interactions
- D) To manage local state

<details>
<summary>Answer</summary>

- B) To create a custom theme for the app

</details>

**2. How can you specify different themes for light and dark modes in Flutter?**

- A) By using separate MaterialApp widgets for each theme
- B) By using a ThemeMode enum only
- C) By using the theme and darkTheme properties in MaterialApp
- D) By creating separate apps for light and dark modes

<details>
<summary>Answer</summary>

- C) By using the theme and darkTheme properties in MaterialApp

</details>

---

[← Course overview](../../../README.md)
