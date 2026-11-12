# Assembly Language

# Assembly Language

**Assembly** replaces raw binary with short, human-readable commands. That machine code instruction from before? In assembly it looks like this:

```asm
MOV AL, 61h
```

Same instruction, same CPU operation, just easier to read. `MOV` means "move this value," and `AL` is the register. You can actually tell what's happening now.

But assembly is still tied to one specific CPU type, and writing a full program in it is tedious. It was a step forward from raw binary, but programmers needed something better.

## Quiz

**1. What problem does assembly language solve compared to raw machine code?**

- A) It makes programs run much faster than binary
- B) It replaces binary with short, human-readable commands
- C) It lets the CPU execute English sentences directly
- D) It removes the need for a CPU entirely

<details>
<summary>Answer</summary>

- B) It replaces binary with short, human-readable commands

Assembly uses short mnemonics like MOV instead of raw 1s and 0s, making instructions much easier for humans to read and write.

</details>

**2. In the assembly instruction MOV AL, 61h, what does MOV represent?**

- A) A type of CPU register
- B) A memory address
- C) A command that moves a value
- D) A hexadecimal number

<details>
<summary>Answer</summary>

- C) A command that moves a value

MOV is a mnemonic that tells the CPU to move a value. AL is the destination register, and 61h is the value being moved.

</details>

**3. What is a major limitation of assembly language?**

- A) It cannot produce working programs
- B) It is tied to one specific CPU type and tedious for full programs
- C) It is slower than writing in Python
- D) It cannot be read by humans

<details>
<summary>Answer</summary>

- B) It is tied to one specific CPU type and tedious for full programs

Assembly is specific to one CPU architecture, so code written for one chip won't run on another. It is also very tedious for large programs.

</details>

---

[← Course overview](../../../README.md)
