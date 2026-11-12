# A Code Example That Violates DIP

In this lesson, we'll explore a Dart code example that violates the **Dependency Inversion Principle (DIP)**. DIP states that high-level modules should not depend on low-level modules; both should depend on abstractions.

```dart
class Light {
  void turnOn() => print('Light is on');
  void turnOff() => print('Light is off');
}

class Switch {
  final Light light;

  Switch(this.light);

  void flip() {
    light.turnOn();
  }
}
```

The `Switch` class directly depends on the `Light` class, creating tight coupling. This means any change in `Light` affects `Switch`, reducing flexibility.

> [!tip]
> Decouple classes using interfaces to allow flexibility and adhere to DIP.

## Matching

Sort each item into the right category: **High-level Module**, **Low-level Module**, **Solution for DIP Violation**

- Decouple classes
- Light
- Switch
- Use an interface

<details>
<summary>Answer</summary>

**High-level Module**
- Switch

**Low-level Module**
- Light

**Solution for DIP Violation**
- Use an interface
- Decouple classes

</details>

---

[← Course overview](../../../README.md)
