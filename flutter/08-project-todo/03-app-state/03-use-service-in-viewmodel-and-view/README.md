# Use Service in ViewModel and View

The service is set up. All that is left to do is to use it. Again, we are adding this service to demonstrate how services work and how they can be updated. So this “feature” might not make the most sense for a production app, but we are doing it for learning, so it’s fine 🙂.

Remember, the View should only interact with the ViewModel and not the service.

> We have gone ahead and constructor injected the service to the ViewModel with `locator<DateService>()` in the view and created the `dateNotifier` you will be using.

## Assignment

Use the `dateNotifier` to display the time stored in the service (including seconds) in the `AppBar`.

### Requirements

1. Display the time stored in the service (including seconds) in the `AppBar`.
1. Add a second `FloatingActionButton` that triggers that date to be updated.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/todo/todo_page.dart`. Tests: `test/todo/todo_test.dart`, `test/todo/todo_page_view_model_test.dart`, `test/todo/todo_page_test.dart`, `test/date_service_test.dart`, `test/utils/locator_test.dart`.

---

[← Course overview](../../../README.md)
