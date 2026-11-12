# Pi and Python

# Pi and Python

Python comes pre-installed on every Raspberry Pi, and the **gpiozero** library makes hardware control feel like normal Python code.

```python
from gpiozero import LED

led = LED(17)
led.on()
```

That's four lines to turn on a physical light. No low-level register manipulation, no compiling, just Python. This is the language and style we'll use throughout the course.

## Fill in the Blanks

Fill in the blanks:

```python
from gpiozero import __(1)__

btn = Button(__(2)__)
btn.wait_for_press()
print("Pressed!")
```

<details>
<summary>Answer</summary>

1. `Button`
2. `4`

</details>

---

[← Course overview](../../../README.md)
