# implements

Dart allows us to use the `implements` keyword instead of `extends` to inherit from a class. The `implements` keyword is similar to `extends`, but there are a few differences.

The main difference is that the class that is implementing another class must override all the methods and properties from the parent class.

```dart
class Human {
  String name;

  Human(this.name);

  void walk() {
    print('$name is walking');
  }
}

class Man implements Human {
  @override
  String name;

  Man(this.name);

  @override
  void walk() {
    print('Man');
  }
}
```

If we don’t override all the properties and methods from the `Human` class, then the code will not compile.

When you implement a class, it's acting like a contract saying that you will *implement* all the behavior from this class.

The main difference between the `extends` and `implements` keywords is that `extends` means that the class is inheriting all the behaviour from the parent class. This means that if we don’t override a method or property, it will use the parent’s implementation. The `implements` keyword must override all the methods and properties from the parent class.

Another difference is that a class can only `extend` one class, but a class can `implement` multiple classes.

```dart
class Man implements Human, AnotherClass {

}
```

## Quiz

**1. What is the main difference between using the `implements` keyword and the `extends` keyword in Dart?**

- A) `implements` allows a class to inherit from multiple classes, while `extends` only allows one.
- B) `extends` is for inheriting from classes, while `implements` is for inheriting from functions.
- C) A class using `implements` must provide its own implementation for *all* methods and properties of the parent class.
- D) There is no difference; `implements` and `extends` can be used interchangeably.

<details>
<summary>Answer</summary>

- C) A class using `implements` must provide its own implementation for *all* methods and properties of the parent class.

</details>

**2. Review the code snippet below. Why will this code fail to compile?

```dart
class Speaker {
  String name;

  Speaker(this.name);

  void announce() {
    print('Hello, I am $name');
  }
}

class Student implements Speaker {
  @override
  void announce() {
    print('I am a student.');
  }
}
```**

- A) The `Student` class is missing a constructor.
- B) The `Student` class must also override the `name` property from the `Speaker` class.
- C) The `@override` annotation should not be used with `implements`.
- D) The `Student` class should use `extends` instead of `implements`.

<details>
<summary>Answer</summary>

- B) The `Student` class must also override the `name` property from the `Speaker` class.

</details>

**3. Which of the following class definitions demonstrates a capability that is unique to the `implements` keyword compared to the `extends` keyword?**

- A) `class Car extends Vehicle {}`
- B) `class Bicycle implements Vehicle {}`
- C) `class AmphibiousVehicle implements Vehicle, Boat {}`
- D) `class Motorcycle extends Vehicle implements TwoWheeler {}`

<details>
<summary>Answer</summary>

- C) `class AmphibiousVehicle implements Vehicle, Boat {}`

</details>

---

[← Course overview](../../../README.md)
