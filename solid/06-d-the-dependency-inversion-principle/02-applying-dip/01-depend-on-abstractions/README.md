# Depend on Abstractions

When applying the **Dependency Inversion Principle** (DIP), focus on depending on abstractions, not concrete implementations. This means high-level modules should not rely on low-level modules directly; both should depend on interfaces or abstract classes.

```dart
abstract class NotificationService {
  void send(String message);
}

class EmailService implements NotificationService {
  void send(String message) {
    // Send email logic
  }
}

class NotificationManager {
  final NotificationService service;

  NotificationManager(this.service);

  void notify(String message) {
    service.send(message);
  }
}
```

Here, `NotificationManager` depends on the `NotificationService` abstraction, allowing flexibility to switch `EmailService` with any other service implementing `NotificationService`. 

> [!tip]
> This approach promotes loose coupling, making the system easier to extend and maintain.

## Assignment

Implement the `send` methods for both `EmailService` and `SmsService`, and complete the `notify` method in `NotificationManager`.

Your implementation should:
- In `EmailService.send`, print "EmailService: Sending '<message>'" where `<message>` is the parameter.
- In `SmsService.send`, print "SmsService: Sending '<message>'" where `<message>` is the parameter.
- In `NotificationManager.notify`, call the `send` method of the `NotificationService` to forward the message appropriately.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/dependency_inversion.dart`. Tests: `test/dependency_inversion_test.dart`.

---

[← Course overview](../../../README.md)
