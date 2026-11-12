# Serial vs Parallel

# Serial vs Parallel

**Parallel** communication sends multiple bits at the same time, each on its own wire. An 8-bit parallel bus uses 8 data wires to transmit a full byte in one shot.

**Serial** communication sends bits one after another on a single data wire. It sounds slower, but fewer wires means simpler circuits, fewer things to go wrong, and cheaper cables. At high speeds, keeping 8 parallel wires perfectly synchronized actually becomes *harder* than just sending bits really fast on one wire.

That's why every modern microcontroller protocol you'll use -- UART, SPI, I2C -- is serial.

## Matching

Sort each item into the right category: **Serial Communication**, **Parallel Communication**

- Harder to keep synchronized at high speeds
- Sends bits one after another on a single data wire
- Sends multiple bits at the same time on separate wires
- Simpler circuits and cheaper cables
- Used by UART, SPI, and I2C
- Uses 8 data wires for one byte at a time

<details>
<summary>Answer</summary>

**Serial Communication**
- Sends bits one after another on a single data wire
- Simpler circuits and cheaper cables
- Used by UART, SPI, and I2C

**Parallel Communication**
- Sends multiple bits at the same time on separate wires
- Uses 8 data wires for one byte at a time
- Harder to keep synchronized at high speeds

</details>

---

[← Course overview](../../../README.md)
