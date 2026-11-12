# Smooth Fading

# Smooth Fading

Gradually ramping the duty cycle up and then back down creates a breathing effect -- the LED pulses like a sleeping MacBook light.

```python
from gpiozero import PWMLED
from time import sleep

led = PWMLED(17)
while True:
    for b in range(0, 101, 2):
        led.value = b / 100
        sleep(0.02)
    for b in range(100, -1, -2):
        led.value = b / 100
        sleep(0.02)
```

This is a binary pin producing smooth, analog-looking behavior. One pin, a loop, and a duty cycle -- that's all it takes to go from blinking to breathing.

## Quiz

**1. What creates the 'breathing' effect in a smooth fading LED?**

- A) Switching between two fixed brightness levels
- B) Gradually ramping the duty cycle up and then back down
- C) Using a special analog GPIO pin
- D) Connecting multiple LEDs in series

<details>
<summary>Answer</summary>

- B) Gradually ramping the duty cycle up and then back down

The breathing effect comes from gradually increasing the duty cycle from 0% to 100% and then decreasing it back to 0%, creating a smooth pulse of light.

</details>

**2. In the fading code, why is `b / 100` used when setting `led.value`?**

- A) To convert from a 0-100 range to the 0-1 range that PWMLED expects
- B) To slow down the animation speed
- C) To reduce the maximum voltage to the LED
- D) To account for the resistor in the circuit

<details>
<summary>Answer</summary>

- A) To convert from a 0-100 range to the 0-1 range that PWMLED expects

PWMLED's value property accepts a float between 0 and 1. Since the loop variable b goes from 0 to 100, dividing by 100 converts it to the expected 0-1 range.

</details>

**3. What does `sleep(0.02)` do in the fading loop?**

- A) It sets the PWM frequency to 50 Hz
- B) It resets the pin between brightness changes
- C) It pauses briefly between steps so the fade looks smooth
- D) It waits for the LED to fully turn off

<details>
<summary>Answer</summary>

- C) It pauses briefly between steps so the fade looks smooth

The short sleep between each brightness step creates a visible but smooth transition. Without it, the loop would run so fast the fade would be instantaneous.

</details>

---

[← Course overview](../../../README.md)
