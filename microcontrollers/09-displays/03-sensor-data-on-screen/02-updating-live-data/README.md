# Updating Live Data

# Updating Live Data

Refresh too fast and the display flickers. Too slow and the data feels stale. The right **update interval** depends on what you're showing -- temperature changes slowly (every 2-5 seconds is fine), but a dial position might need updates every 100ms.

On character LCDs, a common trick is to overwrite only the characters that changed instead of clearing the whole screen. A full clear-then-redraw causes a visible blink. On OLED displays using a framebuffer, this isn't an issue -- the entire frame is redrawn off-screen and sent at once, so there's no flicker.

> [!tip]
> If your character LCD flickers, stop calling `lcd.clear()` in your loop. Instead, write spaces over old text or overwrite in place with fixed-width formatting like `f"{temp:>6.1f}"`.

## True or False

**1. True or false:** Calling lcd.clear() in every loop iteration on a character LCD is a good practice for updating live data.

<details>
<summary>Answer</summary>

**False**: Calling lcd.clear() each iteration causes a visible blink/flicker. Instead, overwrite old text in place or use fixed-width formatting.

</details>

**2. True or false:** OLED displays using a framebuffer approach don't flicker during redraws because the entire frame is composed off-screen before being sent.

<details>
<summary>Answer</summary>

**True**: With a framebuffer, the full frame is drawn in memory first, then pushed to the display at once, avoiding the flicker that comes from clearing and redrawing on screen.

</details>

**3. True or false:** A temperature display should update every 100ms to keep the reading accurate.

<details>
<summary>Answer</summary>

**False**: Temperature changes slowly, so updating every 2-5 seconds is fine. Very fast update intervals (100ms) are better suited for rapidly changing values like a dial position.

</details>

---

[← Course overview](../../../README.md)
