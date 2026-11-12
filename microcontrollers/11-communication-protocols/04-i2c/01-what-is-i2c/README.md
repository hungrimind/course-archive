# What Is I2C?

# What Is I2C?

**I2C** (Inter-Integrated Circuit, pronounced "eye-squared-see") connects up to 127 devices using just two wires: **SDA** (data) and **SCL** (clock).

Instead of a dedicated chip select wire per device like SPI, I2C uses **addresses**. Every device on the bus has a unique address, and the controller includes that address at the start of each message. Only the device with the matching address responds. Two wires, dozens of devices -- that's the I2C advantage.

## Exercise: Identify the Signals

I2C uses just two wires. Identify the clock line (SCL) and the data line (SDA). Hint: the clock signal has a regular, repeating pattern.

Protocol: I2C

```
 Signal 1  ‾‾_‾_‾_‾_‾_‾_‾_‾_‾‾
 Signal 2  ‾__‾‾__‾__‾‾_‾_‾__‾
```

Label options: SCL, SDA, TX, MOSI

<details>
<summary>Answer</summary>

- Signal 1: SCL
- Signal 2: SDA

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
