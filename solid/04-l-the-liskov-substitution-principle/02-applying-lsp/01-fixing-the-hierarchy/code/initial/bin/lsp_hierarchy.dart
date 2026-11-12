abstract class Bird {
  final String name;
  Bird(this.name);
}

abstract class FlyingBird extends Bird {
  FlyingBird(String name) : super(name);
  String fly();
}

class Eagle extends FlyingBird {
  Eagle(String name) : super(name);
  @override
  String fly() {
    // TODO: Return '<name> the Eagle flies.'
    return 'not implemented';
  }
}

class Penguin extends Bird {
  Penguin(String name) : super(name);
}

String describeFlight(Bird bird) {
  // TODO: If the bird can fly, return its flight description; otherwise return '<name> the <Type> does not fly.'
  return 'not implemented';
}

void main() {
  final eagle = Eagle('Eddie');
  final penguin = Penguin('Penny');
  final birds = [eagle, penguin];
  for (final b in birds) {
    print(describeFlight(b));
  }
}
