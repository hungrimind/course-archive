# Service

A service is similar to a ViewModel; the main difference is that it's not attached to a single view because it is meant to be used app-wide.

Eventually, it needs to be interacted with by our app, so it must be passed into the ViewModel. This is done by being injected through the ViewModel's constructor. So, anytime you have multiple views depending on the same state, that should be a service that those ViewModels depend on.

All properties should be ValueNotifiers, and the ViewModel will expose getters for those on which the view can react.

In the previous example, we had the todos within a single ViewModel. That means it was tied to a single page. What if we wanted access to the todos across multiple pages? Then, we would use a service. Here is what that would look like:

Before:

```dart
class TodoPageViewModel {
  TodoPageViewModel()

  final ValueNotifier<List<Todo>> todosNotifier = ValueNotifier([]);

  void add(Todo todo) {
    todosNotifier.value = [...todosNotifier.value, todo];
  }
}
```

After:

```dart
class TodoService {
  final ValueNotifier<List<Todo>> todosNotifier = ValueNotifier([]);

  void add(Todo todo) {
    todosNotifier.value = [...todosNotifier.value, todo];
  }
}

class TodoPageViewModel {
  TodoPageViewModel({required TodoService todoService}) : _todoService = todoService;

  final TodoService _todoService;

  get ValueNotifier<List<Todo>> todosNotifier => _todoService.todosNotifier;

  void add(Todo todo) {
    _todoService.add(todo);
  }
}
```

So now the `TodoService` handles the notifier rather than the ViewModel, and the ViewModel would expose that to the view.

This is useful for a couple of reasons:

1. In some cases, multiple views share a single state
2. You can encapsulate a shared state, and the ViewModels can focus on the view.
3. You avoid circular dependencies, which could lead to unexpected issues

## Assignment

We have created a `DateService` that is currently hooked up to the `CounterPageViewModel`. That in turn exposes the values and methods to the view.

For some reason the date doesn't update when tapping on the new update button.

Fix the bug to make sure that the date that is displayed, when tapping on the button, is updated to the current date.

> **Note:** the setup we provided you is creating the `DateService` with a locator, you can ignore this for now as that will be covered in the next lesson.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/date_service.dart`. Tests: `test/widget_test.dart`.

---

[← Course overview](../../../README.md)
