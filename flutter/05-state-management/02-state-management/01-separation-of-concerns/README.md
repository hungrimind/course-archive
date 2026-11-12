# Separation of concerns

Imagine a page containing unread notifications, error messages, and auth states. Should all these live on that page?

Well, no, probably not :).

You can break that state into separate logical pieces using something like `ChangeNotifier`. This allows you to separate your "business" logic from your UI.

```dart
class AuthNotifier extends ChangeNotifier {
  // handle auth states
}

class NotificationNotifier extends ChangeNotifier {
  // handle notifications that are read/unread.
}
```

## Why do this?

This looks like a lot of effort, so what's the point? Why don't we `setState` everything?

1. Your code is more readable.
2. Improved maintainability: Changes to one concern are less likely to affect others.
3. Better scalability: As your app grows, adding or modifying features is easier.
4. Promotes reusability: Separated components can often be reused in different contexts.
5. Facilitates collaboration: Different team members can work on separate concerns simultaneously.
6. Easier to refactor: Isolated concerns are simpler to update or replace.
7. Easier to test: You can test only the "business" logic.

You get the point.

> The approach above might not be ideal, but it is an example of why separation of concern matters.

## Quiz

**1. What is the main purpose of separating state into different ChangeNotifiers?**

- A) To make the code run faster
- B) To separate business logic from UI code
- C) To use less memory
- D) To write more code

<details>
<summary>Answer</summary>

- B) To separate business logic from UI code

</details>

---

[← Course overview](../../../README.md)
