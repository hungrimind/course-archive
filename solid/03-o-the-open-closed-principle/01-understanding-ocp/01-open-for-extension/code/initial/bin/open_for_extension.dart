abstract class Shape {
  String get name;
  double area();
}

// TODO: Implement the subclasses so each shape returns the correct name and area.
// Expected behavior: Circle(2) -> "Circle area: 12.56", Rectangle(3,4) -> "Rectangle area: 12.00",
// Triangle(4,3) -> "Triangle area: 6.00", Total area: 30.56

class Circle extends Shape {
  final double radius;
  Circle(this.radius);
  String get name => '';
  double area() => 0.0;
}

class Rectangle extends Shape {
  final double width;
  final double height;
  Rectangle(this.width, this.height);
  String get name => '';
  double area() => 0.0;
}

class Triangle extends Shape {
  final double base;
  final double height;
  Triangle(this.base, this.height);
  String get name => '';
  double area() => 0.0;
}

double totalArea(List<Shape> shapes) => shapes.fold(0.0, (sum, s) => sum + s.area());

void main() {
  final shapes = [
    Circle(2),
    Rectangle(3, 4),
    Triangle(4, 3),
  ];

  for (final s in shapes) {
    print('${s.name} area: ${s.area().toStringAsFixed(2)}');
  }

  print('Total area: ${totalArea(shapes).toStringAsFixed(2)}');
}
