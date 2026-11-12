# Common Sensor Errors

# Common Sensor Errors

Sensors lie sometimes. A DHT might report -999 C, an ultrasonic sensor might return 0 cm, or a soil sensor might spike from 400 to 1023 and back in a single second. These aren't real measurements. They're **garbage readings**.

The usual culprits: **loose jumper wires** causing intermittent connections, **electrical noise** from nearby motors or long cables picking up interference, and **timing failures** where the Pi was too busy to catch a sensor's microsecond-precise signal.

The sensor itself is rarely broken. Before blaming hardware, check your wiring, shorten your cables, and make sure nothing is pulling too much power from the same rail.

## Matching

Sort each item into the right category: **Loose Wires**, **Electrical Noise**, **Timing Failures**

- Interference from nearby motors
- Intermittent connections
- Long cables picking up stray signals
- Missed sensor responses during high CPU load
- Pi too busy to catch microsecond-precise signals
- Readings that cut in and out randomly

<details>
<summary>Answer</summary>

**Loose Wires**
- Intermittent connections
- Readings that cut in and out randomly

**Electrical Noise**
- Interference from nearby motors
- Long cables picking up stray signals

**Timing Failures**
- Pi too busy to catch microsecond-precise signals
- Missed sensor responses during high CPU load

</details>

---

[← Course overview](../../../README.md)
