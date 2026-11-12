# One Reason to Change

A **class** should have only one reason to change. This is the core of the Single Responsibility Principle (SRP). Each class should focus on a single responsibility or task.

Imagine a class as a *specialist*. If it has too many jobs, changes in one area can break others. Keeping it focused means less risk of unexpected side effects.

> [!tip]
> If you can describe a class's purpose in one sentence without using "and", you're likely following SRP.

## Fill in the Blanks

Fill in the blanks:

```
The LoggingService class handles writing logs and sending alerts. To adhere to SRP, you should separate it into __(1)__ distinct classes: one focusing on logging and another on __(2)__.
```

<details>
<summary>Answer</summary>

1. `two`
2. `alerts`

</details>

---

[← Course overview](../../../README.md)
