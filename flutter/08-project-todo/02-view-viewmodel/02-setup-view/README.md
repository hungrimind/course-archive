# Setup View

The next challenge is to build a UI with buttons to add, remove, and toggle the todo item. How it looks doesn’t matter since this project focuses on the architecture instead of the UI. As long as you can find ways to trigger these actions, it’s good enough.

## Assignment

Build a UI with buttons to add, remove, and toggle the todo item.

### Requirements

1. Use a `ListView.builder` to display all the todos.
2. Make sure that adding a todo works.
3. Use a `ListTile` and `Checkbox` to display each todo with the functionality to hold to remove and toggle the `completed` property.

## Hint

I will use a `FloatingActionButton` to trigger a dialog popup with a form to `add` a todo. Then, there is a list of `ListTile` widgets for each todo with a checkbox to `toggleDone` and a long press to `remove` the todo.

You can use this list of todos to make sure everything is working right.

```dart
final todos = <Todo>[
    Todo(id: "1", title: "Test", completed: false),
    Todo(id: "2", title: "Test 2", completed: true),
    Todo(id: "3", title: "Test 3", completed: false),
];
```

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/todo/todo_page.dart`. Tests: `test/todo/todo_test.dart`, `test/todo/todo_page_view_model_test.dart`, `test/todo/todo_page_test.dart`.

---

[← Course overview](../../../README.md)
