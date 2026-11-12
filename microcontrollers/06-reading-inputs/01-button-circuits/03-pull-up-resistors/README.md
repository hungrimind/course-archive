# Pull-Up Resistors

# Pull-Up Resistors

A **pull-up resistor** connects the GPIO pin to 3.3V through a resistor. When the button is open, the pin gently sits at HIGH. Press the button, and it connects the pin to ground, pulling it to LOW.

A **pull-down resistor** does the opposite -- it holds the pin at LOW by default, and pressing the button pulls it HIGH.

Either way, the pin always has a defined voltage. No more floating, no more phantom reads. The resistor is what gives your button circuit a clean, predictable resting state.

## Quiz

**1. What voltage does a GPIO pin read when using a pull-up resistor and the button is NOT pressed?**

- A) LOW (0V)
- B) HIGH (3.3V)
- C) It floats between HIGH and LOW
- D) It depends on the resistor value

<details>
<summary>Answer</summary>

- B) HIGH (3.3V)

A pull-up resistor connects the pin to 3.3V, so when the button is open (not pressed), the pin gently sits at HIGH.

</details>

**2. What happens when you press the button in a pull-up resistor circuit?**

- A) The pin stays at HIGH because the resistor holds it there
- B) The pin reads a voltage between HIGH and LOW
- C) The pin is pulled to LOW because the button connects it to ground
- D) The pin starts floating

<details>
<summary>Answer</summary>

- C) The pin is pulled to LOW because the button connects it to ground

Pressing the button connects the pin directly to ground, which overpowers the gentle pull-up to 3.3V and pulls the pin to LOW.

</details>

**3. How does a pull-down resistor differ from a pull-up resistor?**

- A) A pull-down uses a capacitor instead of a resistor
- B) A pull-down holds the pin at LOW by default; pressing the button pulls it HIGH
- C) A pull-down eliminates the need for a button entirely
- D) A pull-down resistor only works with 5V systems

<details>
<summary>Answer</summary>

- B) A pull-down holds the pin at LOW by default; pressing the button pulls it HIGH

A pull-down resistor is the opposite of a pull-up: it holds the pin at LOW when the button is open, and pressing the button pulls the pin to HIGH.

</details>

---

[← Course overview](../../../README.md)
