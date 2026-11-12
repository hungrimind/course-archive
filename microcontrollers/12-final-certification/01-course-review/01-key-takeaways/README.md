# Key Takeaways

# Key Takeaways

You started this course knowing how to write code. Now you understand how code controls the physical world.

**GPIO pins** are your bridge: set one HIGH to light an LED, read one to detect a button press. **PWM** lets a digital pin fake analog behavior, dimming lights and controlling motor speed. **Pull-up resistors** keep floating pins honest.

The real world is analog, so **ADCs** convert continuous signals into numbers your code can use. **Sensors** turn temperature, distance, motion, sound, and moisture into data. **Displays** turn that data into something visible.

**Servos** move to exact angles, **DC motors** spin with variable speed and direction through **H-bridges**, and **steppers** move in precise discrete steps. Each motor type fits a different kind of motion.

When devices need to talk, **UART** connects two devices simply, **SPI** moves data fast, and **I2C** connects many devices on just two wires. Knowing which protocol to use, and why, is what separates understanding from guessing.

You now have the knowledge base to pick up any microcontroller board, read a component's datasheet, and figure out how to make it work.

## Quiz

**1. What does setting a GPIO pin to HIGH do?**

- A) It converts an analog signal to digital
- B) It outputs a voltage (e.g., 3.3V or 5V) on the pin
- C) It activates the pin's built-in pull-up resistor
- D) It configures the pin as an input

<details>
<summary>Answer</summary>

- B) It outputs a voltage (e.g., 3.3V or 5V) on the pin

Setting a GPIO pin HIGH outputs a voltage level (typically 3.3V or 5V depending on the board). This is how you control outputs like LEDs: HIGH turns them on, LOW turns them off.

</details>

**2. What does the duty cycle of a PWM signal control?**

- A) The frequency of the signal in hertz
- B) The voltage level of each pulse
- C) The percentage of time the signal stays HIGH within each cycle
- D) The number of connected devices on the bus

<details>
<summary>Answer</summary>

- C) The percentage of time the signal stays HIGH within each cycle

Duty cycle is the percentage of time the PWM signal remains HIGH in each period. A 50% duty cycle means the signal is HIGH half the time, which effectively delivers half the average power. That's useful for dimming LEDs or controlling motor speed.

</details>

**3. Why would you use a pull-up resistor on a GPIO input pin?**

- A) To increase the current flowing through the pin
- B) To convert an analog signal into a digital value
- C) To prevent the pin from floating in an undefined state when nothing is driving it
- D) To allow the pin to output PWM signals

<details>
<summary>Answer</summary>

- C) To prevent the pin from floating in an undefined state when nothing is driving it

An unconnected (floating) input pin can randomly read HIGH or LOW due to electrical noise. A pull-up resistor ties the pin to a known HIGH state by default, so it only reads LOW when actively pulled down, for example by a button press.

</details>

**4. Which communication protocol uses only two wires (SDA and SCL) and can connect many devices on the same bus?**

- A) UART
- B) SPI
- C) I2C
- D) PWM

<details>
<summary>Answer</summary>

- C) I2C

I2C (Inter-Integrated Circuit) uses just two wires (SDA for data and SCL for clock) and supports multiple devices on the same bus, each identified by a unique address. UART is point-to-point between two devices, and SPI requires additional chip-select lines per device.

</details>

**5. Which motor type moves in precise discrete steps, making it ideal for applications like 3D printers?**

- A) Servo motor
- B) DC motor
- C) Stepper motor
- D) Brushless motor

<details>
<summary>Answer</summary>

- C) Stepper motor

Stepper motors divide a full rotation into a fixed number of discrete steps, allowing precise position control without feedback. Servos move to exact angles but within a limited range, and DC motors spin continuously with variable speed but lack inherent position precision.

</details>

---

[← Course overview](../../../README.md)
