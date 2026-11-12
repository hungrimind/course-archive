# Trigger and Echo Pins

# Trigger and Echo Pins

The HC-SR04 has two signal pins. You send a short HIGH pulse (10 microseconds) to the **trigger pin** to fire the ultrasonic burst. The **echo pin** then goes HIGH for exactly as long as the sound takes to bounce back.

Your code measures how long echo stays HIGH, then applies the distance formula from the previous lesson.

> [!warning] The echo pin outputs **5V**, but your Pi's GPIO expects 3.3V. Use a simple voltage divider (two resistors) on the echo line to drop it to a safe level, or you risk damaging the Pi.

```python
GPIO.output(TRIG, True)
time.sleep(0.00001)  # 10 microsecond pulse
GPIO.output(TRIG, False)
```

## True or False

**1. True or false:** You send a 10 microsecond HIGH pulse to the trigger pin to fire the ultrasonic burst.

<details>
<summary>Answer</summary>

**True**: The trigger pin requires a short 10 microsecond HIGH pulse to initiate the ultrasonic sound burst.

</details>

**2. True or false:** The echo pin outputs 3.3V, so it can connect directly to the Pi's GPIO without any extra components.

<details>
<summary>Answer</summary>

**False**: The echo pin outputs 5V, not 3.3V. You need a voltage divider (two resistors) to drop it to a safe 3.3V level for the Pi's GPIO.

</details>

**3. True or false:** The echo pin stays HIGH for exactly as long as the sound takes to bounce back to the sensor.

<details>
<summary>Answer</summary>

**True**: The duration that the echo pin remains HIGH corresponds to the round-trip time of the ultrasonic sound, which you then use in the distance formula.

</details>

**4. True or false:** The trigger pin must be held HIGH continuously while waiting for the echo.

<details>
<summary>Answer</summary>

**False**: The trigger pin only needs a brief 10 microsecond HIGH pulse. After that, it is set back to LOW and the code monitors the echo pin.

</details>

---

[← Course overview](../../../README.md)
