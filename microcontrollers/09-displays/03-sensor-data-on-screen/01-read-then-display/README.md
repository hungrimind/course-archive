# Read Then Display

# Read Then Display

The core pattern for showing live data is dead simple: **read** a value from a sensor, **format** it as a string, **send** it to the display. Repeat in a loop.

```python
while True:
    temp = sensor.temperature
    with canvas(device) as draw:
        draw.text((0, 0), f"Temp: {temp:.1f}C", fill="white")
    time.sleep(1)
```

This is how most real embedded devices work -- thermostats, weather stations, fitness trackers. The display doesn't *know* about the sensor. Your code is the glue: it reads one peripheral, formats the result, and writes to another.

## Fill in the Blanks

Fill in the blanks:

```python
while True:
    temp = __(1)__
    with canvas(device) as draw:
        draw.__(2)__((0, 0), f"Temp: {temp:.1f}C", fill="white")
    time.sleep(__(3)__)
```

<details>
<summary>Answer</summary>

1. `sensor.temperature`
2. `text`
3. `1`

</details>

---

[← Course overview](../../../README.md)
