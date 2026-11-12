# Sending Text to LCD

# Sending Text to LCD

Writing text to an LCD is a two-step process: position the cursor, then send characters. Libraries wrap this into simple calls, but underneath, each step is a different kind of message to the HD44780 -- a **command** to move the cursor, then **data** for each character.

```python
from RPLCD.i2c import CharLCD

lcd = CharLCD(i2c_expander="PCF8574", address=0x27, cols=16, rows=2)
lcd.cursor_pos = (0, 0)
lcd.write_string("Temp: 23.5C")
lcd.cursor_pos = (1, 0)
lcd.write_string("Humidity: 61%")
```

Row and column are zero-indexed, so `(1, 0)` means second row, first column. If your text is longer than the row, it wraps -- sometimes to unexpected places. Keep messages within the column count.

## Fill in the Blanks

Fill in the blanks:

```python
from RPLCD.i2c import CharLCD

lcd = CharLCD(i2c_expander="PCF8574", address=0x27, cols=16, rows=2)
lcd.__(1)__ = (0, 0)
lcd.write_string("Hello")
lcd.cursor_pos = (__(2)__, 0)
lcd.__(3)__("World")
```

<details>
<summary>Answer</summary>

1. `cursor_pos`
2. `1`
3. `write_string`

</details>

---

[← Course overview](../../../README.md)
