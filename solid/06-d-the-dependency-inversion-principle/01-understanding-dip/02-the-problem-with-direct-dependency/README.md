# The Problem with Direct Dependency

Direct dependency occurs when a high-level module directly depends on a low-level module. This can create tight coupling, making your codebase rigid and difficult to change.

```dart
class Database {
  void saveData(String data) {
    // Code to save data
  }
}

class Report {
  Database db = Database();

  void generateReport(String data) {
    db.saveData(data);
  }
}
```

Here, the `Report` class is tightly coupled to the `Database` class. If the database implementation changes, the `Report` class must also be modified.

> [!warning]
> Direct dependencies limit flexibility, making it hard to swap out components or adapt to new requirements.

## Assignment

Implement the methods in the `Database`, `Report`, `InMemoryStorage`, and `DecoupledReport` classes to manage data storage effectively.

Your implementation should:
- Save data in the internal storage of `Database` and `InMemoryStorage` when the respective `save` methods are called.
- Return the saved data as an unmodifiable list in both storage classes.
- Ensure that the `generateReport` method in both `Report` and `DecoupledReport` correctly saves report data using their respective storage methods.
- The expected output for the main function should be:
  ```
  Direct:[direct1, direct2]
  Decoupled:[dec1]
  ```

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/direct_dependency.dart`. Tests: `test/direct_dependency_test.dart`.

---

[← Course overview](../../../README.md)
