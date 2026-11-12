abstract class Engine {
  String start();
}

class PetrolEngine implements Engine {
  @override
  String start() => 'Petrol engine started';
}

class ElectricEngine implements Engine {
  @override
  String start() => 'Electric engine started';
}

class Car {
  final Engine engine;
  Car(this.engine);
  String start() => engine.start();
}

class CarWithSetter {
  Engine? engine;
  String start() => engine?.start() ?? 'No engine';
}

void main() {
  final car1 = Car(PetrolEngine());
  print('Constructor DI: ${car1.start()}');

  final car2 = Car(ElectricEngine());
  print('Constructor DI: ${car2.start()}');

  final cws = CarWithSetter();
  cws.engine = PetrolEngine();
  print('Setter DI: ${cws.start()}');

  cws.engine = ElectricEngine();
  print('Swapped dependency: ${cws.start()}');

  cws.engine = null;
  print('Setter DI (no engine): ${cws.start()}');
}
