# Benefits of DIP

The **Dependency Inversion Principle (DIP)** promotes flexibility and maintainability by ensuring high-level modules aren’t tightly coupled to low-level modules. Instead, both should depend on abstractions, like interfaces.

This separation makes code easier to modify without breaking dependent modules. It also enhances testability, as mock implementations can replace real dependencies during testing.

```dart
// Without DIP
class Light {
  void turnOn() {}
}

class Switch {
  Light light = Light();
  void operate() {
    light.turnOn();
  }
}

// With DIP
abstract class Switchable {
  void turnOn();
}

class Light implements Switchable {
  void turnOn() {}
}

class Switch {
  Switchable device;
  Switch(this.device);
  void operate() {
    device.turnOn();
  }
}
```

> [!tip]
> Using interfaces allows swapping out implementations effortlessly, adapting to changes without touching the high-level code.

## Matching

Sort each item into the right category: **High-Level Module**, **Abstraction**, **Low-Level Module**

- DIP Interface
- Light
- Light With Interface
- Switch
- Switch With DIP
- Switchable

<details>
<summary>Answer</summary>

**High-Level Module**
- Switch
- Switch With DIP

**Abstraction**
- Switchable
- DIP Interface

**Low-Level Module**
- Light
- Light With Interface

</details>

---

[← Course overview](../../../README.md)
