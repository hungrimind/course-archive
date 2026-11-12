# The Rectangle/Square Problem

The **Rectangle/Square Problem** illustrates a violation of the Liskov Substitution Principle (LSP). LSP states that objects of a superclass should be replaceable with objects of a subclass without altering the desirable properties of a program.

If `Square` inherits from `Rectangle`, setting a `Square`'s width or height may break expectations, as both dimensions should remain equal.

```dart
class Rectangle {
  double width;
  double height;

  void setWidth(double w) => width = w;
  void setHeight(double h) => height = h;
}

class Square extends Rectangle {
  @override
  void setWidth(double w) => width = height = w;

  @override
  void setHeight(double h) => width = height = h;
}
```

> [!warning]
> Violating LSP here results in unexpected behavior when using a `Square` as a `Rectangle`. Consider using composition over inheritance to solve this issue.

## Assignment

Implement the `Square` class using composition with the `Rectangle` class. Your implementation should:

- Initialize the `_rect` member with the same value for width and height based on the `side` parameter.
- Implement the `setSide` method to set the side length and update the `_rect` dimensions.
- Provide a `side` getter that returns the current side length.
- Ensure the `area` getter of `Square` returns the area calculated from the `_rect`.

The expected output for the `main` function should accurately reflect the areas of both the rectangle and square after resizing.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/rectangle_square.dart`. Tests: `test/rectangle_square_test.dart`.

---

[← Course overview](../../../README.md)
