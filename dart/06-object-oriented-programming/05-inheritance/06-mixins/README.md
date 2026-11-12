# Mixins

Inheritance is a way to create a new class that is a type of another class. Mixins are a way to create a new class that has functionality from other classes.

Mixins are created using the `mixin` keyword. In the example below, we have created a `Jump` mixin. You can use the `with` keyword to add a mixin to a class.

```dart
mixin Jump {
  void jump() {
    print("JUMP!");
  }
}

class Animal {
  void walk() {
    print("WALK!");
  }
}

class Cat extends Animal with Jump {}

void main() {
  Cat cat = Cat();
  cat.jump();
}
```

A class can use multiple mixins by adding another mixin after the `with` keyword.

```dart
mixin Run {
  void run() {
    print("RUN!");
  }
}

class Cat extends Animal with Jump, Run {}
```

Mixins can not be instantiated, so you can not create an instance of a mixin. If you try to instantiate a mixin, you will get a compile-time error.

```dart
Jump jump = Jump(); // Compile time error
```

## Assignment

You are creating a super duck that can both swim and fly. Complete the implementation by:

1. Create a mixin named `CanFly` that provides a `fly()` method. The method should print `"Swoosh! I'm flying!"` to the console.
2. Update the `SuperDuck` class to use the `CanFly` mixin by adding `with CanFly` after `extends Duck`.
3. Remove the stub `fly()` method from the `SuperDuck` class since the mixin will provide it.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/super_duck.dart`. Tests: `test/super_duck_test.dart`.

---

[← Course overview](../../../README.md)
