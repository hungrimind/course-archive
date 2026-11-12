# Nesting ValueListenableBuilder

This next challenge is optional. This doesn’t change the function much, but it makes the code take up less space horizontally and look nicer.

We have created a utility widget that combines 3 `ValueListenableBuilder` into 1. Depending on the use case, this might not be the best approach because it will cause a rebuild whenever any of the values change.

Theoretically, this will make our app less performant, but since it's such a small app, and the page is small too, this will be unnoticeable.

## Requirements

1. Use a single `ValueListenableBuilder3` instead of separate `ValueListenableBuilder` widgets.
2. Make sure the type is `ValueListenableBuilder3<bool, DateTime, List<Todo>>`

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/todo/todo_page.dart`. Tests: `test/todo/todo_test.dart`, `test/todo/todo_page_view_model_test.dart`, `test/todo/todo_page_test.dart`, `test/date_service_test.dart`, `test/utils/locator_test.dart`.

---

[← Course overview](../../../README.md)
