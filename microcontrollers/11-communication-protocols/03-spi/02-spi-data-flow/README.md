# SPI Data Flow

# SPI Data Flow

SPI is **full-duplex** -- data flows in both directions at the same time. On every clock tick, the controller pushes a bit out on MOSI while simultaneously reading a bit back on MISO.

Think of it like a revolving door: something goes out and something comes in with each rotation. This makes SPI ideal for high-bandwidth peripherals like displays and SD cards, where you need to send commands *and* receive data quickly.

## Exercise: Identify the Signals

Both data lines are unlabeled. MOSI carries data FROM the controller TO the peripheral. MISO carries data back. In this exchange, the controller sends first. Identify which line is which.

Protocol: SPI

```
     SCLK  _‾_‾_‾_‾_‾_‾_‾_‾_
 Signal 2  _‾_‾‾__‾_‾‾‾__‾__
 Signal 3  __‾‾__‾_‾__‾‾__‾_
```

Label options: MOSI, MISO, TX, SCL

<details>
<summary>Answer</summary>

- Signal 2: MOSI
- Signal 3: MISO

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
