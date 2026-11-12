# async/await

Let's look at how to write asynchronous code.

The `async` keyword is used to mark a function as asynchronous, which means that this function will return a future. The async comes after the `()` and before the `{}`.

```dart
Future<int> fetchData() async {
  // Do something
  return 1;
}
```

Within an `async` function, you can use the `await` keyword, which essentially says, "Wait for this function to finish before moving on to the next line." This makes the code much easier to read and more similar to synchronous code.

```dart
Future<int> fetchData() async {
  int data = await getDataFromDatabase();
  int processedData = await processData(data);
  return processedData;
}
```

The `await` keyword can only be used in an `async` function, which makes sense because you need to be in a function that can be paused and resumed.

## Assignment

Your app needs to fetch a welcome message from a server when it starts. Complete the `printWelcomeMessage` function by:

1. Mark the function as `async` so you can use `await` inside it (change `void` to `Future<void>` and add `async`).
2. Use `await` to call `fetchWelcomeMessage()` and store the result in a variable named `message`.
3. Print the `message` to the console.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/fetch_welcome_message.dart`. Tests: `test/fetch_welcome_message_test.dart`.

---

[← Course overview](../../../README.md)
