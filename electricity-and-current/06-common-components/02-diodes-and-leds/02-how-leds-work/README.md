# How LEDs Work

# How LEDs Work

An **LED** (light-emitting diode) is a special diode that produces light when current flows through it. Different materials inside the LED produce different colors -- red, green, blue, white, and more.

LEDs are efficient and long-lasting compared to traditional bulbs, which is why they've taken over everything from phone screens to streetlights. But they're delicate -- *always* pair an LED with a resistor, or too much current will destroy it almost immediately.

## Exercise: Build the Circuit

Wire the blue LED with a resistor so it lights up safely. The 3.3V battery barely exceeds the LED's 3V forward voltage, so the 100Ω resistor keeps current at a gentle 3mA.

Available components: 3.3V Battery, 100Ω Resistor, Blue LED

<details>
<summary>Solution</summary>

Wires:

- 3.3V Battery (+) → 100Ω Resistor (in)
- 100Ω Resistor (out) → Blue LED (anode)
- Blue LED (cathode) → 3.3V Battery (-)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
