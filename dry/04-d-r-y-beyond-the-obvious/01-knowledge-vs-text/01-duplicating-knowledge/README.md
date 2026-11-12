# Duplicating Knowledge

Duplicating knowledge occurs when the same information is represented in multiple places, even if the code looks different. This can lead to maintenance headaches, as changes in one place may not propagate to others, causing inconsistencies.

For instance, if validation rules are hardcoded in multiple files, updating a rule requires changes in every location, increasing the risk of errors.

```dart
bool isValidEmail(String email) {
  return email.contains('@') && email.endsWith('.com');
}
// Similar logic elsewhere...
```

> [!tip]
> Use a centralized function or configuration file to store shared logic or data, ensuring a single source of truth.

## Quiz

**1. What is a potential consequence of duplicating knowledge in code?**

- A) Improved performance
- B) Increased risk of inconsistencies
- C) Easier code readability
- D) Reduction in code complexity

<details>
<summary>Answer</summary>

- B) Increased risk of inconsistencies

</details>

**2. Why is hardcoding validation rules in multiple files a bad practice?**

- A) It makes the code execution faster
- B) It simplifies the debugging process
- C) It requires changes in every location when updates are needed
- D) It enhances code modularity

<details>
<summary>Answer</summary>

- C) It requires changes in every location when updates are needed

</details>

**3. What is a recommended approach to manage shared logic or data effectively?**

- A) Use hardcoded values for each instance
- B) Use a centralized function or configuration file
- C) Duplicate the logic across different files
- D) Rely on multiple sources of truth

<details>
<summary>Answer</summary>

- B) Use a centralized function or configuration file

</details>

---

[← Course overview](../../../README.md)
