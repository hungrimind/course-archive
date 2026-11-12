# What Is SPI?

# What Is SPI?

**SPI** (Serial Peripheral Interface) uses four wires: **SCLK** (clock), **MOSI** (data out from controller), **MISO** (data back from peripheral), and **CS** (chip select).

The big difference from UART: SPI has a dedicated clock wire. The controller generates the clock signal, and both sides read and write data in lockstep with it. No need to agree on a baud rate -- the clock *is* the timing. This synchronization allows SPI to run much faster than UART, often at several megahertz.

## Exercise

On the platform this lesson ended with an interactive signal-matching exercise. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
