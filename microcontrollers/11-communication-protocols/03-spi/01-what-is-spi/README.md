# What Is SPI?

# What Is SPI?

**SPI** (Serial Peripheral Interface) uses four wires: **SCLK** (clock), **MOSI** (data out from controller), **MISO** (data back from peripheral), and **CS** (chip select).

The big difference from UART: SPI has a dedicated clock wire. The controller generates the clock signal, and both sides read and write data in lockstep with it. No need to agree on a baud rate -- the clock *is* the timing. This synchronization allows SPI to run much faster than UART, often at several megahertz.

## Exercise: Identify the Signals

SPI uses four wires. Two are already labeled (MOSI and MISO). Identify the clock signal and the chip select line. Hint: the clock alternates regularly, and chip select goes LOW during the entire transfer.

Protocol: SPI

```
 Signal 1  _‾_‾_‾_‾_‾_‾_‾_‾_
     MOSI  _‾‾__‾‾‾___‾‾_‾__
     MISO  ____‾‾_‾_‾‾___‾‾_
 Signal 4  ‾_______________‾
```

Label options: SCLK, CS, SDA, RX

<details>
<summary>Answer</summary>

- Signal 1: SCLK
- Signal 4: CS

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
