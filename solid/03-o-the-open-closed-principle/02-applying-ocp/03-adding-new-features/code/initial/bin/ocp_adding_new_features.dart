abstract class Shape {
  double area();
}

class Circle extends Shape {
  final double radius;
  Circle(this.radius);

  @override
  double area() => 3.14 * radius * radius;
}

double totalArea(List<Shape> shapes) {
  var total = 0.0;
  for (final shape in shapes) {
    total += shape.area();
  }
  return total;
}

void main() {
  final shapes = <Shape>[Circle(2)];
  final total = totalArea(shapes);
  print('Total area: ${total.toStringAsFixed(2)}');
}
