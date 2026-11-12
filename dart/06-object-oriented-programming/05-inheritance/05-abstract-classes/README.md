# Abstract Classes

Before we talk about abstract classes, let’s look at a classic example of inheritance. The relationship between a Bird and an Animal. All birds are animals, but not all animals are birds. So, we should create an `Animal` class and have the `Bird` class inherit from the `Animal` class.

```dart
class Animal {
    String name;

    Animal(this.name);

    void walk() {
        print('The animal is walking');
    }
}

class Bird extends Animal {
    Bird(super.name);

    void fly() {
        print('The bird is flying');
    }
}
```

Now, we can create a `Bird` object and call the `walk` and `fly` methods.

```dart
void main() {
    Bird parrot = Bird('Parrot');
    parrot.walk();
    parrot.fly();
}
```

But the `Animal` class doesn’t make sense as its own entity. What does an animal look like? Sure, all animals have similar properties and methods, but we should never create an `Animal` object in our code.

To do this, we have to make the `Animal` class **abstract**.

```dart
abstract class Animal {
    String name;

    Animal(this.name);

    void walk() {
        print('The animal is walking');
    }
}
```
Now, we can’t create an `Animal` object even if we wanted to.

```dart
void main() {
    Animal animal = Animal('Parrot');
    // Error: The class 'Animal' is abstract and can't be instantiated.
}
```

Abstract classes allow us to create a blueprint of a class that other classes can inherit from, but you don't use the abstract class itself.

## Quiz

**1. What is the primary purpose of an `abstract` class in Dart?**

- A) To create a class that can be instantiated only once.
- B) To serve as a blueprint for other classes, which cannot be instantiated on its own.
- C) To prevent any other class from inheriting its properties and methods.
- D) To automatically hide all of its methods from other classes.

<details>
<summary>Answer</summary>

- B) To serve as a blueprint for other classes, which cannot be instantiated on its own.

</details>

**2. Given the code below, what will happen when you try to run the `main` function?

```dart
abstract class Vehicle {
  void startEngine() {
    print('Engine started');
  }
}

void main() {
  Vehicle myCar = Vehicle();
  myCar.startEngine();
}
```**

- A) The code will run and print "Engine started".
- B) The code will run, but it will throw an error when `startEngine()` is called.
- C) The code will not compile because `Vehicle` is an abstract class.
- D) The code will not compile because abstract classes cannot have methods with code inside them.

<details>
<summary>Answer</summary>

- C) The code will not compile because `Vehicle` is an abstract class.

</details>

**3. Which line of code correctly defines an abstract class named `DataSource`?**

- A) `abstract class DataSource { ... }`
- B) `class DataSource abstract { ... }`
- C) `blueprint class DataSource { ... }`
- D) `abstract DataSource { ... }`

<details>
<summary>Answer</summary>

- A) `abstract class DataSource { ... }`

</details>

---

[← Course overview](../../../README.md)
