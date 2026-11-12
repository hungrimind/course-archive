# High and Low

# High and Low

A GPIO pin has two states. **HIGH** means the pin outputs 3.3V. **LOW** means it outputs 0V. That's it; there's no in-between with basic digital GPIO.

HIGH turns things on, LOW turns things off. When your code sets a pin HIGH, voltage flows out of that pin through your circuit. Setting it LOW cuts the voltage to zero.

```python
GPIO.output(17, GPIO.HIGH)  # 3.3V out, LED on
GPIO.output(17, GPIO.LOW)   # 0V out, LED off
```

> [!warning] The Pi's GPIO pins output 3.3V, not 5V. Sending 5V into a GPIO pin can damage the board.

## Fill in the Blanks

Fill in the blanks:

```
# Turn the LED on
GPIO.output(17, GPIO.__(1)__)  # outputs __(2)__V

# Turn the LED off
GPIO.output(17, GPIO.__(3)__)   # outputs 0V
```

<details>
<summary>Answer</summary>

1. `HIGH`
2. `3.3`
3. `LOW`

</details>

---

[← Course overview](../../../README.md)
