# Why LEDs Need Resistors

# Why LEDs Need Resistors

An LED on its own has almost no resistance. Connect it directly to a GPIO pin and it will try to draw as much current as the pin can give, which is way more than the LED or the pin can handle. The LED burns out, the pin may get damaged, and you've learned the hard way.

A **resistor** placed in series with the LED limits the current to a safe level. For a typical LED on a 3.3V GPIO pin, a **330ohm resistor** keeps current around 5mA: bright enough to see, safe enough to last.

> [!tip]
> This is the core idea behind all circuit protection: put something in the path that controls how much current flows.

## Exercise

On the platform this lesson ended with an interactive circuit builder. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
