# What Is I2C?

# What Is I2C?

**I2C** (Inter-Integrated Circuit, pronounced "eye-squared-see") connects up to 127 devices using just two wires: **SDA** (data) and **SCL** (clock).

Instead of a dedicated chip select wire per device like SPI, I2C uses **addresses**. Every device on the bus has a unique address, and the controller includes that address at the start of each message. Only the device with the matching address responds. Two wires, dozens of devices -- that's the I2C advantage.

## Exercise

On the platform this lesson ended with an interactive signal-matching exercise. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
