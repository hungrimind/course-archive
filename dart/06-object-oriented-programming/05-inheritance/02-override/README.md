# override

When you inherit from another class, the child class will inherit all properties and methods from the superclass. But, what if you want to change the behavior of one of the methods from the superclass within the subclass? You can do that by overriding the method.

You can use the `@override` annotation to override a method from a parent class.

```dart
class Animal {
  String name;

  Animal(this.name);

  void makeSound() {
    print('This animal makes a sound');
  }
}

class Dog extends Animal {
  Dog(String name) : super(name);

  @override
  void makeSound() {
    print('woof woof');
  }
}
```

Now, if we create a `Dog` object and call the `makeSound` method, it will print out "woof woof" instead of "This animal makes a sound".

```dart
void main() {
  Dog dog = Dog('Goldy');
  dog.makeSound(); // woof woof
}
```

> [!info] 
>
> The word `@override` is actually optional in Dart. As long as you override correctly, it's not technically needed. However, it is a good practice, because it allows the linter to catch any issues when overriding improperly, and makes it more clear for your future self and other developers which methods are overriden.

## Assignment

A `Receipt` is a specific type of `Document`, but saving it should have different behavior: it should be logged for accounting purposes instead of just saving to a file.

In the `Receipt` class, override the `save()` method inherited from `Document`. Add the `@override` annotation above the method, and implement it to print `"Saving the receipt to the accounting system..."`.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/method_override.dart`. Tests: `test/method_override_test.dart`.

---

[← Course overview](../../../README.md)
