# I2C OLED Wiring

# I2C OLED Wiring

Most small OLED modules (like the popular **SSD1306**) connect over I2C with just four wires: **VCC**, **GND**, **SDA**, and **SCL**. If you've already wired an I2C sensor, the setup is identical -- same two data lines, same bus.

The default I2C address is usually `0x3C`, though some modules use `0x3D`. You can have an OLED and other I2C devices sharing the same SDA/SCL lines, since each device has its own address.

> [!warning]
> Double-check whether your OLED module needs 3.3V or 5V. Many SSD1306 boards accept both, but feeding 5V to a 3.3V-only module will damage it.

## Exercise

On the platform this lesson ended with an interactive pinout-mapping exercise. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
