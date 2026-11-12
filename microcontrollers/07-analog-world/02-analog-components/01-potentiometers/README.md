# Potentiometers

# Potentiometers

A **potentiometer** (or "pot") is a knob-controlled variable resistor with three pins: power, ground, and a middle **wiper** pin that outputs a voltage proportional to the knob's position.

Wire the wiper to one of your MCP3008 channels, and you get a number that changes as you turn the knob. All the way left reads near 0, all the way right reads near 65535 (the raw 16-bit value the library returns). It's the simplest way to watch analog-to-digital conversion happen in real time.

## Quiz

**1. What does the middle pin (wiper) of a potentiometer output?**

- A) A fixed 3.3V reference voltage
- B) A voltage proportional to the knob's position
- C) A digital HIGH or LOW signal
- D) A current proportional to temperature

<details>
<summary>Answer</summary>

- B) A voltage proportional to the knob's position

The wiper pin outputs a voltage that changes proportionally as you turn the knob. All the way to one side reads near 0, and all the way to the other reads near the maximum value.

</details>

**2. How many pins does a potentiometer have?**

- A) Two
- B) Three
- C) Four
- D) One

<details>
<summary>Answer</summary>

- B) Three

A potentiometer has three pins: one for power, one for ground, and a middle wiper pin that outputs the variable voltage.

</details>

**3. When the potentiometer knob is turned all the way to one extreme, the raw 16-bit value reads near:**

- A) 1,024
- B) 4,096
- C) 65,535
- D) 255

<details>
<summary>Answer</summary>

- C) 65,535

The Adafruit library returns a raw 16-bit value, so the maximum reading is near 65,535 (2^16 - 1) when the knob is turned all the way to one side.

</details>

---

[← Course overview](../../../README.md)
