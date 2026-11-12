# ChangeNotifier

`ChangeNotifier`. What a simple-to-remember name. It's also simple to use!

Now that you know about `setState`, let's explore what it means to put your state into a separate class and have that handle when the UI should rebuild. We will keep going with the counter-example for simplicity and we have created this class for you to modify in the assignment.

```dart
class CounterNotifier extends ChangeNotifier {
  int _count = 0;
  get int count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}
```

There are a couple of important new concepts here. First, we use a private `_count` value and a "getter". In this method, we increment the private field and call `notifyListeners`. Let's cover the full process of a state update using `ChangeNotifier`.

## notifyListeners

Whatever depends on this `CounterNotifier` will call the magical `markNeedsBuild` and cause the UI to rebuild. How does the UI know about the rebuild, though?

### ListenableBuilder

This widget will let you depend on a `ChangeNotifier` and cause the `builder` to rerun, which causes the UI update.

```dart
@override
Widget build(BuildContext context) {
  return ListenableBuilder(
    listenable: counterNotifier
    builder: (context, child) {
      return Text('${counterNotifier.count}');
    }
  );
}
```

## Why the private field?

Remember, for a `ChangeNotifier` to trigger the UI to rebuild; you need to call `notifyListeners`. You get this method in your class by inheriting the `ChangeNotifier` class. If you update a value without calling this, your UI won't update.

```dart
void increment() {
  _count++;
  // will cause any [ListenableBuilder] to rerun
  notifyListeners();
}
```

## What now?

Now you know how to break your state out of the `StatefulWidget` using a `ChangeNotifier`. That neatly takes us to another topic called "separation of concerns".

## Assignment

Set the counter notifier to update by 2 instead of 1.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/counter_notifier.dart`.

---

[← Course overview](../../../README.md)
