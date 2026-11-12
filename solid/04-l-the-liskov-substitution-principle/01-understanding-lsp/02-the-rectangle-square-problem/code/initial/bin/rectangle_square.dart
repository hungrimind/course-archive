class Rectangle {
  double width;
  double height;
  Rectangle([this.width = 0, this.height = 0]);
  void setWidth(double w) => width = w;
  void setHeight(double h) => height = h;
  double get area => width * height;
}

class Square {
  final Rectangle _rect;
  // TODO: Implement Square using composition: initialize _rect with width and height = side; implement setSide, side getter, and area getter so they forward to _rect.
  Square(double side) : _rect = Rectangle();
  void setSide(double s) {}
  double get side => 0;
  double get area => 0;
}

void main() {
  var rect = Rectangle(3, 4);
  print('Rectangle area: ${rect.area.toStringAsFixed(1)}');
  var sq = Square(5);
  print('Square area: ${sq.area.toStringAsFixed(1)}');
  rect.setWidth(5);
  rect.setHeight(6);
  print('Rectangle after resize: ${rect.area.toStringAsFixed(1)}');
  sq.setSide(7);
  print('Square after resize: ${sq.area.toStringAsFixed(1)}');
}
