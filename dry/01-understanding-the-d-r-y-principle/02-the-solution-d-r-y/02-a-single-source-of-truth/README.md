# A Single Source of Truth

A **Single Source of Truth** means storing data or logic in one place to ensure consistency. This avoids errors from duplicated information across your code.

```dart
const double pi = 3.14159; // Single source for the value of pi
```

By maintaining a single source, you reduce the risk of inconsistencies and simplify updates. If `pi` changes, you only update it once. 

> [!tip]
> Use constants or functions to centralize values and logic that might be reused.

## Matching

Sort each item into the right category: **Examples of Single Source of Truth**, **Benefits of Single Source of Truth**, **Violations of Single Source of Truth**

- Duplicated function logic
- Hard-coded values in multiple files
- Reduces inconsistencies
- Simplifies updates
- const double pi = 3.14159;
- function getApiBaseUrl()

<details>
<summary>Answer</summary>

**Examples of Single Source of Truth**
- const double pi = 3.14159;
- function getApiBaseUrl()

**Benefits of Single Source of Truth**
- Reduces inconsistencies
- Simplifies updates

**Violations of Single Source of Truth**
- Hard-coded values in multiple files
- Duplicated function logic

</details>

---

[← Course overview](../../../README.md)
