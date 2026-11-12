# Sizing an LED Resistor

# Sizing an LED Resistor

Here's Ohm's Law in action. A typical LED needs about **20mA** and drops around **2V** across itself. With a 5V supply, the resistor must drop the remaining 3V.

R = 3V / 0.02A = **150 ohms**. Grab a 150-ohm resistor, wire it in series with the LED, and you're done. This is *the* most common calculation in hobby electronics -- and it's just R = V / I.

## Exercise: Build the Circuit

Pick the right resistor to safely light the LED at its rated current of 20mA with the 5V battery. Use Ohm’s Law: R = V / I. The LED drops 2V, so the resistor must handle the remaining 3V. Only one resistor gives exactly 20mA.

Available components: 5V Battery, 47Ω Resistor, 150Ω Resistor, 1kΩ Resistor, Red LED

<details>
<summary>Solution</summary>

Wires:

- 5V Battery (+) → 150Ω Resistor (in)
- 150Ω Resistor (out) → Red LED (anode)
- Red LED (cathode) → 5V Battery (-)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
