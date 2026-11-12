# Turning On an LED

# Turning On an LED

Setting a GPIO pin to **HIGH** sends 3.3V through your resistor and LED, lighting it up. One line of code, one physical result.

```python
import gpiozero

led = gpiozero.LED(17)
led.on()
```

That's it. Pin 17 goes HIGH, current flows through the circuit you built, and the LED turns on. This is the simplest possible hardware output -- your code reaching into the physical world.

## Fill in the Blanks

Fill in the blanks:

```python
import gpiozero

led = gpiozero.__(1)__(17)
led.__(2)__()
```

<details>
<summary>Answer</summary>

1. `LED`
2. `on`

</details>

---

[← Course overview](../../../README.md)
