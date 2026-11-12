# super

When you override a method or a property, there will be times when you want to access the one from the parent class. That is where the `super` keyword comes in. `super` is the opposite of `this` and refers to the parent class.

Let’s say our `Car` class has a `honk()` method that overrides the honk method on the `Vehicle` class.

```dart
class Vehicle {
  int wheels = 4;

  String honk() {
    return 'HOOONK!';
  }
}

class Car extends Vehicle {
  @override
  String honk() {
    return 'Beep Beep!';
  }
}
```

What if we wanted to call the `honk()` method from the `Vehicle` class from the `Car` class? We can use the `super` keyword to do this.

```dart
class Vehicle {
  int wheels = 4;

  String honk() {
    return 'HOOONK!';
  }
}

class Car extends Vehicle {
  @override
  String honk() {
    return 'Beep Beep! ${super.honk()}';
  }
}
```

Now, the return value of the `honk()` method in the `Car` class will be `Beep Beep! HOOONK!`.

You can also use the `super` keyword to access properties from the parent class.

```dart
class Vehicle {
  int wheels = 4;

  String honk() {
    return 'HOOONK!';
  }
}

class Car extends Vehicle {
  @override
  String honk() {
    return 'Beep Beep! ${super.honk()}';
  }

  @override
  String toString() {
    return 'Car with ${super.wheels} wheels';
  }
}
```

The `toString()` method will return `Car with 4 wheels`.

You can also use the `super` keyword in the constructor. This is useful if you want to pass a value to the constructor of the parent class.

```dart
class Vehicle {
  int wheels;

  Vehicle(this.wheels);

  String honk() {
    return 'HOOONK!';
  }
}

class Car extends Vehicle {
  Car() : super(4);

  @override
  String honk() {
    return 'Beep Beep! ${super.honk()}';
  }

  @override
  String toString() {
    return 'Car with ${super.wheels} wheels';
  }
}
```

## Assignment

You are working with a `SalesReport` class that extends the base `Report` class. Complete the `generate()` method in the `SalesReport` class by calling the parent `Report`'s `generate()` method using `super`, then add a print statement that outputs `"Adding sales data and charts."`.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/super_method_call.dart`. Tests: `test/super_method_call_test.dart`.

---

[← Course overview](../../../README.md)
