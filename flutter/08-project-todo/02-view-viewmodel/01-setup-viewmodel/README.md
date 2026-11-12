# Setup ViewModel

Now we need to actually use the `Todo` model.

## Assignment

The next challenge is to use the `Todo` model we created and set up the `TodoPageViewModel` with functions to manipulate the list of todos.

### Requirements

1. A function to add a new todo to the list.
2. A function to remove a todo from the list.
3. A function to toggle the `completed` property of a todo.

## Hint

When we create a new `Todo` object, we must assign it a unique ID. You can use the `uuid` package for that with `UUID().v4()`.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/todo/todo_page_view_model.dart`. Tests: `test/todo/todo_test.dart`, `test/todo/todo_page_view_model_test.dart`.

---

[← Course overview](../../../README.md)
