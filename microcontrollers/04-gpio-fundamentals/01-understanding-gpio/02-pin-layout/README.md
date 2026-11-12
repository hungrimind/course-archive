# Pin Layout

# Pin Layout

The Raspberry Pi has a **40-pin header**: two rows of 20 pins each. Not all of them are GPIO. The header includes **power pins** (3.3V and 5V), **ground pins**, and the actual GPIO pins you'll control with code.

Pin 1 is at the end closest to the board's corner, marked on most Pi diagrams. Power and ground pins are fixed. They always supply voltage or provide a return path. The remaining pins are your GPIO pins, each with a specific number you'll reference in code.

> [!tip] Keep a pinout diagram handy. Searching "Raspberry Pi pinout" gives you an interactive reference at pinout.xyz.

## Exercise: Map the Pins

Identify the power and ground pins on the Raspberry Pi GPIO header. Drag the correct labels onto the blank pins.

Label options: 3.3V, 5V, GND, GPIO4, GPIO17

| Pin | Label |
|---|---|
| 1 | **?** |
| 2 | **?** |
| 3 | GPIO2 (SDA1) |
| 4 | 5V |
| 5 | GPIO3 (SCL1) |
| 6 | **?** |
| 7 | GPIO4 |
| 8 | GPIO14 (TXD) |
| 9 | **?** |
| 10 | GPIO15 (RXD) |
| 11 | GPIO17 |
| 12 | GPIO18 (PWM0) |
| 13 | GPIO27 |
| 14 | **?** |
| 15 | GPIO22 |
| 16 | GPIO23 |
| 17 | 3.3V |
| 18 | GPIO24 |
| 19 | GPIO10 (MOSI) |
| 20 | GND |
| 21 | GPIO9 (MISO) |
| 22 | GPIO25 |
| 23 | GPIO11 (SCLK) |
| 24 | GPIO8 (CE0) |
| 25 | GND |
| 26 | GPIO7 (CE1) |
| 27 | ID_SD |
| 28 | ID_SC |
| 29 | GPIO5 |
| 30 | GND |
| 31 | GPIO6 |
| 32 | GPIO12 (PWM0) |
| 33 | GPIO13 (PWM1) |
| 34 | GND |
| 35 | GPIO19 (MISO) |
| 36 | GPIO16 |
| 37 | GPIO26 |
| 38 | GPIO20 (MOSI) |
| 39 | GND |
| 40 | GPIO21 (SCLK) |

<details>
<summary>Answer</summary>

- Pin 1: 3.3V
- Pin 2: 5V
- Pin 6: GND
- Pin 9: GND
- Pin 14: GND

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
