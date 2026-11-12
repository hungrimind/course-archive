# Separating Concerns

## Separating Concerns

**Separating concerns** means dividing a program into distinct sections, each responsible for a specific task. This aligns with the Single Responsibility Principle, ensuring each class or function has one reason to change.

Imagine a class that handles both user authentication and data retrieval. This class has two responsibilities, making it harder to maintain.

```dart
class UserManager {
  void authenticate(String username, String password) {
    // Authentication logic
  }

  void fetchData() {
    // Data retrieval logic
  }
}
```

By separating concerns, you'd create one class for authentication and another for data retrieval, simplifying maintenance and enhancing clarity.

> [!tip]
> Keeping concerns separate reduces bugs and makes future updates easier.

## Assignment

Implement the `authenticate` method in the `AuthService` class to validate user credentials.

Your implementation should:
- Return `true` if the provided `username` is 'alice' and the `password` is 'password123'.
- Return `false` for all other username and password combinations.
- Ensure the `run` method in `UserManager` prints "Authentication successful" or "Authentication failed" based on the authentication result.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/separating_concerns.dart`. Tests: `test/separating_concerns_test.dart`.

---

[← Course overview](../../../README.md)
