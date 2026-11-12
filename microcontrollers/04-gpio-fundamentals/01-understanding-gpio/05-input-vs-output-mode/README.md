# Input vs Output Mode

# Input vs Output Mode

Every GPIO pin must be configured as **input** or **output** before you use it. Output mode lets your code push voltage out to light an LED or drive a motor. Input mode lets your code read voltage coming in from a button press or sensor.

```python
GPIO.setup(17, GPIO.OUT)  # pin 17 sends signals
GPIO.setup(27, GPIO.IN)   # pin 27 reads signals

GPIO.output(17, GPIO.HIGH)
state = GPIO.input(27)    # returns 1 (HIGH) or 0 (LOW)
```

A pin can only be one mode at a time. Writing to a pin set as input, or reading from one set as output, won't give you useful results.

## Matching

Sort each item into the right category: **Output Mode**, **Input Mode**

- Detects a button press
- Pushes voltage out of the pin
- Reads voltage coming in
- Returns 1 (HIGH) or 0 (LOW)
- Used to drive a motor
- Used to light an LED

<details>
<summary>Answer</summary>

**Output Mode**
- Pushes voltage out of the pin
- Used to light an LED
- Used to drive a motor

**Input Mode**
- Reads voltage coming in
- Detects a button press
- Returns 1 (HIGH) or 0 (LOW)

</details>

---

[← Course overview](../../../README.md)
