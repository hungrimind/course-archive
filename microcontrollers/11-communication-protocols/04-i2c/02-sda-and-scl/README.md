# SDA and SCL

# SDA and SCL

**SCL** carries the clock signal and **SDA** carries the data, both on shared wires that every device connects to.

Both lines use **pull-up resistors** to keep them HIGH by default. When a device wants to transmit, it *pulls the line LOW*. This is called **open-drain** -- devices can only pull down, never push up. The pull-up resistor handles the "up" part.

> [!tip] This open-drain design is what lets multiple devices safely share the same two wires without electrically fighting each other.

## True or False

**1. True or false:** I2C lines use pull-up resistors to keep SDA and SCL HIGH by default.

<details>
<summary>Answer</summary>

**True**: Both SDA and SCL use pull-up resistors to keep them HIGH by default. When a device wants to transmit, it pulls the line LOW.

</details>

**2. True or false:** In the open-drain design of I2C, devices can both push a line HIGH and pull it LOW.

<details>
<summary>Answer</summary>

**False**: In an open-drain design, devices can only pull a line LOW, never push it up. The pull-up resistor handles returning the line to HIGH.

</details>

**3. True or false:** The open-drain design allows multiple I2C devices to safely share the same two wires without electrically conflicting.

<details>
<summary>Answer</summary>

**True**: Because devices can only pull lines LOW (never push HIGH), multiple devices can share SDA and SCL without electrically fighting each other.

</details>

---

[← Course overview](../../../README.md)
