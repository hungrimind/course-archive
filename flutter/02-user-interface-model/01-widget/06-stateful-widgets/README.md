# Stateful Widgets

StatefulWidgets are themselves immutable, just like `StatelessWidget`, but they hold a separate `State` object created by the `createState` method.

```dart
class MyHomePage extends StatefulWidget {
  const MyHomePage({
    super.key,
  });

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}
```

Each `StatefulWidget` comes with two classes: the `StatefulWidget` itself and a `State` widget with a `build` method and all the logic.

Within this `State`, you can add variables (aka the data or "state") that can be manipulated. Whenever that data is manipulated, you can trigger a rebuild of that widget using the `setState` function.

So along with all the options we had to rebuild a `StatelessWidget`, we have one more option of rebuilding here:

1. The very first time it was built.
2. If its parent widget changes.
3. If your widget depends on an InheritedWidget, whenever that changes.

<p class="pl-4 -mt-4 text-green-600 dark:text-green-200 font-medium">
  4. Manually triggering a rebuild when the state changes.
</p>

> **Side Note:** There are ways to update your UI automatically using State Management. This is covered in a later lesson.

## setState

`setState` is a method that triggers a rebuild of the `StatefulWidget`. `setState` takes a `VoidCallback` as an argument, which is a function that doesn't take any arguments and doesn't return anything. You can use this function to update the state, or you can update the state before the `setState` call.

## Starter App

When you create a flutter project, the starter application is a counter app with a very simple `StatefulWidget` that increments the counter. Whenever you press the `+` icon, the `_counter` value is incremented, and `setState` is called to trigger a rebuild of the `StatefulWidget`, and you see the counter value change.

## Assignment

Manually trigger a rebuild of the `StatefulWidget` by adding a `setState` where it makes sense to do so.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/main.dart`. Tests: `test/widget_test.dart`.

---

[← Course overview](../../../README.md)
