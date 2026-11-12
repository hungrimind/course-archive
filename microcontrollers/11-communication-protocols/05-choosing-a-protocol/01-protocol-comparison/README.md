# Protocol Comparison

# Protocol Comparison

**UART** -- 2 wires, no clock, connects exactly two devices. Best for simple point-to-point links like GPS or Bluetooth modules.

**SPI** -- 4+ wires (extra CS per device), fastest of the three, full-duplex. Best for high-bandwidth peripherals like displays and SD cards.

**I2C** -- 2 wires, address-based, up to 127 devices. Best when you need many sensors on minimal wiring.

> [!tip] When in doubt: need speed? SPI. Need simplicity with many devices? I2C. Just talking to one module? UART.

## Exercise

On the platform this lesson ended with an interactive signal-matching exercise. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
