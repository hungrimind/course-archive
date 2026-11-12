# Adding New Features

Extending functionality while keeping existing code unchanged is key to the **Open/Closed Principle**. This means your code should be *open* for extension but *closed* for modification. 

In Dart, achieve this by using inheritance or composition. For example, if you have a `Shape` class, add new shapes by creating subclasses like `Circle` or `Square` without altering `Shape`.

```dart
abstract class Shape {
  double area();
}

class Circle extends Shape {
  final double radius;
  Circle(this.radius);
  
  @override
  double area() => 3.14 * radius * radius;
}
```

Here, `Circle` adds functionality without changing the `Shape` class.

> [!tip]
> Prefer composition over inheritance when possible for more flexible code expansion.

## Assignment

You're about to enhance your shape functionality.

1. Create a new class called `Square` that extends `Shape`.
2. Implement the `area` method in the `Square` class to calculate the area based on its `side` length.
3. Ensure the `shapes` list in the `main` function includes an instance of `Square` with a side length of 3. 

The total area should print as expected when you run the program.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/ocp_adding_new_features.dart`. Tests: `test/ocp_adding_new_features_test.dart`.

---

[← Course overview](../../../README.md)
