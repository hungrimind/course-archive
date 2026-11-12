# Dimming an LED

# Dimming an LED

Changing the PWM duty cycle controls how bright the LED appears. The LED is still blinking -- just too fast for your eye to see. What you perceive is a steady, dimmer glow.

```python
from gpiozero import PWMLED

led = PWMLED(17)
led.value = 0.3
```

The `value` property sets the duty cycle from 0 (off) to 1 (full brightness). Setting it to 0.3 means the LED is on 30% of the time -- giving you a soft, dim light.

## Fill in the Blanks

Fill in the blanks:

```python
from gpiozero import __(1)__

led = PWMLED(17)
led.__(2)__ = 0.3
```

<details>
<summary>Answer</summary>

1. `PWMLED`
2. `value`

</details>

---

[← Course overview](../../../README.md)
