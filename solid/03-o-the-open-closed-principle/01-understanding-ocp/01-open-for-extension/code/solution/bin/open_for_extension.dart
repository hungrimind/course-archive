abstract class Shape {
  String get name;
  double area();
}

class Circle extends Shape {
  final double radius;
  Circle(this.radius);
  String get name => 'Circle';
  double area() => 3.14 * radius * radius;
}

class Rectangle extends Shape {
  final double width;
  final double height;
  Rectangle(this.width, this.height);
  String get name => 'Rectangle';
  double area() => width * height;
}

class Triangle extends Shape {
  final double base;
  final double height;
  Triangle(this.base, this.height);
  String get name => 'Triangle';
  double area() => 0.5 * base * height;
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
