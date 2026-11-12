# Machine Code

# Machine Code

The CPU only understands **machine code**, raw binary numbers. Every instruction is a pattern of 1s and 0s that tells the CPU to perform one tiny operation, like adding two numbers or moving data.

```text
10110000 01100001
```

That's a real x86 instruction. It means "put the number 97 into a register." Every program you've ever used, every app, every game, is ultimately just millions of instructions like this, racing through the CPU.

Humans almost never write machine code directly. It's too error-prone and impossible to read at scale.

## Quiz

**1. What is machine code?**

- A) English-like commands the CPU reads directly
- B) Raw binary instructions (1s and 0s) that the CPU understands
- C) A type of programming language similar to Python
- D) A file format used to store source code

<details>
<summary>Answer</summary>

- B) Raw binary instructions (1s and 0s) that the CPU understands

Machine code is the raw binary (1s and 0s) that a CPU actually executes. Every program eventually becomes machine code before it runs.

</details>

**2. Why do humans almost never write machine code directly?**

- A) It runs too slowly on modern CPUs
- B) It is illegal to distribute machine code
- C) It is too error-prone and nearly impossible to read at scale
- D) CPUs no longer support it

<details>
<summary>Answer</summary>

- C) It is too error-prone and nearly impossible to read at scale

Writing raw binary is extremely tedious and error-prone, which is why higher-level tools like assembly and programming languages exist.

</details>

**3. What does a single machine code instruction typically do?**

- A) Runs an entire application at once
- B) One tiny operation, like adding numbers or moving data
- C) Compiles source code into an executable
- D) Translates English into binary

<details>
<summary>Answer</summary>

- B) One tiny operation, like adding numbers or moving data

Each machine code instruction performs just one very small operation. Programs are built from millions of these tiny steps running in sequence.

</details>

---

[← Course overview](../../../README.md)
