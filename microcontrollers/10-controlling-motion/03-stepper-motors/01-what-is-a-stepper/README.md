# What Is a Stepper?

# What Is a Stepper?

A **stepper motor** divides a full rotation into discrete, equal steps. Each electrical pulse moves the shaft by a fixed angle -- commonly **1.8 degrees**, which means 200 pulses for one full revolution.

Unlike a DC motor that spins freely when powered, a stepper *only* moves when you tell it to. Send 50 pulses and the shaft rotates exactly 90 degrees, every time. This gives you precise positional control without needing a feedback circuit like servos have -- the precision is built into the motor's design.

## Quiz

**1. How does a stepper motor achieve precise positioning without a feedback circuit?**

- A) It uses a built-in encoder to measure rotation
- B) Each electrical pulse moves the shaft by a fixed angle, so precision is built into the motor's design
- C) It relies on an external sensor to track position
- D) It spins freely and uses braking to stop at the right position

<details>
<summary>Answer</summary>

- B) Each electrical pulse moves the shaft by a fixed angle, so precision is built into the motor's design

A stepper divides a full rotation into discrete, equal steps. Each pulse moves the shaft by a fixed angle (commonly 1.8 degrees), so the precision comes from the motor's physical design rather than feedback.

</details>

**2. How many pulses does a typical stepper motor with 1.8-degree steps need for one full revolution?**

- A) 100 pulses
- B) 360 pulses
- C) 200 pulses
- D) 50 pulses

<details>
<summary>Answer</summary>

- C) 200 pulses

At 1.8 degrees per step, it takes 360 / 1.8 = 200 pulses to complete a full 360-degree revolution.

</details>

**3. How many pulses would a 1.8-degree stepper need to rotate exactly 90 degrees?**

- A) 25 pulses
- B) 50 pulses
- C) 90 pulses
- D) 100 pulses

<details>
<summary>Answer</summary>

- B) 50 pulses

At 1.8 degrees per step, rotating 90 degrees requires 90 / 1.8 = 50 pulses.

</details>

---

[← Course overview](../../../README.md)
