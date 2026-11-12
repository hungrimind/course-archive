# Listening to a Stream

Once we have a stream, we need to listen to it using the `.listen()` method. This method takes a callback function that will be called every time a new value is emitted from the stream.

The `listen` method returns a `StreamSubscription` object, which allows us to control the subscription.

```dart
StreamSubscription subscription = stream.listen((value) {
  print('New value emitted: $value');
});
```

The subscription object has a `.cancel()` method that allows us to stop listening to the stream. This is useful if you only want to listen to a stream until a certain condition is met. For example, you may only want to listen until a value is emitted that matches a certain condition.

```dart
StreamSubscription subscription = stream.listen((value) {
  print('New value emitted: $value');
  if (value == 3) {
    subscription.cancel();
  }
});
```

There are also two other callback functions that the `.listen()` method takes. One for when an error is emitted and one for when the stream is completed.

```dart
StreamSubscription subscription = stream.listen((value) {
  print('New value emitted: $value');
}, onError: (error) {
  print('Error emitted: $error');
}, onDone: () {
  print('No more values to be emitted');
});
```

## Assignment

You are creating a simple data logger that listens to a stream of integers. Complete the `main` function by calling `.listen()` on the `dataStream` and provide three handlers: one for data events that prints `"Data received: [value]"`, one for errors that prints `"Error occurred."`, and one for completion that prints `"Stream is now closed."`.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/main.dart`. Tests: `test/main_test.dart`.

---

[← Course overview](../../../README.md)
