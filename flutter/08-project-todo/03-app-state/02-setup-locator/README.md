# Setup Locator

The next challenge is to get access to the service somehow. Generally, you can use global variables, `InheritedWidget` or pass it down through the widget tree. But we will use a package called `get_it` that creates a global locator.

For simplicity we are already calling `setupLocator` in the `main` function but we are still missing the class we need to register.

## Assignment

Initialize the locator with the service so it's available app-wide.

> hint: to register a service with the locator, you can use `registerSingleton` such as the below example

```dart
locator.registerSingleton(AService());
```

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/utils/locator.dart`. Tests: `test/todo/todo_test.dart`, `test/todo/todo_page_view_model_test.dart`, `test/todo/todo_page_test.dart`, `test/date_service_test.dart`, `test/utils/locator_test.dart`.

---

[← Course overview](../../../README.md)
