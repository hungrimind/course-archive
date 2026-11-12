# InheritedWidget

Imagine you're building an app where multiple screens need to know if the user is logged in. Instead of passing this information through every single widget, wouldn't it be great if there was a way to make this data available to any widget that needs it? This is where `InheritedWidget` comes in!

## What is InheritedWidget?

`InheritedWidget` is like a magical box in Flutter that can hold data and make it available to any widget below it in the widget tree. Think of it as a bulletin board that you put high up on a wall - any widget below can look up and read what's on it without needing to pass the information through every widget in between.

For example, if you have a theme or user settings that many widgets need to access, `InheritedWidget` lets you place this data at a high level in your app and then any widget that needs this information can easily access it.

Flutter is smart about it as well - when the data in your `InheritedWidget` changes, only the widgets that actually use this data will rebuild, keeping your app efficient and fast.

## Common InheritedWidgets You Already Use

Here are some common examples of `InheritedWidget` in Flutter that you either already used or will start using.

### Theme

The most common example is `Theme.of(context)`.

```dart
Color primaryColor = Theme.of(context).colorScheme.primary;
```

You're actually using an InheritedWidget. The `Theme` data is stored high up in your widget tree (usually in `MaterialApp`), and any widget can access it using the `of` method.

### MediaQuery

Another common one is `MediaQuery.of(context)`, which gives you information about your screen size and device settings.

```dart
double screenWidth = MediaQuery.of(context).size.width;
```

### Navigator

Even navigation in Flutter uses InheritedWidget!

```dart
Navigator.of(context).push(...);
```

You're accessing a Navigator widget through an InheritedWidget.

## Why This Matters

Understanding InheritedWidget is important because it's the foundation for many built-in solutions in Flutter.

Think of InheritedWidget as Flutter's way of creating a "data shortcut" - instead of passing data through every widget in between, widgets can take a direct path to the data they need.

## Quiz

**1. In a Flutter app, you need to access the current theme color in multiple widgets. What's the most efficient way to do this?**

- A) Pass the theme color as a parameter through every widget
- B) Use Theme.of(context) which uses InheritedWidget under the hood
- C) Store the theme color in a global variable
- D) Create a new Theme instance in each widget

<details>
<summary>Answer</summary>

- B) Use Theme.of(context) which uses InheritedWidget under the hood

</details>

**2. What happens when data in an InheritedWidget changes?**

- A) The entire app rebuilds to ensure consistency
- B) Only widgets that specifically depend on the changed data rebuild
- C) Nothing happens until you call setState
- D) All child widgets rebuild regardless of dependency

<details>
<summary>Answer</summary>

- B) Only widgets that specifically depend on the changed data rebuild

</details>

---

[← Course overview](../../../README.md)
