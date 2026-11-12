# The Blink Loop

# The Blink Loop

Flipping a pin between HIGH and LOW with a pause in between makes an LED blink. It's the "Hello World" of hardware.

```python
from gpiozero import LED
from time import sleep

led = LED(17)
while True:
    led.toggle()
    sleep(0.5)
```

The `sleep` controls speed -- 0.5 seconds gives a steady blink, 0.05 makes it flicker like a candle. This pattern of *loop, change state, wait* is the foundation of almost every hardware project.

## Fill in the Blanks

Fill in the blanks:

```python
from gpiozero import LED
from time import sleep

led = LED(17)
while True:
    led.__(1)__()
    __(2)__(0.5)
```

<details>
<summary>Answer</summary>

1. `toggle`
2. `sleep`

</details>

---

[← Course overview](../../../README.md)
