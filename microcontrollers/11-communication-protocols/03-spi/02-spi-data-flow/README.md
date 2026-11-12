# SPI Data Flow

# SPI Data Flow

SPI is **full-duplex** -- data flows in both directions at the same time. On every clock tick, the controller pushes a bit out on MOSI while simultaneously reading a bit back on MISO.

Think of it like a revolving door: something goes out and something comes in with each rotation. This makes SPI ideal for high-bandwidth peripherals like displays and SD cards, where you need to send commands *and* receive data quickly.

## Exercise

On the platform this lesson ended with an interactive signal-matching exercise. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
