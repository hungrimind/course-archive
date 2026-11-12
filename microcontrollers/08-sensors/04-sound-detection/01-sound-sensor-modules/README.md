# Sound Sensor Modules

# Sound Sensor Modules

A **sound sensor module** pairs a small microphone with a comparator circuit on one board. It typically gives you two outputs: a **digital out** (D0) that goes HIGH when sound crosses a threshold, and an **analog out** (A0) that varies with volume.

The digital output works like a PIR sensor: just read a GPIO pin for HIGH or LOW. The analog output needs an ADC (like you learned in the analog module) to convert the varying voltage into a number your code can use.

A potentiometer on the board sets the threshold for the digital output. This is great for clap-detection or noise-triggered alerts, but not for recording audio.

## True or False

**1. True or false:** A sound sensor module's digital output (D0) goes HIGH when sound crosses a set threshold.

<details>
<summary>Answer</summary>

**True**: The digital output works like a simple switch: when the detected sound level exceeds the threshold set by the onboard potentiometer, the pin goes HIGH.

</details>

**2. True or false:** The analog output (A0) of a sound sensor can be read directly by a Raspberry Pi GPIO pin without any extra hardware.

<details>
<summary>Answer</summary>

**False**: The analog output varies with volume and needs an ADC (analog-to-digital converter) to convert the varying voltage into a number the Pi can use, since Pi GPIO pins only read digital HIGH/LOW.

</details>

**3. True or false:** Sound sensor modules are suitable for recording high-quality audio.

<details>
<summary>Answer</summary>

**False**: Sound sensor modules are designed for simple detection tasks like clap-detection or noise-triggered alerts, not for recording audio.

</details>

**4. True or false:** A potentiometer on the sound sensor board sets the threshold for the digital output.

<details>
<summary>Answer</summary>

**True**: The onboard potentiometer lets you adjust at what volume level the digital output triggers, making it configurable for different use cases.

</details>

---

[← Course overview](../../../README.md)
