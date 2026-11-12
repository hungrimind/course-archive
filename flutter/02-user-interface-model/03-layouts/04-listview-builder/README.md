# ListView.builder

ListView.builder is a powerful widget in Flutter that dynamically generates list items as they're needed. Unlike static lists, it uses a builder function to create widgets only when they are visible on the screen, making it highly efficient for handling long or infinite lists.

## How it Works

- `itemCount`: Specifies the number of items in the list.
- `itemBuilder`: A callback function that defines how each item in the list is built. It takes the `BuildContext` and the item’s index as parameters.

## Why Use ListView.builder?

- It reduces memory usage by building only the items currently visible.
- It's perfect for dynamic data or when the list's content comes from a large dataset.

## Assignment

Build a Flutter app that displays a list of 100 items using `ListView.builder`. Each item should show the text "item X" (where X is the item's index).

Requirements:

- Update the `itemCount` to 100.
- Customize the list items to display the word "item" followed by the item's index.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/listview.dart`. Tests: `test/listview_test.dart`.

---

[← Course overview](../../../README.md)
