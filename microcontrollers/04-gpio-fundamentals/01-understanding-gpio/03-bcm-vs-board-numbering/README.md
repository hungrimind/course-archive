# BCM vs Board Numbering

# BCM vs Board Numbering

There are two ways to refer to a pin. **Board numbering** uses the pin's physical position on the header (1 through 40). **BCM numbering** uses the label assigned by the Broadcom chip, so the pin in physical position 11 is BCM 17.

These numbers don't match, which is why mixing them up is the most common GPIO bug. Most Python libraries default to BCM, and most tutorials use BCM. Stick with BCM unless you have a reason not to.

```python
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)   # use chip labels
GPIO.setup(17, GPIO.OUT) # BCM pin 17, physical pin 11
```

## Exercise: Map the Pins

Physical pin 11 is BCM GPIO17, not GPIO11. Drag the correct BCM numbers onto the blank pins, and notice how they don't match the physical positions.

Label options: GPIO4, GPIO14, GPIO17, GPIO27, GPIO22, GPIO18, GPIO10

| Pin | Label |
|---|---|
| 1 | 3.3V |
| 2 | 5V |
| 3 | GPIO2 |
| 4 | 5V |
| 5 | GPIO3 |
| 6 | GND |
| 7 | **?** |
| 8 | **?** |
| 9 | GND |
| 10 | GPIO15 |
| 11 | **?** |
| 12 | GPIO18 |
| 13 | **?** |
| 14 | GND |
| 15 | **?** |
| 16 | GPIO23 |
| 17 | 3.3V |
| 18 | GPIO24 |
| 19 | GPIO10 |
| 20 | GND |

<details>
<summary>Answer</summary>

- Pin 7: GPIO4
- Pin 8: GPIO14
- Pin 11: GPIO17
- Pin 13: GPIO27
- Pin 15: GPIO22

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
