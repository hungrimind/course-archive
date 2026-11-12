# I2C Addresses

# I2C Addresses

Every I2C device has a **7-bit address**, usually written in hex like `0x48` or `0x3C`. The manufacturer picks the address, so a temperature sensor and a display can share the same bus without confusion.

An **I2C scan** tries every possible address and reports which ones respond. It's the first thing to run when you wire up a new device -- it confirms the connection works and reveals the device's address.

```python
import smbus2

bus = smbus2.SMBus(1)
for addr in range(0x03, 0x78):
    try:
        bus.read_byte(addr)
        print(f"Found device at {hex(addr)}")
    except OSError:
        pass
```

## Fill in the Blanks

Fill in the blanks:

```
Every I2C device has a __(1)__ address, usually written in hex like 0x48. The __(2)__ picks the address for each device. An I2C __(3)__ tries every possible address and reports which ones respond.
```

<details>
<summary>Answer</summary>

1. `7-bit`
2. `manufacturer`
3. `scan`

</details>

---

[← Course overview](../../../README.md)
