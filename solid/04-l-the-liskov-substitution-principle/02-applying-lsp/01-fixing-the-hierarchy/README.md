# Fixing the Hierarchy

Fixing hierarchy issues involves ensuring subclasses can replace their parent classes without altering the program's behavior, aligning with the **Liskov Substitution Principle (LSP)**. If a subclass cannot honor this, it may be due to improper inheritance.

Consider a case where a `Bird` superclass has a `fly()` method, but a `Penguin` subclass cannot fly. This violates LSP because `Penguin` instances cannot replace `Bird` instances.

```dart
class Bird {
  void fly() {
    // Fly implementation
  }
}

class Penguin extends Bird {
  @override
  void fly() {
    throw Exception("Penguins can't fly!");
  }
}
```

To fix this, refactor the hierarchy: create a `FlyingBird` subclass for birds that can fly, and separate `Penguin` from it.

> [!tip]
> Use interfaces or abstract classes to define specific behaviors, like flying, to better structure your hierarchy.

## Assignment

Refactor the `Eagle` and `describeFlight` methods in the provided code to comply with the Liskov Substitution Principle.

Your implementation should:
- In the `Eagle` class, return the string '<name> the Eagle flies.' when the `fly()` method is called.
- In the `describeFlight` function, return '<name> the Penguin does not fly.' for `Penguin` instances and call the `fly()` method for `FlyingBird` instances.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/lsp_hierarchy.dart`. Tests: `test/lsp_hierarchy_test.dart`.

---

[← Course overview](../../../README.md)
