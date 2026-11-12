# Common Schematic Symbols

# Common Schematic Symbols

Every component gets its own standard symbol. Learn these six and you can read most simple schematics:

<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" style="max-width:380px;font-family:sans-serif;font-size:12px">
  <!-- Row 1 -->
  <!-- Wire -->
  <line x1="10" y1="30" x2="80" y2="30" stroke="currentColor" stroke-width="2"/>
  <text x="45" y="55" text-anchor="middle" fill="currentColor">Wire</text>

  <!-- Resistor -->
  <line x1="120" y1="30" x2="135" y2="30" stroke="currentColor" stroke-width="2"/>
  <polyline points="135,30 140,18 150,42 160,18 170,42 175,30" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="175" y1="30" x2="190" y2="30" stroke="currentColor" stroke-width="2"/>
  <text x="155" y="55" text-anchor="middle" fill="currentColor">Resistor</text>

  <!-- Capacitor -->
  <line x1="240" y1="30" x2="265" y2="30" stroke="currentColor" stroke-width="2"/>
  <line x1="265" y1="12" x2="265" y2="48" stroke="currentColor" stroke-width="2.5"/>
  <line x1="275" y1="12" x2="275" y2="48" stroke="currentColor" stroke-width="2.5"/>
  <line x1="275" y1="30" x2="300" y2="30" stroke="currentColor" stroke-width="2"/>
  <text x="270" y="65" text-anchor="middle" fill="currentColor">Capacitor</text>

  <!-- Row 2 -->
  <!-- Battery -->
  <line x1="10" y1="130" x2="35" y2="130" stroke="currentColor" stroke-width="2"/>
  <line x1="35" y1="110" x2="35" y2="150" stroke="currentColor" stroke-width="3"/>
  <line x1="45" y1="118" x2="45" y2="142" stroke="currentColor" stroke-width="1.5"/>
  <line x1="55" y1="110" x2="55" y2="150" stroke="currentColor" stroke-width="3"/>
  <line x1="65" y1="118" x2="65" y2="142" stroke="currentColor" stroke-width="1.5"/>
  <line x1="65" y1="130" x2="90" y2="130" stroke="currentColor" stroke-width="2"/>
  <text x="22" y="105" text-anchor="middle" fill="currentColor" font-size="11">+</text>
  <text x="78" y="105" text-anchor="middle" fill="currentColor" font-size="11">−</text>
  <text x="50" y="165" text-anchor="middle" fill="currentColor">Battery</text>

  <!-- LED -->
  <line x1="130" y1="130" x2="150" y2="130" stroke="currentColor" stroke-width="2"/>
  <polygon points="150,115 150,145 175,130" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="175" y1="115" x2="175" y2="145" stroke="currentColor" stroke-width="2"/>
  <line x1="175" y1="130" x2="195" y2="130" stroke="currentColor" stroke-width="2"/>
  <line x1="164" y1="108" x2="172" y2="100" stroke="currentColor" stroke-width="1.5"/>
  <line x1="170" y1="111" x2="178" y2="103" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="172,100 168,104 173,104" fill="currentColor"/>
  <polygon points="178,103 174,107 179,107" fill="currentColor"/>
  <text x="162" y="165" text-anchor="middle" fill="currentColor">LED</text>

  <!-- Switch -->
  <line x1="240" y1="130" x2="260" y2="130" stroke="currentColor" stroke-width="2"/>
  <circle cx="260" cy="130" r="3" fill="currentColor"/>
  <line x1="260" y1="130" x2="290" y2="112" stroke="currentColor" stroke-width="2"/>
  <circle cx="295" cy="130" r="3" fill="currentColor"/>
  <line x1="295" y1="130" x2="315" y2="130" stroke="currentColor" stroke-width="2"/>
  <text x="277" y="165" text-anchor="middle" fill="currentColor">Switch</text>

  <!-- Row 3 -->
  <!-- Ground -->
  <line x1="45" y1="200" x2="45" y2="220" stroke="currentColor" stroke-width="2"/>
  <line x1="25" y1="220" x2="65" y2="220" stroke="currentColor" stroke-width="2"/>
  <line x1="30" y1="228" x2="60" y2="228" stroke="currentColor" stroke-width="2"/>
  <line x1="36" y1="236" x2="54" y2="236" stroke="currentColor" stroke-width="2"/>
  <text x="45" y="255" text-anchor="middle" fill="currentColor">Ground</text>

  <!-- Diode -->
  <line x1="130" y1="220" x2="150" y2="220" stroke="currentColor" stroke-width="2"/>
  <polygon points="150,205 150,235 175,220" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="175" y1="205" x2="175" y2="235" stroke="currentColor" stroke-width="2"/>
  <line x1="175" y1="220" x2="195" y2="220" stroke="currentColor" stroke-width="2"/>
  <text x="162" y="255" text-anchor="middle" fill="currentColor">Diode</text>
</svg>

You don't need to memorize hundreds of them. This handful covers most simple schematics you'll encounter.

## Matching

Sort each item into the right category: **Resistor**, **Capacitor**, **Diode**

- Allows current in one direction
- Limits current flow
- Stores electrical charge
- Triangle symbol
- Two parallel lines
- Zigzag line

<details>
<summary>Answer</summary>

**Resistor**
- Zigzag line
- Limits current flow

**Capacitor**
- Two parallel lines
- Stores electrical charge

**Diode**
- Triangle symbol
- Allows current in one direction

</details>

---

[← Course overview](../../../README.md)
