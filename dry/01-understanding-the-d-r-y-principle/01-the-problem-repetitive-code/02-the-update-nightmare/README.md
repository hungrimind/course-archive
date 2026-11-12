# The Update Nightmare

When code is duplicated across your project, an **update nightmare** occurs. This problem arises when a change must be made in several places, increasing the risk of errors.

Imagine updating a hardcoded tax rate in multiple files. If you miss one, your application might calculate taxes incorrectly, leading to inconsistent behavior.

```dart
// Repeated code
double taxRate1 = 0.07;
double taxRate2 = 0.07;
double taxRate3 = 0.07;
```

A single update should be enough, but code duplication forces multiple edits. This tedious process is error-prone and time-consuming, complicating maintenance. 

> [!warning]
> Forgetting to update all instances can cause bugs and inconsistencies.

## Quiz

**1. What is the main risk associated with code duplication across a project?**

- A) Slower application performance
- B) Update nightmares leading to increased error risk
- C) Less readable code
- D) Larger file sizes

<details>
<summary>Answer</summary>

- B) Update nightmares leading to increased error risk

</details>

**2. Why is updating a hardcoded value in multiple files considered problematic?**

- A) It ensures that all files have the most recent update
- B) It increases the risk of overlooking instances, causing inconsistency
- C) It makes the code easier to read
- D) It simplifies version control

<details>
<summary>Answer</summary>

- B) It increases the risk of overlooking instances, causing inconsistency

</details>

**3. How can you prevent the complications of code duplication?**

- A) By using unique variables for each instance
- B) By consolidating repeated values into constants or variables
- C) By avoiding the use of functions
- D) By increasing the number of comments in the code

<details>
<summary>Answer</summary>

- B) By consolidating repeated values into constants or variables

</details>

---

[← Course overview](../../../README.md)
