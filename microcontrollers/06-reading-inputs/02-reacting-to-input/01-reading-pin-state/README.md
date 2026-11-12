# Reading Pin State

# Reading Pin State

`button.value()` returns the current state of a GPIO pin -- `1` for HIGH, `0` for LOW.

```python
button = Pin(15, Pin.IN, Pin.PULL_UP)

while True:
    if button.value() == 0:
        led.on()
    else:
        led.off()
```

With a pull-up resistor, a pressed button reads `0` (LOW) because it's pulling the pin to ground. So `value() == 0` means "pressed."

## Fill in the Blanks

Fill in the blanks:

```python
button = Pin(15, Pin.IN, Pin.PULL_UP)

while True:
    if button.__(1)__ == __(2)__:
        led.on()
    else:
        led.off()
```

<details>
<summary>Answer</summary>

1. `value()`
2. `0`

</details>

---

[← Course overview](../../../README.md)
