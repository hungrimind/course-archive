# Internal Pull-Ups

# Internal Pull-Ups

Most microcontrollers have **built-in pull-up resistors** you can enable with a single line of code. No extra components on the breadboard.

```python
button = Pin(15, Pin.IN, Pin.PULL_UP)
```

With an internal pull-up enabled, your button circuit is just a button and a wire to ground. The pin reads HIGH when open and LOW when pressed -- same behavior as an external pull-up resistor, but the chip does the work for you.

## Fill in the Blanks

Fill in the blanks:

```python
button = Pin(15, Pin.__(1)__, Pin.__(2)__)
```

<details>
<summary>Answer</summary>

1. `IN`
2. `PULL_UP`

</details>

---

[← Course overview](../../../README.md)
