# Character LCDs

# Character LCDs

A **character LCD** is a display with a fixed grid of cells -- typically 16 columns by 2 rows -- where each cell can show one character from a built-in font. Think of it like a tiny typewriter screen.

You don't draw pixels. You just tell it *which character goes in which cell*. Letters, numbers, and a handful of symbols are baked into the display's memory. That's what makes them so simple: send a character code, and the display handles the rendering.

16x2 is the most common size, but 20x4 models exist too. For showing sensor readings, status messages, or short labels, a character LCD is often all you need.

## Quiz

**1. How does a character LCD render text on screen?**

- A) You draw each letter pixel by pixel using a graphics library
- B) You send a character code and the display renders it from a built-in font
- C) You upload a custom font file to the display before each message
- D) The microcontroller streams a video signal like a monitor

<details>
<summary>Answer</summary>

- B) You send a character code and the display renders it from a built-in font

Character LCDs have a built-in font baked into memory. You send a character code, and the display handles all the pixel rendering internally.

</details>

**2. What is the most common size for a character LCD?**

- A) 8x1 (8 columns, 1 row)
- B) 20x4 (20 columns, 4 rows)
- C) 16x2 (16 columns, 2 rows)
- D) 32x4 (32 columns, 4 rows)

<details>
<summary>Answer</summary>

- C) 16x2 (16 columns, 2 rows)

16x2 is the most common character LCD size, giving you 16 columns and 2 rows. 20x4 models also exist but are less common.

</details>

**3. Which of the following is a good use case for a character LCD?**

- A) Rendering a full graphical user interface with icons
- B) Displaying a short sensor reading or status message
- C) Playing back video clips from an SD card
- D) Drawing animated charts of real-time data

<details>
<summary>Answer</summary>

- B) Displaying a short sensor reading or status message

Character LCDs excel at showing sensor readings, status messages, and short labels. They cannot draw arbitrary graphics or video since they only display characters from a fixed font.

</details>

---

[← Course overview](../../../README.md)
