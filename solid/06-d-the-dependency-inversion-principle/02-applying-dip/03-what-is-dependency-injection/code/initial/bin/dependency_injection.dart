abstract class Engine {
  String start();
}

class PetrolEngine implements Engine {
  @override
  String start() {
    // TODO: Return a message indicating the petrol engine started (e.g., 'Petrol engine started')
    return '';
  }
}

class ElectricEngine implements Engine {
  @override
  String start() {
    // TODO: Return a message indicating the electric engine started (e.g., 'Electric engine started')
    return '';
  }
}

class Car {
  final Engine engine;
  Car(this.engine);
  String start() {
    // TODO: Return the engine start message by delegating to the injected Engine
    return '';
  }
}

class CarWithSetter {
  Engine? engine;
  String start() {
    // TODO: If an engine is set, return its start message; otherwise return 'No engine'
    return '';
  }
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
