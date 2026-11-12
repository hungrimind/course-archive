# What Is a Schematic?

# What Is a Schematic?

A **schematic** is a map of a circuit drawn with standardized symbols. It shows *how components are electrically connected*, not where they physically sit on a board.

Here is a simple schematic: a battery powering an LED through a resistor:

<svg viewBox="0 0 340 100" xmlns="http://www.w3.org/2000/svg" style="max-width:340px;font-family:sans-serif;font-size:12px">
  <!-- Battery -->
  <line x1="20" y1="50" x2="60" y2="50" stroke="currentColor" stroke-width="2"/>
  <line x1="60" y1="25" x2="60" y2="75" stroke="currentColor" stroke-width="3"/>
  <line x1="70" y1="35" x2="70" y2="65" stroke="currentColor" stroke-width="1.5"/>
  <text x="55" y="18" text-anchor="middle" fill="currentColor" font-size="11">+</text>
  <text x="75" y="18" text-anchor="middle" fill="currentColor" font-size="11">−</text>
  <!-- Wire to resistor -->
  <line x1="70" y1="50" x2="110" y2="50" stroke="currentColor" stroke-width="2"/>
  <!-- Resistor (zigzag) -->
  <polyline points="110,50 118,35 134,65 150,35 166,65 174,50" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="142" y="85" text-anchor="middle" fill="currentColor" font-size="11">Resistor</text>
  <!-- Wire to LED -->
  <line x1="174" y1="50" x2="220" y2="50" stroke="currentColor" stroke-width="2"/>
  <!-- LED (triangle + line) -->
  <polygon points="220,35 220,65 245,50" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="245" y1="35" x2="245" y2="65" stroke="currentColor" stroke-width="2"/>
  <!-- LED arrows -->
  <line x1="234" y1="28" x2="242" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <line x1="239" y1="31" x2="247" y2="23" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="242,20 238,24 243,24" fill="currentColor"/>
  <polygon points="247,23 243,27 248,27" fill="currentColor"/>
  <text x="233" y="85" text-anchor="middle" fill="currentColor" font-size="11">LED</text>
  <!-- Wire back to battery -->
  <line x1="245" y1="50" x2="320" y2="50" stroke="currentColor" stroke-width="2"/>
  <line x1="320" y1="50" x2="320" y2="10" stroke="currentColor" stroke-width="2"/>
  <line x1="320" y1="10" x2="20" y2="10" stroke="currentColor" stroke-width="2"/>
  <line x1="20" y1="10" x2="20" y2="50" stroke="currentColor" stroke-width="2"/>
</svg>

Think of it like a subway map. It doesn't match the real geography, but it tells you exactly what connects to what. Schematics are the universal language engineers use to design, share, and troubleshoot circuits.

## True or False

**1. True or false:** A schematic shows the exact physical layout of components on a circuit board.

<details>
<summary>Answer</summary>

**False**: A schematic shows how components are electrically connected, not where they physically sit. It is like a subway map -- it shows connections, not real geography.

</details>

**2. True or false:** Schematics use standardized symbols to represent circuit components.

<details>
<summary>Answer</summary>

**True**: Every component has a standard symbol so that anyone can read a schematic regardless of who drew it.

</details>

**3. True or false:** A schematic is comparable to a subway map because both show connections rather than physical positions.

<details>
<summary>Answer</summary>

**True**: Just like a subway map shows which stations connect without matching the real geography, a schematic shows electrical connections without matching the physical board layout.

</details>

---

[← Course overview](../../../README.md)
