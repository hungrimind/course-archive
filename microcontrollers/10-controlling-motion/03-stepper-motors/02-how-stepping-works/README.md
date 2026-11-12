# How Stepping Works

# How Stepping Works

A stepper has multiple coils, and you energize them in a specific **sequence** to rotate the shaft one step at a time.

In **full stepping**, you activate one coil at a time -- coil A, then B, then C, then D, repeat. Each switch is one step. This gives you maximum torque per step.

**Half stepping** alternates between energizing one coil and two coils at once (A, then A+B, then B, then B+C...). This doubles your resolution -- 400 steps per revolution instead of 200 -- but each step has slightly less holding force since the single-coil positions are weaker.

## True or False

**1. True or false:** In full stepping mode, two coils are energized simultaneously to move the shaft one step.

<details>
<summary>Answer</summary>

**False**: In full stepping, only one coil is activated at a time -- coil A, then B, then C, then D. Each switch from one coil to the next is one step.

</details>

**2. True or false:** Half stepping doubles the step resolution from 200 to 400 steps per revolution.

<details>
<summary>Answer</summary>

**True**: Half stepping alternates between energizing one coil and two coils at once, which doubles the number of steps from 200 to 400 per revolution.

</details>

**3. True or false:** Half stepping provides more holding force per step than full stepping.

<details>
<summary>Answer</summary>

**False**: Half stepping actually has slightly less holding force at the single-coil positions, since those positions are weaker than the full-step positions.

</details>

**4. True or false:** A stepper motor requires its coils to be energized in a specific sequence to rotate.

<details>
<summary>Answer</summary>

**True**: The coils must be energized in a particular order (e.g., A, B, C, D) to create the rotating magnetic field that moves the shaft step by step.

</details>

---

[← Course overview](../../../README.md)
