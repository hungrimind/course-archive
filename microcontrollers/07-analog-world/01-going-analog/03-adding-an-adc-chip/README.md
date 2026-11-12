# Adding an ADC Chip

# Adding an ADC Chip

The Raspberry Pi has no built-in ADC, so you wire up an external one. The **MCP3008** is the go-to: it's a 10-bit ADC with 8 input channels, connected over SPI.

```python
import busio, digitalio, board
from adafruit_mcp3xxx.mcp3008 import MCP3008
from adafruit_mcp3xxx.analog_in import AnalogIn

spi = busio.SPI(clock=board.SCK, MISO=board.MISO, MOSI=board.MOSI)
cs = digitalio.DigitalInOut(board.D5)
mcp = MCP3008(spi, cs)
chan = AnalogIn(mcp, MCP3008.P0)
print(chan.value, chan.voltage)
```

Each of the 8 channels can read a different sensor or knob independently.

## Fill in the Blanks

Fill in the blanks:

```python
import busio, digitalio, board
from adafruit_mcp3xxx.mcp3008 import MCP3008
from adafruit_mcp3xxx.analog_in import AnalogIn

spi = busio.SPI(clock=board.SCK, MISO=board.MISO, MOSI=board.MOSI)
cs = digitalio.DigitalInOut(board.D5)
mcp = __(1)__
chan = __(2)__
print(chan.value, chan.voltage)
```

<details>
<summary>Answer</summary>

1. `MCP3008(spi, cs)`
2. `AnalogIn(mcp, MCP3008.P0)`

</details>

---

[← Course overview](../../../README.md)
