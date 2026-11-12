abstract class Shape {
  double area();
}

class Circle extends Shape {
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

double totalArea(List<Shape> shapes) {
  var total = 0.0;
  for (final shape in shapes) {
    total += shape.area();
  }
  return total;
}

void main() {
  final shapes = <Shape>[Circle(2), Square(3)];
  final total = totalArea(shapes);
  print('Total area: ${total.toStringAsFixed(2)}');
}
