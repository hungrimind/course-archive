# Speed and Direction

# Speed and Direction

The H-bridge pins control *direction*. PWM controls *speed*. Combine them and you have full motor control.

```python
from machine import Pin, PWM

in1 = Pin(14, Pin.OUT)
in2 = Pin(15, Pin.OUT)
speed = PWM(Pin(16), freq=1000)

in1.value(1)       # set direction: forward
in2.value(0)
speed.duty_u16(32768)  # 50% speed
```

A 50% duty cycle means the motor gets power only half the time, so it spins at roughly half speed. Swap the IN1/IN2 values and it reverses.

## Fill in the Blanks

Fill in the blanks:

```
in1 = Pin(14, Pin.OUT)
in2 = Pin(15, Pin.OUT)
speed = PWM(Pin(16), freq=1000)

in1.value(1)
in2.value(__(1)__)
speed.duty_u16(__(2)__)  # 50% speed
```

<details>
<summary>Answer</summary>

1. `0`
2. `32768`

</details>

---

[← Course overview](../../../README.md)
