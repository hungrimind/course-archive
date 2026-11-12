# What is Hexadecimal?

# What is Hexadecimal?

**Hexadecimal** (hex) is a number system with 16 digits: 0-9, then A-F (where A=10, B=11, ... F=15). One hex digit represents exactly four bits, which makes it a compact way to write binary.

```text
Binary:  1111 1111
Hex:        F    F
```

Instead of reading eight binary digits, you read two hex characters. That's why hex shows up everywhere computers deal with raw data, like color codes. The color code `#FF5733` is just three pairs of hex digits representing red, green, and blue.

## Quiz

**1. How many different digits does the hexadecimal system use?**

- A) 2
- B) 10
- C) 16
- D) 32

<details>
<summary>Answer</summary>

- C) 16

Hexadecimal uses 16 digits: 0-9 followed by A-F, where A represents 10 and F represents 15. That's why it's called 'hex' (six) plus 'decimal' (ten).

</details>

**2. How many bits does a single hexadecimal digit represent?**

- A) 2 bits
- B) 4 bits
- C) 8 bits
- D) 16 bits

<details>
<summary>Answer</summary>

- B) 4 bits

One hex digit maps exactly to 4 bits because 2^4 = 16, matching the 16 possible hex values. This clean mapping is why hex is a compact way to write binary.

</details>

**3. In hexadecimal, what decimal value does the letter 'B' represent?**

- A) 10
- B) 11
- C) 12
- D) 13

<details>
<summary>Answer</summary>

- B) 11

After 9, hex continues with letters: A=10, B=11, C=12, D=13, E=14, F=15. Letters are used so each digit stays a single character.

</details>

**4. Why is hexadecimal commonly used in color codes like #FF5733?**

- A) Because it can express decimals
- B) Because it's the only system computers understand
- C) Because two hex digits compactly represent one byte (0-255) per color channel
- D) Because it uses fewer digits than binary for large numbers only

<details>
<summary>Answer</summary>

- C) Because two hex digits compactly represent one byte (0-255) per color channel

Each color channel (red, green, blue) fits in one byte (8 bits), and two hex digits perfectly represent one byte. So #FF5733 cleanly encodes three color values in just six characters.

</details>

---

[← Course overview](../../../README.md)
