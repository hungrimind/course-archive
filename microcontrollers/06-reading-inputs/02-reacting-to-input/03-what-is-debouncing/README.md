# What Is Debouncing?

# What Is Debouncing?

When you press a button, the metal contacts don't land cleanly -- they **bounce**. In the few milliseconds after a press, the signal rapidly flickers between HIGH and LOW before settling. Your code might see five "presses" from a single tap.

**Debouncing** fixes this by ignoring any changes for a short window (typically 50-200ms) after the first detected press. One physical press, one clean signal.

```python
if button.value() == 0:
    sleep_ms(100)
    if button.value() == 0:
        handle_press()
```

## True or False

**1. True or false:** Button contacts land cleanly on the first press, producing a single stable signal.

<details>
<summary>Answer</summary>

**False**: Metal contacts bounce when they make contact, causing the signal to rapidly flicker between HIGH and LOW for a few milliseconds before settling.

</details>

**2. True or false:** Without debouncing, a single button press might be detected as multiple presses by your code.

<details>
<summary>Answer</summary>

**True**: The rapid flickering from contact bounce can register as several separate presses. Debouncing ignores changes for a short window (typically 50-200ms) to ensure one press equals one signal.

</details>

**3. True or false:** A common debouncing technique is to wait a short time after the first detected press and then check the button state again.

<details>
<summary>Answer</summary>

**True**: By adding a small delay (e.g., 100ms) and re-reading the pin, you skip past the bouncing period and confirm the button is truly pressed.

</details>

---

[← Course overview](../../../README.md)
