# Chip Select

# Chip Select

The **chip select (CS)** line tells a specific peripheral "this message is for you." Pulling CS **LOW** activates that device; keeping it HIGH makes the device ignore all traffic on the bus.

To connect multiple SPI devices, you share SCLK, MOSI, and MISO across all of them but run a *separate* CS wire to each one. Only the device whose CS is pulled LOW will respond. The trade-off: every additional device costs you one more GPIO pin for its CS line.

## True or False

**1. True or false:** Pulling the chip select (CS) line HIGH activates an SPI peripheral device.

<details>
<summary>Answer</summary>

**False**: Pulling CS LOW activates the device, not HIGH. Keeping CS HIGH makes the device ignore all traffic on the bus.

</details>

**2. True or false:** Multiple SPI devices share the SCLK, MOSI, and MISO wires but each requires its own separate CS wire.

<details>
<summary>Answer</summary>

**True**: To connect multiple SPI devices, you share SCLK, MOSI, and MISO across all of them but run a separate CS wire to each one, costing one GPIO pin per device.

</details>

**3. True or false:** Adding more SPI devices to a bus does not require any additional GPIO pins.

<details>
<summary>Answer</summary>

**False**: Every additional SPI device costs one more GPIO pin for its dedicated CS line. This is the trade-off of connecting multiple devices over SPI.

</details>

---

[← Course overview](../../../README.md)
