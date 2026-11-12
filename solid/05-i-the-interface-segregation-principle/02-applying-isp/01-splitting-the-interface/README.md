# Splitting the Interface

Splitting a 'fat' interface into smaller, more specific interfaces aligns with the **Interface Segregation Principle (ISP)**. A 'fat' interface is one that forces implementing classes to use methods they don't need. This can lead to bloated implementations and unnecessary complexity.

In Dart, you can split a 'fat' interface by creating multiple smaller interfaces, each with a specific purpose. Implementing classes then choose the interfaces that are relevant to them.

```dart
abstract class Printer {
  void printDocument();
}

abstract class Scanner {
  void scanDocument();
}

class AllInOneMachine implements Printer, Scanner {
  @override
  void printDocument() {
    // Printing logic
  }

  @override
  void scanDocument() {
    // Scanning logic
  }
}
```

Here, `Printer` and `Scanner` are specific interfaces. The `AllInOneMachine` implements only the interfaces it needs, adhering to ISP.

> [!tip]
> Smaller interfaces reduce the risk of changes impacting unrelated parts of your code.

## Assignment

Implement the methods in the `SimplePrinter`, `AllInOneMachine`, and `FaxMachine` classes to adhere to the Interface Segregation Principle.

Your implementation should:
- In `SimplePrinter.printDocument`, return the string "SimplePrinter printed: {doc}" where {doc} is the input parameter.
- In `AllInOneMachine.printDocument`, return "AllInOne printed: {doc}".
- In `AllInOneMachine.scanDocument`, return "AllInOne scanned: {doc}".
- In `AllInOneMachine.faxDocument`, return "AllInOne faxed: {doc}".
- In `FaxMachine.faxDocument`, return "FaxMachine faxed: {doc}".

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/interface_segregation.dart`. Tests: `test/interface_segregation_test.dart`.

---

[← Course overview](../../../README.md)
