# How Buttons Work

# How Buttons Work

A **push button** is a tiny bridge. When you press it, two metal contacts touch and complete a circuit. When you release it, the bridge opens and the circuit breaks.

From the GPIO pin's perspective, a pressed button changes the voltage it sees. Your code reads that voltage change as either HIGH or LOW, which is how a physical press becomes a digital signal your program can act on.

## Exercise: Build the Circuit

Build a circuit where pressing the button lights up the LED. The button should control whether the circuit is complete.

Available components: GPIO Pin (3.3V), Push Button, LED Indicator, 220Ω Resistor

<details>
<summary>Solution</summary>

Wires:

- GPIO Pin (3.3V) (right) → Push Button (left)
- Push Button (right) → 220Ω Resistor (left)
- 220Ω Resistor (right) → LED Indicator (left)
- LED Indicator (right) → GPIO Pin (3.3V) (left)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
