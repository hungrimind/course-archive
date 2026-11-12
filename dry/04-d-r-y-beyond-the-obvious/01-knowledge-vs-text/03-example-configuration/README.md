# Example: Configuration

A **configuration** often involves settings or parameters that control the behavior of a program. Repeating these settings in multiple places can lead to maintenance headaches.

Instead, centralize your configuration in one place. This way, if a setting changes, you only update it in one location.

```dart
// Centralized configuration
const apiUrl = 'https://api.example.com';
const timeout = 5000;

// Use these constants throughout your code
```

> [!tip]
> Use a configuration file or constants to store settings, ensuring all parts of your application reference the same values.

## Quiz

**1. What is a key benefit of centralizing configuration settings in a program?**

- A) It increases code readability.
- B) It ensures settings are updated consistently across the application.
- C) It makes the program run faster.
- D) It reduces the need for debugging.

<details>
<summary>Answer</summary>

- B) It ensures settings are updated consistently across the application.

</details>

**2. Which of the following is a recommended practice when handling configuration settings in a program?**

- A) Duplicate settings in each module.
- B) Keep settings in a centralized configuration file or as constants.
- C) Use hard-coded values directly in each function.
- D) Store settings in random locations throughout the code.

<details>
<summary>Answer</summary>

- B) Keep settings in a centralized configuration file or as constants.

</details>

**3. In the provided code example, what is the role of the 'const' keyword in Dart?**

- A) It declares a variable that can be changed anytime.
- B) It marks a value as being immutable and used as a constant.
- C) It is used to declare a list.
- D) It temporarily stores data until the program is terminated.

<details>
<summary>Answer</summary>

- B) It marks a value as being immutable and used as a constant.

</details>

---

[← Course overview](../../../README.md)
