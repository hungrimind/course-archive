# Handling Bad Readings

# Handling Bad Readings

Never trust a single sensor reading. The simplest defense is a **range check**: if your temperature sensor returns -999 or your distance sensor says 0, throw that reading away and try again.

For smoother data, take several readings and **average** them, or use a **median** to automatically ignore outliers. Five readings where four say 23 C and one says -40 C? The median gives you 23 C without any extra logic.

```python
readings = [get_temp() for _ in range(5)]
valid = [r for r in readings if -40 <= r <= 80]
temp = sorted(valid)[len(valid) // 2]  # median
```

## Quiz

**1. What is a 'range check' used for when reading sensor data?**

- A) To verify the sensor is within Bluetooth range of the Pi
- B) To discard readings that fall outside physically possible values
- C) To measure the maximum distance a sensor can detect
- D) To calibrate the sensor's operating voltage range

<details>
<summary>Answer</summary>

- B) To discard readings that fall outside physically possible values

A range check filters out garbage readings by throwing away values that are clearly impossible, like a temperature of -999 °C or a distance of 0 cm.

</details>

**2. Why is using the median of multiple readings often better than using the average?**

- A) The median is faster to compute than the average
- B) The median automatically ignores outliers without extra filtering logic
- C) The median gives more decimal places of precision
- D) The median works without needing to sort the data

<details>
<summary>Answer</summary>

- B) The median automatically ignores outliers without extra filtering logic

If four out of five readings say 23 °C and one says -40 °C, the median gives you 23 °C. An average would be dragged down by the outlier, giving you an incorrect result.

</details>

**3. What should you check first before concluding that a sensor is broken?**

- A) The manufacturer's return policy
- B) Whether a newer sensor model is available
- C) Your wiring, cable length, and whether anything is pulling too much power from the same rail
- D) The ambient room temperature and humidity levels

<details>
<summary>Answer</summary>

- C) Your wiring, cable length, and whether anything is pulling too much power from the same rail

The sensor itself is rarely broken. Loose wiring, long cables, and power issues on the same rail are the most common causes of bad readings.

</details>

---

[← Course overview](../../../README.md)
