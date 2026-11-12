# Light Sensors

# Light Sensors

A **photoresistor** (or LDR) changes its resistance based on how much light hits it. Bright light makes the resistance drop; darkness makes it climb.

Unlike a potentiometer that has a built-in wiper voltage, a photoresistor is just a two-pin resistor -- it doesn't output a voltage on its own. You pair it with a fixed resistor in a **voltage divider** circuit so the changing resistance produces a changing voltage your ADC can read.

> [!tip] Higher ADC readings can mean brighter or darker depending on how you wire the divider. Check your wiring if the values seem backwards.

## True or False

**1. True or false:** A photoresistor outputs a voltage on its own, just like a potentiometer's wiper pin.

<details>
<summary>Answer</summary>

**False**: A photoresistor is just a two-pin resistor -- it doesn't output a voltage on its own. Unlike a potentiometer with a built-in wiper voltage, you need to pair a photoresistor with a fixed resistor in a voltage divider circuit to produce a readable voltage.

</details>

**2. True or false:** Bright light causes a photoresistor's resistance to drop.

<details>
<summary>Answer</summary>

**True**: A photoresistor (LDR) has an inverse relationship between light and resistance. More light hitting it makes the resistance decrease, while darkness causes the resistance to increase.

</details>

**3. True or false:** Higher ADC readings from a photoresistor circuit always mean brighter light.

<details>
<summary>Answer</summary>

**False**: Whether higher readings mean brighter or darker depends on how you wire the voltage divider. The photoresistor can be placed as either R1 or R2 in the divider, which reverses the relationship. Always check your wiring if values seem backwards.

</details>

---

[← Course overview](../../../README.md)
