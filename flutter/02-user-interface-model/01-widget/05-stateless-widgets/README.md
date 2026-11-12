# Stateless Widgets

Some examples of `StatelessWidget` are: `Text`, `ListTile`, and `FlutterLogo`.

Although a `StatelessWidget` can't change, it can be rebuilt entirely (which is a normal thing that happens in a Flutter app all the time). It can be built or rebuilt in 3 different situations.

1. The very first time it was built.
2. If its parent widget changes.
3. If your widget depends on an InheritedWidget, whenever that changes.

## Assignment

Replace the `Placeholder` widget with a `Text` widget that displays your name, a `ListTile` below the `Text` widget with a star icon in the `leading` position, and a `FlutterLogo` widget below the `ListTile`.

Feel free to play around with all the properties of the widgets to make it look how you want.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/widgets.dart`. Tests: `test/widgets_test.dart`.

---

[← Course overview](../../../README.md)
