# Why LEDs Need Resistors

# Why LEDs Need Resistors

An LED on its own has almost no resistance. Connect it directly to a GPIO pin and it will try to draw as much current as the pin can give, which is way more than the LED or the pin can handle. The LED burns out, the pin may get damaged, and you've learned the hard way.

A **resistor** placed in series with the LED limits the current to a safe level. For a typical LED on a 3.3V GPIO pin, a **330ohm resistor** keeps current around 5mA: bright enough to see, safe enough to last.

> [!tip]
> This is the core idea behind all circuit protection: put something in the path that controls how much current flows.

## Exercise: Build the Circuit

Build a safe LED circuit. If you skip the resistor, the validation will show you why it's needed.

Available components: GPIO Pin (3.3V), 330Ω Resistor, Red LED

<details>
<summary>Solution</summary>

Wires:

- GPIO Pin (3.3V) (right) → 330Ω Resistor (left)
- 330Ω Resistor (right) → Red LED (left)
- Red LED (right) → GPIO Pin (3.3V) (left)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
