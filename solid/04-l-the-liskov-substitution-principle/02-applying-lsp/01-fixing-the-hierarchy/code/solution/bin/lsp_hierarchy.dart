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
  String fly() => '$name the Eagle flies.';
}

class Penguin extends Bird {
  Penguin(String name) : super(name);
}

String describeFlight(Bird bird) {
  if (bird is FlyingBird) {
    return bird.fly();
  }
  return '${bird.name} the ${bird.runtimeType} does not fly.';
}

void main() {
  final eagle = Eagle('Eddie');
  final penguin = Penguin('Penny');
  final birds = [eagle, penguin];
  for (final b in birds) {
    print(describeFlight(b));
  }
}
