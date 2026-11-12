# Comments

Comments are pieces of text that are ignored by the compiler. They have no impact on the logic of your code and are never displayed in the console.

They are typically used to leave notes for yourself or other developers who may be working on the same codebase. This can be helpful for code documentation or just explaining your thinking behind a specific implementation.

There are two types of comments: single-line comments and multi-line comments.

## Single-Line Comments

A single-line comment is written with two forward slashes, `//`, and the note after it will only span a single line.

```dart
// this is a comment

print("This will be shown in the console"); // This is another comment
```

## Multi-line Comments

A multi-line comment is written with a forward slash and an asterisk, `/*`, and it will span multiple lines until it reaches another asterisk and forward slash, `*/`.

```dart
/*
This is a multi-line comment.
This will not show up in the console.
*/
```

That covers everything you need to know about comments for now.

## Assignment 

In the `main` function, find the line that prints `"This line should not be printed."` and add a single-line comment at the beginning of it so that it is ignored by the compiler.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/silent_treatment.dart`. Tests: `test/silent_treatment_test.dart`.

---

[← Course overview](../../../README.md)
