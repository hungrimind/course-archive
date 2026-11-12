# Create Model

In our todo app we will make it quite simple and center it around our model class which is a `Todo`. Our first challenge is to set up a todo model for our app.

To simplify we have most of the todo already done but there are a couple of issues still.

## Assignment

Solve all the issues with the `Todo` class.

### Requirements

1. Make sure the default values for the `copyWith` method are correct.

## Hint

For this project, we will organize our files using folder-by-feature. This means that you separate your codebase into folders based on the feature. This app will only have one feature, which is the `todo` feature. So, the file for this Model should be within the `lib/todo/` folder.

> We haven't really covered `copyWith` so here is a quick example of implementation which will allow you to create copies of your model with optional properties.

```dart
  Human copyWith({
    String? id,
    String? name,
    int? age,
  }) {
    return Human(
      id: id ?? this.id,
      name: name ?? this.name,
      age: age ?? this.age,
    );
  }
```

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/todo/todo.dart`. Tests: `test/todo/todo_test.dart`.

---

[← Course overview](../../../README.md)
