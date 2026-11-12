# Text and Graphics

# Text and Graphics

On a pixel display, text is just a pattern of dots drawn using a font. You pick the font, the size, and the exact pixel position. But you can also draw **shapes** -- lines, rectangles, circles -- using the same drawing library.

```python
from luma.core.render import canvas

with canvas(device) as draw:
    draw.text((0, 0), "Temp: 23C", fill="white")
    draw.rectangle((0, 20, 127, 40), outline="white")
    draw.line((0, 50, 127, 50), fill="white")
```

Everything is drawn to an in-memory image first, then sent to the display in one batch. This is called a **framebuffer** approach -- you compose the full frame, then push it. That's why the `with canvas(device)` block exists: when the block ends, the image gets flushed to the screen.

## Quiz

**1. How does the luma library handle drawing on an OLED display?**

- A) It sends each drawing command directly to the display one at a time
- B) It composes the full frame in an in-memory image, then flushes it to the screen
- C) It writes pixels to the display as soon as each draw call is made
- D) It stores the frame on an SD card and loads it to the display

<details>
<summary>Answer</summary>

- B) It composes the full frame in an in-memory image, then flushes it to the screen

The luma library uses a framebuffer approach: everything is drawn to an in-memory image first, then the complete frame is sent to the display when the 'with canvas(device)' block ends.

</details>

**2. What happens when the 'with canvas(device)' block ends?**

- A) The display is cleared and powered off
- B) The cursor resets to position (0, 0)
- C) The composed image is flushed to the screen
- D) The program pauses until the next frame is requested

<details>
<summary>Answer</summary>

- C) The composed image is flushed to the screen

The 'with canvas(device)' block acts as a framebuffer boundary. When it ends, the fully composed in-memory image gets pushed to the display in one batch.

</details>

**3. Which of the following can you draw on a pixel-based OLED display?**

- A) Only text characters from the built-in font
- B) Only geometric shapes like lines and rectangles
- C) Text at any size, shapes, lines, and rectangles
- D) Only bitmap images loaded from files

<details>
<summary>Answer</summary>

- C) Text at any size, shapes, lines, and rectangles

On a pixel display, you control every dot. You can render text at any size using a chosen font, and draw shapes like lines, rectangles, and circles using the same drawing library.

</details>

---

[← Course overview](../../../README.md)
