# Resistive Soil Sensing

# Resistive Soil Sensing

A **resistive soil moisture sensor** is just two exposed metal probes on a board. Stick them in soil and measure the resistance between them. Wet soil conducts electricity better, so resistance drops as moisture increases.

The sensor outputs an analog voltage that you read through an ADC. A dry pot might give you a high value (say 900), while soaking wet soil drops to something low (say 200). The exact numbers depend on your soil type, so you'll need to calibrate by testing dry and wet conditions yourself.

> [!warning] The metal probes corrode over time because current flows through wet soil. For long-term projects, **capacitive** soil sensors last much longer.

## Quiz

**1. How does a resistive soil moisture sensor detect moisture levels?**

- A) It measures the temperature difference between the probes
- B) It measures the resistance between two metal probes; wet soil conducts better, so resistance drops
- C) It detects water molecules using an infrared beam between the probes
- D) It weighs the soil sample using a built-in load cell

<details>
<summary>Answer</summary>

- B) It measures the resistance between two metal probes; wet soil conducts better, so resistance drops

The sensor works by measuring electrical resistance between its two exposed metal probes. Wet soil conducts electricity better than dry soil, causing the resistance to drop as moisture increases.

</details>

**2. Why do you need to calibrate a resistive soil moisture sensor yourself?**

- A) Because each sensor has a different operating voltage
- B) Because the exact analog values depend on your specific soil type
- C) Because the ADC needs a firmware update for each sensor model
- D) Because the probes must be trimmed to match your pot size

<details>
<summary>Answer</summary>

- B) Because the exact analog values depend on your specific soil type

Different soil types produce different resistance values at the same moisture level, so you need to test with your own soil in both dry and wet conditions to know what the readings mean.

</details>

**3. What is the main drawback of resistive soil sensors for long-term projects?**

- A) They consume too much power for battery operation
- B) They can only measure sandy soil types
- C) The metal probes corrode over time because current flows through wet soil
- D) They require recalibration every 24 hours

<details>
<summary>Answer</summary>

- C) The metal probes corrode over time because current flows through wet soil

Because current constantly flows between the probes through wet soil, the metal corrodes over time. For long-term projects, capacitive soil sensors are a better choice.

</details>

---

[← Course overview](../../../README.md)
