# Pixel vs Character

# Pixel vs Character

A character LCD gives you a grid of cells and a fixed font. An **OLED display** gives you a grid of *pixels* -- and you control every single one.

This means you're not limited to the built-in alphabet. You can render text at any size, draw shapes, show icons, or animate things. It's the difference between a label maker and a tiny screen.

The tradeoff is complexity. With a character LCD, you send `"Hello"` and you're done. With an OLED, the library has to convert each letter into a pattern of pixels using a font file, then push all those pixels to the display. More power, more work under the hood.

## Matching

Sort each item into the right category: **Character LCD**, **OLED Display**

- Can draw shapes, icons, and animations
- Control every individual pixel
- Fixed built-in font
- Grid of cells, not individual pixels
- Requires a font file to render text
- Send a character code to display text

<details>
<summary>Answer</summary>

**Character LCD**
- Fixed built-in font
- Send a character code to display text
- Grid of cells, not individual pixels

**OLED Display**
- Control every individual pixel
- Requires a font file to render text
- Can draw shapes, icons, and animations

</details>

---

[← Course overview](../../../README.md)
