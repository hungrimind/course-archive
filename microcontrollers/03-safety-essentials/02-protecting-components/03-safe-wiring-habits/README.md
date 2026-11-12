# Safe Wiring Habits

# Safe Wiring Habits

**Always disconnect power before changing your wiring.** This is the single most important habit. Live-wiring is how short circuits happen, how pins get fried, and how you accidentally connect 5V to a 3.3V pin.

Before reconnecting power, trace each wire from start to end. Check that power goes through a load before reaching ground, and that no 5V lines touch GPIO pins. It takes ten seconds and saves you a board.

> [!tip]
> Make it a ritual: **unplug, rewire, double-check, plug in.** Every time.

## Matching

Sort each item into the right category: **Before Wiring**, **Before Reconnecting Power**, **Dangerous Habits**

- Changing wires while the board is powered
- Check that power goes through a load before ground
- Disconnect power from the board
- Plan which pins and rails you will use
- Skipping the double-check step
- Trace each wire from start to end
- Verify no 5V lines touch GPIO pins

<details>
<summary>Answer</summary>

**Before Wiring**
- Disconnect power from the board
- Plan which pins and rails you will use

**Before Reconnecting Power**
- Trace each wire from start to end
- Verify no 5V lines touch GPIO pins
- Check that power goes through a load before ground

**Dangerous Habits**
- Changing wires while the board is powered
- Skipping the double-check step

</details>

---

[← Course overview](../../../README.md)
