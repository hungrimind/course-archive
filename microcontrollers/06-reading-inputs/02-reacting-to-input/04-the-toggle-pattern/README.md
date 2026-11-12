# The Toggle Pattern

# The Toggle Pattern

A **toggle** flips a state variable each time the button is pressed. Combined with debouncing, it gives you a light-switch effect -- press once to turn on, press again to turn off.

```python
led_on = False

while True:
    if button.value() == 0:
        sleep_ms(100)
        if button.value() == 0:
            led_on = not led_on
            led.value(led_on)
            while button.value() == 0:
                pass
```

The `while button.value() == 0` at the end waits for the button to be released, so holding it down doesn't keep toggling.

## Fill in the Blanks

Fill in the blanks:

```python
led_on = False

while True:
    if button.value() == 0:
        sleep_ms(100)
        if button.value() == 0:
            led_on = __(1)__
            led.value(led_on)
            while button.__(2)__ == 0:
                pass
```

<details>
<summary>Answer</summary>

1. `not led_on`
2. `value()`

</details>

---

[← Course overview](../../../README.md)
