# Power Rails

# Power Rails

The long strips running along a breadboard's edges are **power rails**. Unlike the short rows in the middle, each rail connects all the way down the board's length.

The red-marked rail is for voltage (connect it to your Pi's 3.3V pin). The blue-marked rail is for ground (connect it to a GND pin). Once wired, any component on the board can tap into power or ground by jumping a wire to the nearest rail. There's no need to run a separate wire back to the Pi for each component.

> [!tip] Some larger breadboards split the rail in the middle. Check continuity or bridge the gap with a jumper wire.

## Quiz

**1. How do power rails differ from the short rows in the middle of a breadboard?**

- A) Power rails only connect 5 holes like the short rows
- B) Power rails connect all the way down the board's length
- C) Power rails are not electrically connected at all
- D) Power rails only work with 5V, not 3.3V

<details>
<summary>Answer</summary>

- B) Power rails connect all the way down the board's length

Unlike the short rows in the middle that connect only 5 holes, each power rail connects all the way down the board's length, making it easy for any component to tap into power or ground.

</details>

**2. Which Pi pin should you connect to the red-marked power rail?**

- A) A GPIO output pin
- B) A GND pin
- C) The 3.3V pin
- D) The SDA pin

<details>
<summary>Answer</summary>

- C) The 3.3V pin

The red-marked rail is for voltage, so connect it to the Pi's 3.3V pin. The blue-marked rail is for ground and connects to a GND pin.

</details>

**3. What should you check on some larger breadboards?**

- A) Whether the short rows have more than 5 holes
- B) Whether the power rail is split in the middle
- C) Whether the breadboard requires soldering
- D) Whether the breadboard supports 5V only

<details>
<summary>Answer</summary>

- B) Whether the power rail is split in the middle

Some larger breadboards split the power rail in the middle. You should check continuity or bridge the gap with a jumper wire to ensure the full rail is connected.

</details>

---

[← Course overview](../../../README.md)
