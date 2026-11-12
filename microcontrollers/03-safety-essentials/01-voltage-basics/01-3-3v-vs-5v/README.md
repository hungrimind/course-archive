# 3.3V vs 5V

# 3.3V vs 5V

The Raspberry Pi's GPIO pins run at **3.3V**. Many sensors, displays, and modules out there are designed for **5V**. This mismatch is where beginners fry their boards.

If a 5V device sends a signal back into a GPIO pin, that pin expects at most 3.3V. The extra voltage can permanently destroy the pin, or even the entire Pi. There's no warning, no error message. It just stops working.

> [!warning]
> Never connect a 5V output directly to a GPIO pin. Use a **level shifter** or a **voltage divider** to step the signal down to 3.3V.

## True or False

**1. True or false:** It is safe to connect a 5V output directly to a Raspberry Pi GPIO pin.

<details>
<summary>Answer</summary>

**False**: GPIO pins expect at most 3.3V. Feeding 5V into them can permanently destroy the pin or the entire Pi.

</details>

**2. True or false:** A level shifter can be used to safely connect a 5V device to a 3.3V GPIO pin.

<details>
<summary>Answer</summary>

**True**: A level shifter steps the 5V signal down to 3.3V, making it safe for the GPIO pin.

</details>

**3. True or false:** If you accidentally send 5V into a 3.3V GPIO pin, the Pi will display an error message before any damage occurs.

<details>
<summary>Answer</summary>

**False**: There is no warning or error message. The pin or the entire Pi can be permanently damaged silently.

</details>

---

[← Course overview](../../../README.md)
