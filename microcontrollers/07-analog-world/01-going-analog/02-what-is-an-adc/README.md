# What Is an ADC?

# What Is an ADC?

An **ADC (Analog-to-Digital Converter)** reads a voltage and turns it into a number your code can use. It samples the smooth analog signal and maps it to a discrete step.

The **resolution** determines how many steps you get. A 10-bit ADC divides the voltage range into 1,024 steps; a 12-bit ADC gives you 4,096. More bits means finer precision -- *like measuring with a ruler that has more tick marks*.

> [!tip] A 10-bit ADC reading 3.3V gives roughly 0.003V per step. That's plenty for most hobby sensors.

## Quiz

**1. What does an ADC do?**

- A) Converts a digital number into a voltage
- B) Reads a voltage and converts it into a number your code can use
- C) Amplifies an analog signal to make it stronger
- D) Filters noise out of a digital signal

<details>
<summary>Answer</summary>

- B) Reads a voltage and converts it into a number your code can use

An ADC (Analog-to-Digital Converter) samples a smooth analog voltage and maps it to a discrete numerical value that your microcontroller code can work with.

</details>

**2. How many steps does a 10-bit ADC divide the voltage range into?**

- A) 256
- B) 512
- C) 1,024
- D) 4,096

<details>
<summary>Answer</summary>

- C) 1,024

A 10-bit ADC has 2^10 = 1,024 steps. More bits means more steps and finer precision, like a ruler with more tick marks.

</details>

**3. What does increasing an ADC's resolution (bit count) give you?**

- A) A wider voltage input range
- B) Faster conversion speed
- C) Finer precision with more discrete steps
- D) Lower power consumption

<details>
<summary>Answer</summary>

- C) Finer precision with more discrete steps

Higher resolution means more bits, which means more discrete steps to represent the analog signal. A 12-bit ADC gives 4,096 steps compared to a 10-bit ADC's 1,024 steps.

</details>

---

[← Course overview](../../../README.md)
