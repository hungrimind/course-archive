# Global Styling

Then there is global styling. This is the styling that is applied to the entire application. This is done using the `Theme` widget.

## InheritedWidget

We will get to theming in a second, but I have to mention `InheritedWidget` first. We talked about all kinds of UI widgets thus far, but some don't handle UI at all. We will cover more of them later in the course, but I want to introduce you to `InheritedWidget` for now.

`InheritedWidget` inserts itself into the widget tree, and can then provide data down that widget tree. So instead of passing information down to each widget, you can retrieve it using the `context`.

### Theme.of(context)

Within the starter application, the AppBar uses the following code to retrieve a background color from the app theme:

```dart
Theme.of(context).colorScheme.inversePrimary
```

Hold on. I just said you need to use an InheritedWidget to access data without directly passing it around. Don’t worry; Flutter is working exactly as it should.

Remember the `MaterialApp` widget and how it provides the baseline functions for what you need in an application? It also creates a default `Theme` for us to use.

If you dive into the code for `MaterialApp`, you will see it returns a `Theme` within a function called `_materialBuilder`. If you dive into the code for `Theme`, you will see it returns an `InheritedTheme`, which is, in fact, an `InheritedWidget`.

## Quiz

**1. What widget is used to provide global styling in Flutter?**

- A) Style
- B) GlobalStyle
- C) AppStyle
- D) Theme

<details>
<summary>Answer</summary>

- D) Theme

</details>

**2. What is the purpose of InheritedWidget in Flutter?**

- A) To handle user interactions
- B) To provide data down the widget tree without passing it directly
- C) To create animations
- D) To manage local state

<details>
<summary>Answer</summary>

- B) To provide data down the widget tree without passing it directly

</details>

**3. How does MaterialApp provide theming capabilities?**

- A) It directly styles each widget
- B) It creates a Theme widget that wraps an InheritedTheme
- C) It uses CSS-like styling
- D) It only provides colors

<details>
<summary>Answer</summary>

- B) It creates a Theme widget that wraps an InheritedTheme

</details>

---

[← Course overview](../../../README.md)
