# When to Use UART

# When to Use UART

UART shines for **point-to-point** links between exactly two devices. GPS modules, Bluetooth adapters, and serial debug consoles all typically use UART.

Its strength is simplicity -- just two wires, no clock, no addressing. But that simplicity is also its limit: UART only connects *two* devices at a time. If you need to talk to a dozen sensors on the same bus, you'll want SPI or I2C instead.

## Quiz

**1. What type of connection is UART best suited for?**

- A) Connecting dozens of sensors on a shared bus
- B) Point-to-point links between exactly two devices
- C) High-speed data transfer to displays
- D) Networking multiple microcontrollers together

<details>
<summary>Answer</summary>

- B) Point-to-point links between exactly two devices

UART shines for point-to-point links between exactly two devices, such as GPS modules, Bluetooth adapters, and serial debug consoles.

</details>

**2. Which of the following is a limitation of UART?**

- A) It requires a clock wire
- B) It uses too many wires
- C) It can only connect two devices at a time
- D) It cannot send data bidirectionally

<details>
<summary>Answer</summary>

- C) It can only connect two devices at a time

UART's simplicity is also its limit -- it only connects two devices at a time. For communicating with many devices on the same bus, SPI or I2C are better choices.

</details>

**3. Which device would typically use UART for communication?**

- A) An SD card reader
- B) A GPS module
- C) A chain of LED strips
- D) An array of temperature sensors

<details>
<summary>Answer</summary>

- B) A GPS module

GPS modules, Bluetooth adapters, and serial debug consoles all typically use UART because they involve simple point-to-point communication between two devices.

</details>

---

[← Course overview](../../../README.md)
