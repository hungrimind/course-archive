# Open vs Closed

# Open vs Closed

A **closed circuit** has a complete loop -- current flows. An **open circuit** has a gap -- current stops.

That's exactly what a light switch does. Flip it on and you *close* the circuit, completing the path. Flip it off and you *open* it, breaking the loop. The wires and bulb are still there, but without a complete path, nothing happens.

## Exercise: Build the Circuit

Build a circuit with a switch that opens and closes the path. When the switch is closed the LED lights up; when open, current stops. The 220Ω resistor keeps the LED safe at 13.6mA.

Available components: 5V Battery, 220Ω Resistor, Red LED, Switch

<details>
<summary>Solution</summary>

Wires:

- 5V Battery (+) → Switch (in)
- Switch (out) → 220Ω Resistor (in)
- 220Ω Resistor (out) → Red LED (anode)
- Red LED (cathode) → 5V Battery (-)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
