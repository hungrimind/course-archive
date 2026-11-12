# The H-Bridge Concept

# The H-Bridge Concept

An **H-bridge** is four switches arranged in an H shape with the motor in the middle crossbar. By closing different *pairs* of switches, you control which direction current flows through the motor.

Close the top-left and bottom-right switches, and current flows one way -- the motor spins forward. Close the top-right and bottom-left instead, and current reverses -- the motor spins backward.

Motor driver chips like the L298N or DRV8833 have H-bridges built in. You just set two GPIO pins (often called **IN1** and **IN2**) to HIGH or LOW to pick a direction.

## Quiz

**1. How is an H-bridge arranged?**

- A) Two switches in a straight line with the motor at one end
- B) Four switches in an H shape with the motor in the middle crossbar
- C) Six switches in a circle around the motor
- D) One switch connected to each motor terminal

<details>
<summary>Answer</summary>

- B) Four switches in an H shape with the motor in the middle crossbar

An H-bridge uses four switches arranged in an H shape, with the motor placed in the middle crossbar connecting the two sides.

</details>

**2. How do you reverse the direction of a motor using an H-bridge?**

- A) Increase the voltage to the motor
- B) Swap which pair of diagonal switches are closed
- C) Turn all four switches on at once
- D) Disconnect and reconnect the motor wires

<details>
<summary>Answer</summary>

- B) Swap which pair of diagonal switches are closed

Closing the top-left and bottom-right switches spins the motor one way. Closing the top-right and bottom-left switches reverses the current, spinning it the other way.

</details>

**3. What do the IN1 and IN2 GPIO pins on a motor driver chip control?**

- A) The motor's speed
- B) The motor's voltage
- C) The motor's direction
- D) The motor's braking force

<details>
<summary>Answer</summary>

- C) The motor's direction

The IN1 and IN2 pins are set to HIGH or LOW to pick which direction current flows through the H-bridge, determining the motor's rotation direction.

</details>

---

[← Course overview](../../../README.md)
