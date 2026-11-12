# Voltage Dividers

# Voltage Dividers

A **voltage divider** is two resistors in series between power and ground. The wire between them outputs a voltage that's a fraction of the input: **Vout = Vin x (R2 / (R1 + R2))**.

This is the pattern behind the photoresistor circuit from the previous lesson. When one "resistor" is actually a sensor whose resistance changes, the output voltage changes too -- giving your ADC something meaningful to read. You'll see voltage dividers in almost every analog sensor circuit.

## Quiz

**1. What is the voltage divider formula?**

- A) Vout = Vin x (R1 / R2)
- B) Vout = Vin x (R2 / (R1 + R2))
- C) Vout = Vin x (R1 + R2) / R2
- D) Vout = Vin x (R1 - R2)

<details>
<summary>Answer</summary>

- B) Vout = Vin x (R2 / (R1 + R2))

The voltage divider formula is Vout = Vin x (R2 / (R1 + R2)). The output voltage is a fraction of the input determined by the ratio of the two resistors.

</details>

**2. In a voltage divider used with a sensor, what happens when the sensor's resistance changes?**

- A) The input voltage changes
- B) The output voltage changes, giving the ADC something meaningful to read
- C) The circuit breaks and stops working
- D) The fixed resistor's value adjusts automatically

<details>
<summary>Answer</summary>

- B) The output voltage changes, giving the ADC something meaningful to read

When one of the two resistors in a voltage divider is a sensor whose resistance changes, the ratio R2/(R1+R2) changes, which changes the output voltage. This is how the ADC gets a varying signal to read.

</details>

**3. How are the two resistors arranged in a voltage divider?**

- A) In parallel between power and ground
- B) In series between power and ground
- C) Both connected only to power
- D) One in series and one in parallel

<details>
<summary>Answer</summary>

- B) In series between power and ground

A voltage divider consists of two resistors connected in series between power and ground. The output voltage is tapped from the wire between the two resistors.

</details>

---

[← Course overview](../../../README.md)
