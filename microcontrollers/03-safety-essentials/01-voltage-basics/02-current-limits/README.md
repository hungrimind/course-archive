# Current Limits

# Current Limits

Each GPIO pin can supply about **16mA** of current, with a safe max of around 50mA across all pins combined. That's enough to light an LED, but not enough to drive a motor or a strip of lights.

If a component tries to draw more current than a pin can provide, you risk damaging that pin permanently. *Voltage is what you choose; current is what the component demands.* You can't negotiate with it.

When a component needs more power, don't feed it from GPIO. Use an **external power supply** and let the GPIO pin just send the control signal through a transistor or relay.

## Quiz

**1. How much current can a single Raspberry Pi GPIO pin safely supply?**

- A) 50mA
- B) 16mA
- C) 100mA
- D) 5mA

<details>
<summary>Answer</summary>

- B) 16mA

Each GPIO pin can supply about 16mA. The 50mA figure is the safe maximum across all active pins combined.

</details>

**2. What should you use when a component needs more current than a GPIO pin can provide?**

- A) A longer wire to increase current flow
- B) Multiple GPIO pins wired together
- C) An external power supply with a transistor or relay
- D) A higher-voltage SD card

<details>
<summary>Answer</summary>

- C) An external power supply with a transistor or relay

When a component demands more power, use an external power supply and let the GPIO pin send only the control signal through a transistor or relay.

</details>

**3. Which statement best describes the relationship between voltage and current?**

- A) Both voltage and current are chosen by the designer
- B) Voltage is what you choose; current is what the component demands
- C) Current is what you choose; voltage is what the component demands
- D) Voltage and current are always equal

<details>
<summary>Answer</summary>

- B) Voltage is what you choose; current is what the component demands

You set the voltage, but the component determines how much current it draws. You cannot negotiate with the component's current demand.

</details>

---

[← Course overview](../../../README.md)
