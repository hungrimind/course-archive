# The LED Circuit

# The LED Circuit

An LED circuit has three parts: a **GPIO pin** to supply voltage, a **resistor** to limit current (so the LED doesn't burn out), and the **LED** itself.

LEDs only work in one direction. The longer leg is the **anode** (connects toward the GPIO pin), and the shorter leg is the **cathode** (connects toward ground). Wire it backwards and nothing happens -- *no light, no damage, just silence*.

> [!warning]
> Always include a resistor. Without one, too much current flows through the LED and it dies -- sometimes with a dramatic little pop.

## Exercise: Build the Circuit

Build a circuit that safely lights up the LED. Connect the GPIO pin through the resistor and LED in a complete loop.

Available components: GPIO 17 (3.3V), 220Ω Resistor, Red LED

<details>
<summary>Solution</summary>

Wires:

- GPIO 17 (3.3V) (right) → 220Ω Resistor (left)
- 220Ω Resistor (right) → Red LED (left)
- Red LED (right) → GPIO 17 (3.3V) (left)

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
