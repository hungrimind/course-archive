# High-Level vs. Low-Level Modules

High-level and low-level modules are key concepts in the **Dependency Inversion Principle (DIP)**. High-level modules define the program's core logic and policies, while low-level modules handle details like database access or UI. 

DIP suggests that high-level modules should not depend on low-level modules. Instead, both should depend on abstractions, like interfaces.

```dart
// High-level module
class OrderService {
  final PaymentProcessor _paymentProcessor;
  
  OrderService(this._paymentProcessor);

  void processOrder() {
    _paymentProcessor.processPayment();
  }
}

// Low-level module
class PayPalProcessor implements PaymentProcessor {
  void processPayment() {
    print('Processing payment with PayPal');
  }
}
```

Here, `OrderService` (high-level) depends on `PaymentProcessor` (abstraction), not directly on `PayPalProcessor` (low-level).

## Matching

Sort each item into the right category: **High-level Modules**, **Low-level Modules**, **Abstractions**

- Defines core logic
- Handles details
- Interfaces
- OrderService
- PayPalProcessor
- PaymentProcessor

<details>
<summary>Answer</summary>

**High-level Modules**
- Defines core logic
- OrderService

**Low-level Modules**
- Handles details
- PayPalProcessor

**Abstractions**
- Interfaces
- PaymentProcessor

</details>

---

[← Course overview](../../../README.md)
