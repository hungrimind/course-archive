# Multiple Paths

# Multiple Paths

In a **parallel circuit**, components are connected side by side, each on its own separate path. Every branch gets the *full* source voltage -- not a fraction of it like in series.

The big advantage: if one path breaks, the others keep working. That's why your house is wired in parallel -- a burned-out kitchen light doesn't kill the living room.

## Exercise: Build the Circuit

Wire two LEDs in parallel so each has its own resistor. Both should light up, and removing one shouldn't affect the other. Each branch carries 20mA.

Available components: 5V Battery, 150Ω Resistor, 150Ω Resistor, Green LED, Green LED

<details>
<summary>Solution</summary>

Wires:

- 5V Battery (+) → 150Ω Resistor (in)
- 5V Battery (+) → 150Ω Resistor (in)
- 150Ω Resistor (out) → Green LED (anode)
- 150Ω Resistor (out) → Green LED (anode)
- Green LED (cathode) → 5V Battery (-)
- Green LED (cathode) → 5V Battery (-)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
