# A Code Example That Violates ISP

A **violation of the Interface Segregation Principle (ISP)** occurs when a class is forced to implement interfaces it doesn't use. This leads to "fat" interfaces and can make code harder to maintain.

```dart
abstract class Printer {
  void printDocument();
  void scanDocument();
  void faxDocument(); // Not all printers need this
}

class BasicPrinter implements Printer {
  @override
  void printDocument() {
    // Print implementation
  }

  @override
  void scanDocument() {
    // Scan implementation
  }

  @override
  void faxDocument() {
    throw UnimplementedError(); // BasicPrinter can't fax
  }
}
```

Here, `BasicPrinter` is forced to implement `faxDocument`, even though it doesn't support faxing. This makes the code less flexible and harder to maintain, as changes in `Printer` affect all implementing classes.

## Quiz

**1. What problem does the Interface Segregation Principle (ISP) aim to solve?**

- A) The duplication of code across different classes.
- B) The need for classes to implement only methods that are essential to their roles.
- C) The integration of too many classes in a single application.
- D) The redundancy of interface definitions in programming languages.

<details>
<summary>Answer</summary>

- B) The need for classes to implement only methods that are essential to their roles.

</details>

**2. Why is the implementation of 'faxDocument' in 'BasicPrinter' considered a violation of ISP?**

- A) Because 'BasicPrinter' should not perform any document-related tasks.
- B) Because 'BasicPrinter' doesn't support faxing, and thus shouldn't implement a method it doesn't use.
- C) Because the 'faxDocument' method lacks a corresponding method for printing.
- D) Because 'BasicPrinter' also needs to implement scanning alongside faxing.

<details>
<summary>Answer</summary>

- B) Because 'BasicPrinter' doesn't support faxing, and thus shouldn't implement a method it doesn't use.

</details>

**3. Given the lesson, which programming adjustment best aligns with ISP?**

- A) Create separate interfaces for each function such as IPrinter, IScanner, and IFaxer.
- B) Implement all functions inside a single, comprehensive interface.
- C) Remove the 'faxDocument' method from the interface altogether.
- D) Merge all classes into a single class to simplify the code structure.

<details>
<summary>Answer</summary>

- A) Create separate interfaces for each function such as IPrinter, IScanner, and IFaxer.

</details>

---

[← Course overview](../../../README.md)
