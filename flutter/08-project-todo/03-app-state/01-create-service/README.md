# Create Service

This is the core part of MVVM. However, most apps will include some logic and state shared between multiple features. We call these services.

## Assignment

Create a `DateService` that initializes with the current time and holds that time. And add a function called `resetDate` to reset the time to the current time.

This is just for demonstration purposes; we could get way more complex with the type of service, but we’ll keep it simple so that you can fully understand everything.

### Requirements

1. Make sure the `ValueNotifier` is initialized with the current date.
2. A function that resets the date to the current date.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/date_service.dart`. Tests: `test/todo/todo_test.dart`, `test/todo/todo_page_view_model_test.dart`, `test/todo/todo_page_test.dart`, `test/date_service_test.dart`.

---

[← Course overview](../../../README.md)
