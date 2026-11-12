import 'dart:math';

abstract class Shape {
  double area();
}

class Circle implements Shape {
  final double radius;
  Circle(this.radius);
  @override
  double area() => pi * radius * radius;
}

class Rectangle implements Shape {
  final double width;
  final double height;
  Rectangle(this.width, this.height);
  @override
  double area() => width * height;
}

class Triangle implements Shape {
  final double base;
  final double height;
  Triangle(this.base, this.height);
  @override
  double area() => base * height / 2;
}

void main() {
  final shapes = <Shape>[
    Circle(2),
    Rectangle(3, 4),
    Triangle(4, 2),
  ];

  double total = 0;
  for (final s in shapes) {
    final a = s.area();
    total += a;
    print('${s.runtimeType} area: ${a.toStringAsFixed(2)}');
  }
  print('Total area: ${total.toStringAsFixed(2)}');
}
