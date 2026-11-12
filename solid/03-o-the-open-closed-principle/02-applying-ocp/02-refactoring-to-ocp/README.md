# Refactoring to OCP

## Refactoring to OCP

Refactoring to the **Open/Closed Principle** means making your classes open for extension but closed for modification. This allows you to add new functionality without altering existing code.

Imagine a class that calculates discounts for different customer types. Directly modifying this class each time a new discount type is needed violates OCP.

```dart
class DiscountCalculator {
  double calculate(String customerType, double price) {
    if (customerType == 'Regular') {
      return price * 0.9;
    } else if (customerType == 'VIP') {
      return price * 0.8;
    }
    return price;
  }
}
```

Refactor by introducing an interface for discounts, allowing new types to be added without altering the core logic.

```dart
abstract class Discount {
  double apply(double price);
}

class RegularDiscount implements Discount {
  double apply(double price) => price * 0.9;
}

class VIPDiscount implements Discount {
  double apply(double price) => price * 0.8;
}
```

> [!tip]
> Use interfaces or abstract classes to define extensible behaviors, keeping base classes unchanged.

## Assignment

Refactor the `RegularDiscount`, `VIPDiscount`, and `NoDiscount` classes to apply the correct discount logic.

Your implementation should:
- In `RegularDiscount`, apply a 10% discount to the given price and return the result.
- In `VIPDiscount`, apply a 20% discount to the given price and return the result.
- In `NoDiscount`, return the original price without any discount.

The output when running the main function should be:
```
Regular: 90.0
VIP: 80.0
None: 100.0
```

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/open_closed_principle.dart`. Tests: `test/open_closed_principle_test.dart`.

---

[← Course overview](../../../README.md)
