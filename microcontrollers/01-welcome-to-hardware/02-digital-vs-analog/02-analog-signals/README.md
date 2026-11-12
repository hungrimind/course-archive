# Analog Signals

# Analog Signals

An **analog signal** can be any value in a range, not just on or off. *Think dimmer switch instead of light switch.*

The real world is analog. A temperature sensor doesn't output "hot" or "cold" -- it outputs a voltage that smoothly rises and falls. A light sensor gives you a value that varies with brightness. To work with these signals, a microcontroller needs to convert them into numbers your code can use, which is the job of an **ADC** (analog-to-digital converter).

> [!warning] Not all microcontroller pins can read analog signals. You'll need specific ADC-capable pins or an external ADC chip -- more on that later.

## True or False

**1. True or false:** An analog signal can only be on or off, just like a digital signal.

<details>
<summary>Answer</summary>

**False**: Unlike digital signals, an analog signal can be any value in a continuous range -- think of a dimmer switch rather than a light switch.

</details>

**2. True or false:** A microcontroller uses an ADC (analog-to-digital converter) to turn analog voltages into numbers your code can use.

<details>
<summary>Answer</summary>

**True**: Since microcontrollers work with digital data internally, they need an ADC to convert smoothly varying analog voltages into discrete numeric values.

</details>

**3. True or false:** Every pin on a microcontroller can read analog signals.

<details>
<summary>Answer</summary>

**False**: Not all pins support analog input. You need specific ADC-capable pins or an external ADC chip to read analog signals.

</details>

---

[← Course overview](../../../README.md)
