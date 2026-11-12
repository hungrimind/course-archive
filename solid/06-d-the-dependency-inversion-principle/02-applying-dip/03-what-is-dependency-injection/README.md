# What is Dependency Injection?

Dependency Injection is a design pattern that helps achieve the **Dependency Inversion Principle (DIP)** by decoupling high-level and low-level modules. Instead of a class creating its dependencies, they are *injected* into it, usually through constructors, setters, or interfaces.

This approach allows high-level modules to remain independent of low-level module details, relying instead on abstractions. It makes your code more flexible and easier to maintain or test, as changing a dependency doesn't require modifying the dependent class.

```dart
class Car {
  final Engine engine;

  Car(this.engine); // Dependency injected via constructor
}
```

Here, `Car` doesn't create an `Engine`; it's provided from outside, adhering to DIP.

## Assignment

Implement the methods for the `PetrolEngine`, `ElectricEngine`, and `Car` classes to demonstrate dependency injection.

Your implementation should:
- In `PetrolEngine.start()`, return the string "Petrol engine started".
- In `ElectricEngine.start()`, return the string "Electric engine started".
- In `Car.start()`, return the start message from the injected engine.
- In `CarWithSetter.start()`, return the engine start message if set, otherwise return "No engine".

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/dependency_injection.dart`. Tests: `test/dependency_injection_test.dart`.

---

[← Course overview](../../../README.md)
