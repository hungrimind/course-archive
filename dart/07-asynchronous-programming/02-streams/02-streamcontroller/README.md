# StreamController

A `StreamController` is a class in Dart that allows us to create a stream and add events to it manually. This gives us more flexibility and control over the stream. Here is what the code looks like:

```dart
final StreamController<String> controller = StreamController();

final Stream<String> stream = controller.stream;

controller.add('Hello');
controller.add('Goodbye');
```

In the code above, we create a StreamController, which creates a stream. Then, we can add events to the stream using the `.add()` method.

## Listening to the Stream

We can listen to the stream like this:

```dart
stream.listen((event) {
  print(event);
});
```

This will print out:

```
Hello
Goodbye
```

## Closing the Stream

When using a StreamController, we need to close the stream when we are done using it. This is done using the `close` method.

```dart
controller.close();
```

If you do not close the stream, it can lead to memory leaks in your application.

## Assignment

You are working on a tracking system for an online store. A StreamController has been set up to manage and broadcast order status updates, and a listener is already in place to display these updates.

Add the following three status updates to the stream using the `add()` method in order: "Order received", "Processing item", and "Shipped".

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/stream_controller_sink.dart`. Tests: `test/stream_controller_sink_test.dart`.

---

[← Course overview](../../../README.md)
