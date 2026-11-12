# Why Motor Drivers?

# Why Motor Drivers?

A GPIO pin can supply around 16mA. A small DC motor needs 200mA or more. Connecting a motor directly to a GPIO pin would either stall the motor or damage your board.

A **motor driver** solves this by acting as a *power amplifier*. Your GPIO sends a tiny control signal, and the driver chip switches a separate, beefier power supply to actually spin the motor. Think of it like a light switch -- your finger doesn't power the lights, it just controls the flow of electricity from the wall.

> [!warning] Never connect a DC motor directly to a GPIO pin. Always use a motor driver.

## True or False

**1. True or false:** A GPIO pin can supply enough current to run a small DC motor directly.

<details>
<summary>Answer</summary>

**False**: A GPIO pin supplies around 16mA, but a small DC motor needs 200mA or more. Connecting directly would stall the motor or damage the board.

</details>

**2. True or false:** A motor driver acts as a power amplifier, using a small GPIO signal to switch a separate, higher-current power supply.

<details>
<summary>Answer</summary>

**True**: The motor driver takes the tiny control signal from the GPIO and uses it to switch a beefier power supply that actually powers the motor.

</details>

**3. True or false:** It is safe to connect a DC motor directly to a GPIO pin as long as you use PWM.

<details>
<summary>Answer</summary>

**False**: PWM does not solve the current problem. The GPIO pin still cannot supply enough current regardless of whether you use PWM or a steady signal. You must always use a motor driver.

</details>

---

[← Course overview](../../../README.md)
