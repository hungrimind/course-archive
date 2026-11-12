# A Code Example That Violates OCP

A code example that violates the **Open/Closed Principle (OCP)** is one that requires modification to add new behavior. OCP states that software entities should be *open for extension, but closed for modification*.

Consider this example:

```dart
class Shape {
  String type;
  Shape(this.type);
}

class AreaCalculator {
  double calculate(Shape shape) {
    if (shape.type == 'circle') {
      return 3.14 * 5 * 5; // Assume radius is 5
    } else if (shape.type == 'square') {
      return 4 * 4; // Assume side length is 4
    }
    return 0;
  }
}
```

This violates OCP because adding a new shape requires changing `AreaCalculator`. Instead, use polymorphism to extend behavior without modification.

> [!warning]
> Avoid modifications that ripple through your codebase. They increase the risk of bugs and maintenance costs.

## Fill in the Blanks

Fill in the blanks:

```dart
abstract class Shape {
  double __(1)__();
}

class Circle __(2)__ Shape {
  final double radius;
  Circle(this.radius);
  @override
  double area() => 3.14 * radius * radius;
}

class Square extends Shape {
  final double side;
  Square(this.side);
  @override
  double area() => side * side;
}

class Rectangle extends Shape {
  final double width, height;
  Rectangle(this.width, this.height);
  @override
  double area() => width * height;
}

class AreaCalculator {
  double __(3)__(List<Shape> shapes) {
    double total = 0;
    for (var shape in shapes) {
      total += shape.area();
    }
    return total;
  }
}
```

<details>
<summary>Answer</summary>

1. `area`
2. `extends`
3. `totalArea`

</details>

---

[← Course overview](../../../README.md)
