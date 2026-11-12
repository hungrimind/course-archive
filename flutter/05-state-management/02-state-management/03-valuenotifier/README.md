# ValueNotifier

We love `ValueNotifier`. It has a special place in our heart, and the architecture we will learn soon!

It is similar to `ChangeNotifier` but immutable. It is also part of the Flutter framework and allows you to cause rebuilds using a `ValueListenableBuilder`. Let's break it down.

## What and how with ValueNotifier

`ValueNotifier` is a class that inherits the functionality of a `ChangeNotifier`, but you consume/use it differently. Let's go through an example.

```dart
class CountStateHolder {
  ValueNotifier<int> countNotifier = ValueNotifier(0);

  void increment() {
    countNotifier.value = 5;
  }
}
```

> You don't have to create a `CountStateHolder` for the `ValueNotifier` to work. I am doing this here to remind you to separate your concerns. This business logic should be in a different file, and then you can use it within your UI, but nowhere else should `countNotifier` be updated except in this `CountStateHolder`.

The `.value` property is the key part of a `ValueNotifier`. Anytime this value gets reassigned, a notification goes out to listeners that the UI needs rebuilding. No more `notifyListeners`.

Just like `ChangeNotifier`, we need to listen to the changes in our UI. To do that, we use a `ValueListenableBuilder`, and the build method will be rerun every time the value changes.

```dart "countStateHolder.countNotifier"
@override
Widget build(BuildContext context) {
  return ValueListenableBuilder(
    valueListenable: countStateHolder.countNotifier,
    builder: (context, count, child) {
      return Text('$count');
    }
  );
}
```

## Difference with ChangeNotifier

The biggest difference is how you handle rebuilds. With a `ChangeNotifier`, you call `notifyListeners`; with a `ValueNotifier`, you rebuild on value change.

## Create Your Own Notifiers

You can also create your own notifiers by extending the `ValueNotifier`.

```dart
class TodoState {
  TodoState({required this.title, required this.checked});

  final String title;
  final bool checked;
}

class TodoNotifier extends ValueNotifier<TodoState> {
  TodoNotifier() : super(TodoState(title: 'something', checked: false));

  void updateState(String todoTitle) {
    value = TodoState(title: todoTitle, checked: false);
  }
}
```

You can listen to the `TodoNotifier` like any other `ValueNotifier` and see the rebuild happen!

## Assignment

Set the counter notifier to update by 2 instead of 1.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/counter_notifier.dart`.

---

[← Course overview](../../../README.md)
