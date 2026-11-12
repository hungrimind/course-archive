# Multiple I2C Devices

# Multiple I2C Devices

Every device on an I2C bus shares the same two wires (SDA and SCL) and responds only when it hears its own address. A temperature sensor at `0x48`, a display at `0x3C`, and an accelerometer at `0x68` all coexist peacefully on one bus.

The only rule: no two devices can have the *same* address. Some modules let you change their address with a solder jumper or configuration pin, specifically so you can use two of the same sensor on one bus.

## True or False

**1. True or false:** Two I2C devices on the same bus can have the same address without causing any issues.

<details>
<summary>Answer</summary>

**False**: No two devices on the same I2C bus can have the same address. If they did, both would try to respond simultaneously, causing communication errors.

</details>

**2. True or false:** All devices on an I2C bus share the same two wires (SDA and SCL).

<details>
<summary>Answer</summary>

**True**: Every device on an I2C bus shares the same SDA and SCL wires and responds only when it hears its own unique address.

</details>

**3. True or false:** Some I2C modules let you change their address with a solder jumper or configuration pin.

<details>
<summary>Answer</summary>

**True**: Some modules allow address changes via a solder jumper or configuration pin, specifically so you can use two of the same sensor on one bus.

</details>

---

[← Course overview](../../../README.md)
