# Implementing Specific Interfaces

Implementing specific interfaces means creating smaller, focused **interfaces** that a class can implement as needed. This adheres to the Interface Segregation Principle (ISP), which encourages using multiple, client-specific interfaces rather than a single 'fat' one.

In Dart, you define an interface using an abstract class. Each interface should represent a distinct role or capability.

```dart
abstract class Printer {
  void printDocument();
}

abstract class Scanner {
  void scanDocument();
}

class MultiFunctionDevice implements Printer, Scanner {
  @override
  void printDocument() {
    print('Printing document...');
  }

  @override
  void scanDocument() {
    print('Scanning document...');
  }
}
```

Here, `MultiFunctionDevice` implements only the interfaces it requires, keeping the design clean and flexible.

## Assignment

Implement the `printDocument` method in the `SimplePrinter`, `MultiFunctionDevice`, and `scanDocument` method in the `SimpleScanner` class.

Your implementation should:
- For `SimplePrinter`, print exactly "SimplePrinter: Printing document".
- For `SimpleScanner`, print exactly "SimpleScanner: Scanning document".
- For `MultiFunctionDevice`, print exactly "MultiFunctionDevice: Printing document" and "MultiFunctionDevice: Scanning document" when methods are called.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/interface_segregation.dart`. Tests: `test/interface_segregation_test.dart`.

---

[← Course overview](../../../README.md)
