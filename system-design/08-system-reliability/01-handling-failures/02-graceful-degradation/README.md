# Graceful Degradation

A **graceful degradation** strategy ensures a system remains partially functional when some components fail. It prioritizes maintaining core operations while reducing or disabling less critical features.

For example, if a video streaming service's recommendation engine fails, users can still watch videos, but recommendations won't be displayed.

> [!tip]
> Graceful degradation helps maintain user trust by ensuring essential services continue during failures.

## Quiz

**1. What is the primary goal of a graceful degradation strategy?**

- A) To improve system performance under normal conditions
- B) To completely disable the system during component failure
- C) To optimize the system's design for future upgrades
- D) To maintain core operations while disabling less critical features during failures

<details>
<summary>Answer</summary>

- D) To maintain core operations while disabling less critical features during failures

The primary goal of a graceful degradation strategy is to ensure the system remains partially functional, focusing on maintaining core operations even when some components fail.

</details>

**2. How does graceful degradation benefit users?**

- A) It ensures services are completely halted for safety during failures
- B) It helps maintain user trust by ensuring essential services continue
- C) It guarantees that all features work perfectly at all times
- D) It invalidates any partial service features completely

<details>
<summary>Answer</summary>

- B) It helps maintain user trust by ensuring essential services continue

Graceful degradation benefits users by maintaining essential services even during failures, which helps maintain user trust.

</details>

**3. In the lesson example, what would happen if the video streaming service's recommendation engine fails?**

- A) Users would be unable to watch videos
- B) The entire platform would shut down
- C) Users could still watch videos, but recommendations wouldn't be displayed
- D) Users would experience an improved recommendation system

<details>
<summary>Answer</summary>

- C) Users could still watch videos, but recommendations wouldn't be displayed

If the recommendation engine fails, users can still watch videos; however, the recommendation feature would be disabled, illustrating graceful degradation.

</details>

---

[← Course overview](../../../README.md)
