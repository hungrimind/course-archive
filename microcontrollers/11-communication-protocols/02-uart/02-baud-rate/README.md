# Baud Rate

# Baud Rate

**Baud rate** is the speed of a UART connection, measured in bits per second. Common values are 9600 and 115200.

Both devices *must* use the same baud rate. If one sends at 9600 and the other listens at 115200, the receiver samples bits at the wrong moments and gets garbage. It's the most common UART debugging headache.

Each byte is wrapped in a tiny frame: a **start bit** (LOW) tells the receiver "data is coming," then 8 data bits, then a **stop bit** (HIGH) marks the end. That framing is how two devices stay in sync without a clock wire.

## True or False

**1. True or false:** Both UART devices can use different baud rates and still communicate correctly.

<details>
<summary>Answer</summary>

**False**: Both devices must use the same baud rate. If one sends at 9600 and the other listens at 115200, the receiver samples bits at the wrong moments and gets garbage data.

</details>

**2. True or false:** Each UART byte is wrapped in a frame that includes a start bit (LOW) and a stop bit (HIGH).

<details>
<summary>Answer</summary>

**True**: The start bit (LOW) tells the receiver data is coming, then 8 data bits follow, and a stop bit (HIGH) marks the end. This framing keeps two devices in sync without a clock wire.

</details>

**3. True or false:** Baud rate is measured in bytes per second.

<details>
<summary>Answer</summary>

**False**: Baud rate is measured in bits per second, not bytes per second. Common values are 9600 and 115200 bits per second.

</details>

---

[← Course overview](../../../README.md)
