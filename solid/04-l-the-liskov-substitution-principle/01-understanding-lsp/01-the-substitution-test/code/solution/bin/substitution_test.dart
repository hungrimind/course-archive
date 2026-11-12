class Bird {
  final String name;
  Bird(this.name);
  String fly() => '$name is flying';
}

class Sparrow extends Bird {
  Sparrow() : super('Sparrow');
}

class Ostrich extends Bird {
  Ostrich() : super('Ostrich');
  @override
  String fly() {
    throw Exception("Ostriches can't fly");
  }
}

String substitutionTest(Bird b) {
  try {
    b.fly();
    return '${b.name}: passed';
  } catch (e) {
    var message = e is Exception
        ? e.toString().replaceAll('Exception: ', '')
        : e.toString();
    return '${b.name}: failed - $message';
  }
}

void main() {
  print('Substitution test results:');
  var birds = [Sparrow(), Ostrich()];
  for (var b in birds) {
    print(substitutionTest(b));
  }
}
