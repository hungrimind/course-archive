# A Code Example That Violates SRP

A **Single Responsibility Principle (SRP)** dictates that a class should have only one reason to change, meaning it should only have one job or responsibility.

Here's a code example that violates SRP:

```dart
class Report {
  void generateReport() {
    // Logic to generate report
  }

  void printReport() {
    // Logic to print report
  }
}
```

This `Report` class has two responsibilities: generating and printing reports. If either the generation or printing logic changes, the class must be modified, violating SRP.

> [!warning]
> Classes with multiple responsibilities are harder to maintain and test. Keep each class focused on a single task.

## Matching

Sort each item into the right category: **SRP Violations**, **Correct Classes**, **Tasks for Implementation**

- Report class with two methods
- ReportGenerator class
- ReportPrinter class
- generate method
- printReport method

<details>
<summary>Answer</summary>

**SRP Violations**
- Report class with two methods

**Correct Classes**
- ReportGenerator class
- ReportPrinter class

**Tasks for Implementation**
- generate method
- printReport method

</details>

---

[← Course overview](../../../README.md)
