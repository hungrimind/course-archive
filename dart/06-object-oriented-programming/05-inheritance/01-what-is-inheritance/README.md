# What is Inheritance?

Inheritance is another core feature of Object Oriented Programming. It allows us to create a new class that inherits properties and methods from an existing class. The new class is called the **Child Class** or **Subclass**, and the existing class is called the **Parent Class** or **Superclass**.

We can use the `extends` keyword to inherit from another class.

```dart
class Vehicle {
  String? brand;
  int? year;
  String? color;

  void drive() {
    print('Driving');
  }
}

class Car extends Vehicle {
  int? topSpeed;
}
```

The `Car` class is now a subclass of the `Vehicle` class, meaning it inherits all the properties and methods from the `Vehicle` class.

We can create an object of the `Car` class and use the methods from the `Vehicle` class.

```dart
void main() {
  Car car = Car();

  car.brand = 'Toyota';
  car.year = 2020;
  car.color = 'Black';
  car.topSpeed = 200;

  car.drive();
}
```

You can see that the `Car` class has access to all the properties and methods from the `Vehicle` class. 

> The `Car` class can have its own properties and methods, but it must be unique and cannot be the same as the parent class. 

We can also create subclasses from existing subclasses.

For example, we can create a `Boat` subclass from the `Vehicle` class, and then create a `Yacht` subclass from the `Boat` class.

```dart
class Boat extends Vehicle {
  int? speed;
}

class Yacht extends Boat {
  int? luxuryLevel;
}
```

The main benefit of inheritance is that we can create new classes without duplicating code. This makes our code more modular and easier to maintain.

## Quiz

**1. In Object-Oriented Programming (OOP) with Dart, what is the primary purpose of inheritance?**

- A) To define a new type of variable that can store multiple data types.
- B) To allow a new class to reuse properties and methods from an existing class.
- C) To create a loop that executes a block of code a specified number of times.
- D) To combine multiple strings into a single string.

<details>
<summary>Answer</summary>

- B) To allow a new class to reuse properties and methods from an existing class.

</details>

**2. Which keyword is used in Dart to indicate that a class is inheriting from another class?**

- A) implements
- B) uses
- C) inherits
- D) extends

<details>
<summary>Answer</summary>

- D) extends

</details>

**3. Consider the following Dart code:
```dart
class Animal {
  void eat() {
    print('Eating');
  }
}

class Dog extends Animal {
  void bark() {
    print('Woof!');
  }
}

void main() {
  Dog myDog = Dog();
  myDog.eat(); // Line A
  myDog.bark(); // Line B
}
```
Which statement best describes why `myDog.eat();` (Line A) works?**

- A) The Dog class implicitly creates an eat() method because it is an Animal.
- B) The Dog class directly defines its own eat() method.
- C) The Dog class inherits the eat() method from its Animal parent class.
- D) eat() is a global function that can be called by any object.

<details>
<summary>Answer</summary>

- C) The Dog class inherits the eat() method from its Animal parent class.

</details>

---

[← Course overview](../../../README.md)
