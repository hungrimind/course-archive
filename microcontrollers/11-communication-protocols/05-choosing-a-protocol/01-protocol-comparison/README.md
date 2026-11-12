# Protocol Comparison

# Protocol Comparison

**UART** -- 2 wires, no clock, connects exactly two devices. Best for simple point-to-point links like GPS or Bluetooth modules.

**SPI** -- 4+ wires (extra CS per device), fastest of the three, full-duplex. Best for high-bandwidth peripherals like displays and SD cards.

**I2C** -- 2 wires, address-based, up to 127 devices. Best when you need many sensors on minimal wiring.

> [!tip] When in doubt: need speed? SPI. Need simplicity with many devices? I2C. Just talking to one module? UART.

## Exercise: Identify the Signals

This is an SPI communication. Identify the three unlabeled signal lines by examining their timing patterns. The clock (SCLK) is already labeled.

Protocol: SPI

```
     SCLK  _‾_‾_‾_‾_‾_‾_‾_‾_
 Signal 2  __‾‾__‾‾‾‾____‾‾_
 Signal 3  ____‾‾‾‾__‾‾_____
 Signal 4  ‾_______________‾
```

Label options: MOSI, MISO, CS, SDA, TX

<details>
<summary>Answer</summary>

- Signal 2: MOSI
- Signal 3: MISO
- Signal 4: CS

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
