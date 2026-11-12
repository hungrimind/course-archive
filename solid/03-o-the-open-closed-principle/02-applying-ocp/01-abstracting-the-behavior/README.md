# Abstracting the Behavior

To adhere to the **Open/Closed Principle** (OCP), you need to abstract behavior in your code. This means defining a shared interface or abstract class that describes common methods, allowing you to extend functionality without altering existing code.

By using abstractions, you can introduce new behaviors through subclassing. This keeps your existing codebase unchanged while accommodating new features.

```dart
abstract class Shape {
  double area();
}

class Circle implements Shape {
  final double radius;
  Circle(this.radius);
  
  @override
  double area() => 3.14 * radius * radius;
}
```

Here, `Shape` is abstract, and `Circle` provides a specific implementation. You can add new shapes by creating more classes without modifying existing ones.

> [!tip]
> Use interfaces or abstract classes as points of extension to maintain OCP compliance.

## Assignment

Implement the `area` method for the `Circle`, `Rectangle`, and `Triangle` classes to calculate their respective areas.

Your implementation should:
- For `Circle`, return the area using the formula (π * radius * radius).
- For `Rectangle`, return the area using the formula (width * height).
- For `Triangle`, return the area using the formula (base * height / 2).
- Ensure the output for each shape is printed in the format: "{ShapeType} area: {area}" and the total area as "Total area: {totalArea}".

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/open_closed_principle.dart`. Tests: `test/open_closed_principle_test.dart`.

---

[← Course overview](../../../README.md)
