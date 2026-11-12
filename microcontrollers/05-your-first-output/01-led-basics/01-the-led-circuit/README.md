# The LED Circuit

# The LED Circuit

An LED circuit has three parts: a **GPIO pin** to supply voltage, a **resistor** to limit current (so the LED doesn't burn out), and the **LED** itself.

LEDs only work in one direction. The longer leg is the **anode** (connects toward the GPIO pin), and the shorter leg is the **cathode** (connects toward ground). Wire it backwards and nothing happens -- *no light, no damage, just silence*.

> [!warning]
> Always include a resistor. Without one, too much current flows through the LED and it dies -- sometimes with a dramatic little pop.

## Exercise

On the platform this lesson ended with an interactive circuit builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
