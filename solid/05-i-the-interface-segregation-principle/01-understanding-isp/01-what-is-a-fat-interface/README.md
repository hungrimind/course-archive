# What is a 'Fat' Interface?

A **'Fat' Interface** is an interface with too many methods, forcing implementing classes to include functionality they may not need. This violates the Interface Segregation Principle (ISP) because it burdens classes with unnecessary methods, making them harder to maintain and understand.

```dart
interface Printer {
  void printDocument();
  void scanDocument();
  void faxDocument();
}

class BasicPrinter implements Printer {
  void printDocument() { /* implementation */ }
  void scanDocument() { /* not needed but must be implemented */ }
  void faxDocument() { /* not needed but must be implemented */ }
}
```

Here, `BasicPrinter` must implement all methods even if it doesn't need `scanDocument` or `faxDocument`. This can lead to bloated code and increased maintenance effort.

> [!warning]
> Avoid fat interfaces to prevent forcing classes to implement irrelevant methods.

## Matching

Sort each item into the right category: **Examples of Fat Interfaces**, **Effects of Fat Interfaces**, **Interface Segregation Solutions**

- Bloated code
- Harder maintenance
- Printer interface
- Relevant methods only
- Separate interfaces
- Too many methods

<details>
<summary>Answer</summary>

**Examples of Fat Interfaces**
- Printer interface
- Too many methods

**Effects of Fat Interfaces**
- Bloated code
- Harder maintenance

**Interface Segregation Solutions**
- Separate interfaces
- Relevant methods only

</details>

---

[← Course overview](../../../README.md)
