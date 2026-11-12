# Open for Extension

## Open for Extension

Being **open for extension** means that a class or module can be extended to include new functionality without altering existing code. This is a core aspect of the Open/Closed Principle (OCP) in SOLID design.

When a system is open for extension, new features or changes can be added by creating new code, such as subclasses or methods, rather than changing existing code. This reduces the risk of introducing bugs in existing functionality.

```dart
class Shape {
  double area() => 0; // Default implementation
}

class Circle extends Shape {
  final double radius;
  Circle(this.radius);

  @override
  double area() => 3.14 * radius * radius;
}
```

Here, `Shape` is extended by `Circle`, allowing new behavior without modifying `Shape`. This approach keeps the original class stable and reliable.

## Assignment

Implement the `Circle`, `Rectangle`, and `Triangle` subclasses of the `Shape` class to correctly calculate and return their names and areas.

Your implementation should:
- Ensure `Circle(2)` returns "Circle area: 12.56"
- Ensure `Rectangle(3, 4)` returns "Rectangle area: 12.00"
- Ensure `Triangle(4, 3)` returns "Triangle area: 6.00"
- Calculate and display the total area as "Total area: 30.56"

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/open_for_extension.dart`. Tests: `test/open_for_extension_test.dart`.

---

[← Course overview](../../../README.md)
