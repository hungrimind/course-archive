# Input Validation

**Input validation** is the process of ensuring that user input is accurate and safe before using it in your system. This prevents malicious data from causing harm or unexpected behavior.

```typescript
function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

In this example, the function checks if an email string matches the standard email format, preventing invalid data from entering the system.

> [!warning]
> Always validate input on both the client and server sides to ensure full protection against harmful data.

## Quiz

**1. What is the primary purpose of input validation?**

- A) To improve system performance
- B) To ensure user input is accurate and safe
- C) To enhance user interface aesthetics
- D) To store user preferences

<details>
<summary>Answer</summary>

- B) To ensure user input is accurate and safe

Input validation ensures that the user input is accurate and safe, preventing malicious data from causing harm or unexpected behavior.

</details>

**2. Why should input validation be performed on both the client and server sides?**

- A) To increase the speed of data processing
- B) To reduce the need for server resources
- C) To ensure full protection against harmful data
- D) To simplify code maintenance

<details>
<summary>Answer</summary>

- C) To ensure full protection against harmful data

Validating input on both client and server sides ensures comprehensive protection against harmful data breaches, as client-side checks can be bypassed.

</details>

**3. What does the regular expression /^[^\s@]+@[^\s@]+\.[^\s@]+$/ check for in the validateEmail function?**

- A) That an email string contains uppercase letters
- B) That an email string matches a standard email format
- C) That an email string contains only numbers
- D) That an email string is empty

<details>
<summary>Answer</summary>

- B) That an email string matches a standard email format

The regular expression checks if the email string adheres to a standard email format, ensuring it's valid before entering the system.

</details>

---

[← Course overview](../../../README.md)
