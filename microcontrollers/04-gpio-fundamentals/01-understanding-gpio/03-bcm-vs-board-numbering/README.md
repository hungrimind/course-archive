# BCM vs Board Numbering

# BCM vs Board Numbering

There are two ways to refer to a pin. **Board numbering** uses the pin's physical position on the header (1 through 40). **BCM numbering** uses the label assigned by the Broadcom chip, so the pin in physical position 11 is BCM 17.

These numbers don't match, which is why mixing them up is the most common GPIO bug. Most Python libraries default to BCM, and most tutorials use BCM. Stick with BCM unless you have a reason not to.

```python
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)   # use chip labels
GPIO.setup(17, GPIO.OUT) # BCM pin 17, physical pin 11
```

## Exercise

On the platform this lesson ended with an interactive pinout-mapping exercise. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
