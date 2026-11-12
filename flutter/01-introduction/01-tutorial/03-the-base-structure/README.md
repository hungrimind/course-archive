# The Base Structure

Flutter UI is declarative. This means your code describes what you want to see, and Flutter figures out how to show it. For example, in the code below, you see how different classes (also called widgets) are nested.

The `Scaffold` widget is the layout structure for your application. This example code has an `AppBar`, `Center`, and a `FloatingActionButton` placed on your screen.

As you can tell, the Flutter team has some brilliant engineers, because their naming of these widgets is amazing. I bet you know what the `AppBar`, `Center`, `Text`, and `Column` widgets do without us having to tell you.

```dart
return Scaffold(
  appBar: AppBar(
    backgroundColor: Theme.of(context).colorScheme.inversePrimary,
    title: Text(widget.title),
  ),
  body: Center(
    child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        const Text(
          'You have pushed the button this many times:',
        ),
        Text(
          '$_counter',
          style: Theme.of(context).textTheme.headlineMedium,
        ),
      ],
    ),
  ),
  floatingActionButton: FloatingActionButton(
    onPressed: _incrementCounter,
    tooltip: 'Increment',
    child: const Icon(Icons.add),
  ),
);
```

Complete the quiz, and when you have the correct answer, your lesson will be marked as complete, and you can click the "Next" button to continue.

## Quiz

**1. What does the Column widget do?**

- A) To display children widgets horizontally
- B) To create a grid layout
- C) To display children widgets vertically
- D) To build a navigation menu

<details>
<summary>Answer</summary>

- C) To display children widgets vertically

</details>

---

[← Course overview](../../../README.md)
