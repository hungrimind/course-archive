# Local Storage

A database can be stored in the cloud or locally on the device.

The difference between the two is pretty clear. The local database is stored directly on the device and cannot be accessed by other devices. Cloud database is stored in the cloud and can be accessed by other devices and data can be shared between different users.

In the coding lesson for this course, we have been using a local database called `sqlite3`. This is an SQL database.

When you open a lesson like this one that has some code, a Flutter instance with its SQL-based database is created just for you. Only you have access to this database because it is local to the memory allocated for you.

We delete this instance after 15 minutes of inactivity. But as long as you are active in the course, you will have access to this database.

## Pros and Cons of Local Storage

When it comes to building apps, always start with local storage if possible. If you want users to interact with one another, this won't be possible, but if it is possible, start with local storage.

It's free because the data lives on the user's device.

It's fast because the data is on the same device as the app.

It's easy to implement because you don't need to set up a server or a cloud database.

But again, the big negative is that this data is not shared between users.

## Options for Local Storage

The simplest option is to use the `shared_preferences` package. This is a simple key-value pair storage.

```dart
// Obtain shared preferences.
final SharedPreferences prefs = await SharedPreferences.getInstance();

// Save an integer value to the 'counter' key.
await prefs.setInt('counter', 10);

// Retrieve an integer value from the 'counter' key.
int counter = await prefs.getInt('counter');
```

The next level up is using something like `sqflite`, like we do in this course (we use `sqlite3`, which is very similar but supports the web platform. But `sqflite` is a more popular package).

This package is a bare-bones SQL database. If you look at the `counter_view_model.dart` file, you will see the actual SQL code that is used to interact with the database.

You can do everything using just SQL commands, but there are a few popular packages that make it simpler.

- `drift` - reactive database based on SQLite
- `isar` - fully async NoSQL database
- `sembast` - simple NoSQL database
- `objectbox` - Object-oriented NoSQL database

## Assignment

Increment the counter value and save it to the database.

### Requirements

1. Make sure that we store the incremented count value
2. Click the "Reload Preview" button and you should see the counter value is persisted.

> **Hint** You can even reload the web page completely and the counter value should stay the same, but the code will be reloaded without the saving logic.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/counter/counter_view_model.dart`. Tests: `test/counter_test.dart`.

---

[← Course overview](../../../README.md)
