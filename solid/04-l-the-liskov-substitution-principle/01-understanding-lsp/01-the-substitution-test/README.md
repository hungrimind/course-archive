# The Substitution Test

The **Substitution Test** is a way to check if a subclass can replace its superclass without altering the behavior of a program. This test is central to the **Liskov Substitution Principle (LSP)**.

To apply the Substitution Test, ensure that objects of a derived class can stand in for objects of the base class and still meet the base class's contract. If substituting breaks expected behavior, the subclass likely violates LSP.

```dart
class Bird {
  void fly() => print("Flying");
}

class Ostrich extends Bird {
  @override
  void fly() {
    throw Exception("Ostriches can't fly");
  }
}
```

Here, substituting `Ostrich` for `Bird` breaks the expected behavior, indicating an LSP violation. 

> [!tip]
> Use the Substitution Test to ensure subclasses honor the promises made by their superclasses.

## Assignment

Implement the `fly` method in the `Ostrich` class to throw an Exception with the message "Ostriches can't fly".

Your implementation should:
- Override the `fly` method from the `Bird` class
- Ensure that calling `substitutionTest` with an `Ostrich` instance returns "Ostrich: failed - Ostriches can't fly"

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/substitution_test.dart`. Tests: `test/substitution_test_test.dart`.

---

[← Course overview](../../../README.md)
