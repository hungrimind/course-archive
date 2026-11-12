# Floating Pins

# Floating Pins

When a button isn't pressed, the GPIO pin is connected to *nothing*. It's not HIGH and it's not LOW -- it's in an undefined state called **floating**.

A floating pin picks up tiny amounts of electrical noise from the environment and reads random values. One moment it's HIGH, the next it's LOW, for no reason. Your code sees phantom button presses that never happened.

> [!warning]
> Every button circuit needs something to hold the pin at a known voltage when the button is open. That something is a **pull resistor**.

## True or False

**1. True or false:** A floating pin reliably reads LOW when no button is pressed.

<details>
<summary>Answer</summary>

**False**: A floating pin is connected to nothing, so it picks up electrical noise and reads random HIGH/LOW values -- it is not reliably LOW.

</details>

**2. True or false:** Phantom button presses can occur because a floating pin picks up electrical noise from the environment.

<details>
<summary>Answer</summary>

**True**: With no defined voltage, a floating pin reads random values from ambient noise, which your code can misinterpret as real button presses.

</details>

**3. True or false:** A pull resistor is needed to hold a pin at a known voltage when the button is open.

<details>
<summary>Answer</summary>

**True**: Without a pull resistor, the pin floats when the button is not pressed. A pull resistor ensures the pin stays at a defined HIGH or LOW state.

</details>

---

[← Course overview](../../../README.md)
