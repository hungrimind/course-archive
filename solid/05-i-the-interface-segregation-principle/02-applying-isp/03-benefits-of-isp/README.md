# Benefits of ISP

Reducing code complexity is a key benefit of the **Interface Segregation Principle (ISP)**. By splitting large interfaces into smaller, specific ones, each class only implements methods it actually uses. This results in cleaner, more understandable code.

Improved maintainability follows naturally. With smaller interfaces, changes in one part of the system are less likely to affect unrelated parts. This minimizes the risk of introducing bugs during updates.

ISP also enhances flexibility. By allowing classes to implement only the interfaces they need, it's easier to swap or extend functionalities without touching existing code.

```dart
abstract class Printer {
  void printDocument();
}

abstract class Scanner {
  void scanDocument();
}

class MultiFunctionPrinter implements Printer, Scanner {
  void printDocument() {/*...*/}
  void scanDocument() {/*...*/}
}
```

> [!tip]
> Breaking down interfaces encourages designing systems that are easier to test and adapt.

## Matching

Sort each item into the right category: **Reducing Code Complexity**, **Improved Maintainability**, **Enhanced Flexibility**

- Cleaner code
- Easier to extend
- Implement necessary interfaces
- Less risk of bugs
- Split interfaces
- Unrelated parts unaffected

<details>
<summary>Answer</summary>

**Reducing Code Complexity**
- Split interfaces
- Cleaner code

**Improved Maintainability**
- Less risk of bugs
- Unrelated parts unaffected

**Enhanced Flexibility**
- Easier to extend
- Implement necessary interfaces

</details>

---

[← Course overview](../../../README.md)
