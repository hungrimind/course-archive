# How Ultrasonic Works

# How Ultrasonic Works

The **HC-SR04** measures distance the same way a bat does: it sends out a burst of ultrasonic sound and times how long the echo takes to return.

Sound travels at about 343 meters per second. If the echo comes back in 1 millisecond, the sound traveled 34.3 cm total, but that's the *round trip*, so the object is half that distance away (17.15 cm). The formula is: **distance = (time x speed of sound) / 2**.

The sensor's range is roughly 2 cm to 4 meters. Anything closer or farther gives unreliable results.

## Quiz

**1. How does the HC-SR04 ultrasonic sensor measure distance?**

- A) It shines a laser beam and measures reflection intensity
- B) It sends ultrasonic sound and times how long the echo takes to return
- C) It measures changes in air pressure between two points
- D) It uses infrared light to detect nearby objects

<details>
<summary>Answer</summary>

- B) It sends ultrasonic sound and times how long the echo takes to return

The HC-SR04 works like a bat: it sends out a burst of ultrasonic sound and measures the time it takes for the echo to bounce back.

</details>

**2. Why do you divide the calculated distance by 2 in the distance formula?**

- A) Because the sensor has two transducers
- B) Because the sound wave travels to the object and back, covering twice the actual distance
- C) Because the speed of sound is measured in round-trip units
- D) Because the sensor samples twice per measurement

<details>
<summary>Answer</summary>

- B) Because the sound wave travels to the object and back, covering twice the actual distance

The sound travels from the sensor to the object and then back again, so the total distance traveled is twice the actual distance to the object.

</details>

**3. What is the approximate effective range of the HC-SR04 sensor?**

- A) 0 cm to 10 meters
- B) 1 cm to 2 meters
- C) 2 cm to 4 meters
- D) 10 cm to 20 meters

<details>
<summary>Answer</summary>

- C) 2 cm to 4 meters

The HC-SR04 reliably measures distances from roughly 2 cm to 4 meters. Objects closer or farther give unreliable results.

</details>

---

[← Course overview](../../../README.md)
