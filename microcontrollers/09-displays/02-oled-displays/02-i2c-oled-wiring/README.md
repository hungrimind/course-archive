# I2C OLED Wiring

# I2C OLED Wiring

Most small OLED modules (like the popular **SSD1306**) connect over I2C with just four wires: **VCC**, **GND**, **SDA**, and **SCL**. If you've already wired an I2C sensor, the setup is identical -- same two data lines, same bus.

The default I2C address is usually `0x3C`, though some modules use `0x3D`. You can have an OLED and other I2C devices sharing the same SDA/SCL lines, since each device has its own address.

> [!warning]
> Double-check whether your OLED module needs 3.3V or 5V. Many SSD1306 boards accept both, but feeding 5V to a 3.3V-only module will damage it.

## Exercise: Map the Pins

An I2C OLED display needs four connections: power, ground, SDA, and SCL. Find these pins on the GPIO header.

Label options: 3.3V, GPIO2 (SDA1), GPIO3 (SCL1), GND, 5V, GPIO4

| Pin | Label |
|---|---|
| 1 | **?** |
| 2 | 5V |
| 3 | **?** |
| 4 | 5V |
| 5 | **?** |
| 6 | **?** |
| 7 | GPIO4 |
| 8 | GPIO14 |
| 9 | GND |
| 10 | GPIO15 |
| 11 | GPIO17 |
| 12 | GPIO18 |
| 13 | GPIO27 |
| 14 | GND |

<details>
<summary>Answer</summary>

- Pin 1: 3.3V
- Pin 3: GPIO2 (SDA1)
- Pin 5: GPIO3 (SCL1)
- Pin 6: GND

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
