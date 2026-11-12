# What Is UART?

# What Is UART?

**UART** (Universal Asynchronous Receiver/Transmitter) is the simplest serial protocol. It uses just two wires: **TX** (transmit) and **RX** (receive).

The key trick: each device's TX connects to the other device's RX. Device A talks out of its TX into Device B's RX, and vice versa. Two independent one-way lanes make a two-way conversation.

There's no shared clock wire -- that's what "asynchronous" means. Both devices just have to agree ahead of time on how fast to send bits.

## Exercise: Identify the Signals

UART uses just two wires for communication. Identify which signal is TX (transmit) and which is RX (receive). Hint: TX sends data first in this exchange.

Protocol: UART

```
 Signal 1  ‾‾_‾_‾‾__‾‾‾‾‾__‾_‾‾‾
 Signal 2  ‾‾‾‾‾‾‾_‾‾__‾_‾‾_‾‾‾‾
```

Label options: TX, RX, SCLK, SDA

<details>
<summary>Answer</summary>

- Signal 1: TX
- Signal 2: RX

</details>


_The full exercise definition is in [interactive.json](interactive.json)._

---

[← Course overview](../../../README.md)
