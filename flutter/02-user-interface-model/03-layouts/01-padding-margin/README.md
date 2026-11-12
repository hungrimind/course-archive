# Padding & Margin

Padding and margin both help control the whitespace around your widgets, but in slightly different ways. Padding adds space inside a widget’s boundary, effectively pushing its child inward. Margin adds space around a widget’s boundary, effectively pushing surrounding widgets (or the edges of the screen) away from it. You can think of padding as internal spacing and margin as external spacing. A `Padding` widget specifically provides only padding, while a `Container` can provide both padding and margin through its properties.

For example, if you have a button that needs space between its text and edges, padding is what you want; it keeps the text from brushing up against the button’s borders. On the other hand, if you have a card that needs some distance from other elements on the screen, margin is your friend; it creates that outer “gap” so the card doesn’t look too cramped.

## Assignment

Give the `Container` containing the text "Padded Text" a `padding` of 16px on all sides and the `Container` containing the text "Margin Text" a `margin` of 16px on all sides.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/main.dart`. Tests: `test/widget_test.dart`.

---

[← Course overview](../../../README.md)
