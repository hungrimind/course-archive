# What Is PWM?

# What Is PWM?

**Pulse Width Modulation** flips a pin on and off thousands of times per second. By controlling how much of each cycle the pin stays HIGH, you fake voltages between 0V and 3.3V.

A GPIO pin can only be fully on or fully off -- it has no "half power" setting. PWM is the workaround. *It switches so fast that the component behaves as if it's getting a steady, reduced voltage.* Your blink loop was already toggling a pin -- PWM just does it fast enough that your eye can't tell.

## Quiz

**1. What does PWM stand for?**

- A) Pulse Width Modulation
- B) Power Width Management
- C) Pin Wave Modulation
- D) Pulse Watt Measurement

<details>
<summary>Answer</summary>

- A) Pulse Width Modulation

PWM stands for Pulse Width Modulation -- it rapidly switches a pin on and off to simulate voltages between 0V and 3.3V.

</details>

**2. Why is PWM needed on a GPIO pin?**

- A) GPIO pins can only output specific preset voltages
- B) GPIO pins can only be fully on or fully off
- C) GPIO pins are too slow to drive LEDs directly
- D) GPIO pins require an external clock signal

<details>
<summary>Answer</summary>

- B) GPIO pins can only be fully on or fully off

A GPIO pin has no 'half power' setting -- it's either HIGH or LOW. PWM works around this by switching so fast that the component behaves as if it's receiving a steady, reduced voltage.

</details>

**3. How does PWM create the illusion of a lower voltage?**

- A) It reduces the pin's maximum voltage output
- B) It adds a resistor to the circuit automatically
- C) It switches the pin on and off thousands of times per second
- D) It uses a secondary low-voltage pin

<details>
<summary>Answer</summary>

- C) It switches the pin on and off thousands of times per second

PWM flips the pin on and off so fast that the component -- and your eyes -- perceive a steady, reduced voltage rather than rapid blinking.

</details>

---

[← Course overview](../../../README.md)
