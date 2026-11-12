# Inverting the Dependency

# Inverting the Dependency

Inverting the dependency means making high-level modules (central components) independent of low-level modules (detailed components) by relying on **abstractions** (interfaces or abstract classes). This approach ensures that both high-level and low-level modules depend on the same abstraction, promoting flexibility and maintainability.

```dart
// High-level module
class ReportGenerator {
  final Storage storage;

  ReportGenerator(this.storage);

  void generate() {
    storage.save('Report data');
  }
}

// Low-level module
abstract class Storage {
  void save(String data);
}

class FileStorage implements Storage {
  void save(String data) {
    print('Saving to file: $data');
  }
}
```

Here, `ReportGenerator` depends on the `Storage` abstraction rather than a specific storage implementation, allowing you to switch storage types easily.

> [!tip]
> Use interfaces to define contracts between modules, enabling easy swapping of implementations.

## Assignment

Implement the `save` method for both `FileStorage` and `DatabaseStorage` classes, and complete the `generate` method in the `ReportGenerator` class.

Your implementation should:
- In `FileStorage.save`, print "Saving to file: Report data"
- In `DatabaseStorage.save`, print "Saving to database: Report data"
- In `ReportGenerator.generate`, call `storage.save` with the string "Report data"

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/inverting_dependency.dart`. Tests: `test/inverting_dependency_test.dart`.

---

[← Course overview](../../../README.md)
