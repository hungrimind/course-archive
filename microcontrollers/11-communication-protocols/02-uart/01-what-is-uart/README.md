# What Is UART?

# What Is UART?

**UART** (Universal Asynchronous Receiver/Transmitter) is the simplest serial protocol. It uses just two wires: **TX** (transmit) and **RX** (receive).

The key trick: each device's TX connects to the other device's RX. Device A talks out of its TX into Device B's RX, and vice versa. Two independent one-way lanes make a two-way conversation.

There's no shared clock wire -- that's what "asynchronous" means. Both devices just have to agree ahead of time on how fast to send bits.

## Exercise

On the platform this lesson ended with an interactive signal-matching exercise. Its full definition (components, rules and the expected answer) is in [interactive.json](interactive.json).

---

[← Course overview](../../../README.md)
