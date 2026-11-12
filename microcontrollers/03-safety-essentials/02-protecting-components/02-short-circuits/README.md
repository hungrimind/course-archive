# Short Circuits

# Short Circuits

A **short circuit** happens when current flows directly from power to ground with nothing in between to limit it. *Think of it like a water hose with no nozzle*: everything rushes through at once.

On a breadboard, this usually means a stray wire connecting a power rail straight to a ground rail, or two bare wires accidentally touching. The result is a sudden surge of current that can fry components, melt wires, or blow a fuse on your power supply.

The fix is simple: always make sure current has to pass through a **load** (an LED, a resistor, a sensor) before reaching ground. No load, no good.

## True or False

**1. True or false:** A short circuit occurs when current flows from power to ground with no load in between.

<details>
<summary>Answer</summary>

**True**: A short circuit is exactly this: current takes a direct path from power to ground with nothing to limit it, causing a dangerous surge.

</details>

**2. True or false:** Short circuits on a breadboard are always caused by faulty components.

<details>
<summary>Answer</summary>

**False**: Short circuits on a breadboard are usually caused by stray wires connecting power directly to ground or bare wires accidentally touching, not faulty components.

</details>

**3. True or false:** To prevent short circuits, you should always make sure current passes through a load like a resistor, LED, or sensor before reaching ground.

<details>
<summary>Answer</summary>

**True**: A load in the circuit limits current flow. No load means current rushes through uncontrolled, which is the definition of a short circuit.

</details>

---

[← Course overview](../../../README.md)
