# Following the Current

# Following the Current

Reading a schematic is just tracing a path. Start at the **positive terminal** of the power source, follow the lines through each component, and end at the **negative terminal**.

<svg viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;font-family:sans-serif;font-size:11px">
  <!-- Battery -->
  <line x1="30" y1="70" x2="55" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="55" y1="45" x2="55" y2="95" stroke="currentColor" stroke-width="3"/>
  <line x1="65" y1="53" x2="65" y2="87" stroke="currentColor" stroke-width="1.5"/>
  <text x="48" y="38" text-anchor="middle" fill="currentColor" font-size="10">+</text>
  <text x="72" y="38" text-anchor="middle" fill="currentColor" font-size="10">−</text>

  <!-- Top wire from + -->
  <line x1="30" y1="70" x2="30" y2="20" stroke="currentColor" stroke-width="2"/>
  <line x1="30" y1="20" x2="120" y2="20" stroke="currentColor" stroke-width="2"/>

  <!-- Flow arrow 1 -->
  <polygon points="80,15 80,25 90,20" fill="#c8956c"/>
  <text x="80" y="12" fill="#c8956c" font-size="10">①</text>

  <!-- Resistor -->
  <polyline points="120,20 127,8 141,32 155,8 169,32 176,20" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="148" y="45" text-anchor="middle" fill="currentColor" font-size="10">R</text>

  <!-- Wire to junction -->
  <line x1="176" y1="20" x2="250" y2="20" stroke="currentColor" stroke-width="2"/>

  <!-- Flow arrow 2 -->
  <polygon points="210,15 210,25 220,20" fill="#c8956c"/>
  <text x="210" y="12" fill="#c8956c" font-size="10">②</text>

  <!-- Junction dot -->
  <circle cx="250" cy="20" r="4" fill="currentColor"/>
  <text x="250" y="10" text-anchor="middle" fill="#c8956c" font-size="10">junction</text>

  <!-- Branch A: LED top path -->
  <line x1="250" y1="20" x2="310" y2="20" stroke="currentColor" stroke-width="2"/>
  <polygon points="290,15 290,25 300,20" fill="#c8956c"/>

  <!-- Branch B: LED bottom path -->
  <line x1="250" y1="20" x2="250" y2="100" stroke="currentColor" stroke-width="2"/>
  <line x1="250" y1="100" x2="310" y2="100" stroke="currentColor" stroke-width="2"/>
  <polygon points="275,95 275,105 285,100" fill="#c8956c"/>

  <!-- LED A -->
  <polygon points="310,10 310,30 325,20" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="325" y1="10" x2="325" y2="30" stroke="currentColor" stroke-width="2"/>
  <text x="318" y="45" text-anchor="middle" fill="currentColor" font-size="10">LED</text>

  <!-- LED B -->
  <polygon points="310,90 310,110 325,100" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="325" y1="90" x2="325" y2="110" stroke="currentColor" stroke-width="2"/>
  <text x="318" y="125" text-anchor="middle" fill="currentColor" font-size="10">LED</text>

  <!-- Merge back -->
  <line x1="325" y1="20" x2="345" y2="20" stroke="currentColor" stroke-width="2"/>
  <line x1="345" y1="20" x2="345" y2="100" stroke="currentColor" stroke-width="2"/>
  <line x1="325" y1="100" x2="345" y2="100" stroke="currentColor" stroke-width="2"/>
  <line x1="345" y1="100" x2="345" y2="120" stroke="currentColor" stroke-width="2"/>
  <line x1="345" y1="120" x2="65" y2="120" stroke="currentColor" stroke-width="2"/>
  <line x1="65" y1="120" x2="65" y2="70" stroke="currentColor" stroke-width="2"/>

  <!-- Flow arrow return -->
  <polygon points="200,125 200,115 190,120" fill="#c8956c"/>
  <text x="195" y="135" fill="#c8956c" font-size="10">③ back to −</text>
</svg>

Follow the orange arrows: current flows from **+**, through the resistor ①②, splits at the **junction** into two LED branches, merges, and returns to **−** ③. Where lines meet at a junction, the current splits or merges, just like a fork in the road.

## Quiz

**1. When reading a schematic, where do you start tracing the current?**

- A) At the ground symbol
- B) At the first resistor
- C) At the positive terminal of the power source
- D) At any component in the middle of the circuit

<details>
<summary>Answer</summary>

- C) At the positive terminal of the power source

You trace current starting from the positive terminal of the power source, following the lines through each component, and ending at the negative terminal.

</details>

**2. What happens to the current at a junction in a schematic?**

- A) It stops and reverses direction
- B) It splits or merges, like a fork in the road
- C) It always doubles in strength
- D) It bypasses the junction entirely

<details>
<summary>Answer</summary>

- B) It splits or merges, like a fork in the road

Where lines meet at a junction, the current either splits into multiple paths or merges back together, just like traffic at a fork in the road.

</details>

---

[← Course overview](../../../README.md)
