# What is a Stream?

A **Stream** is another async concept that is very similar to Futures. A `Future` represents a single value that will be available in the future, but a `Stream` is a sequence of values that will be available over time.

So if you wanted to load a user's profile, you could use a `Future`, but if you wanted to load all the messages in a chat app, you would use a `Stream` because there will be many messages over the lifetime of the chat.

In Dart, you can use the `Stream` class

```dart
Stream<int>
```

We can create a stream using the `Stream.periodic` constructor.

```dart
Stream<int> stream = Stream.periodic(const Duration(seconds: 2), (value) => value);
```

This will generate a stream of numbers, incrementing by 1 every 2 seconds.

## Quiz

**1. What is the primary difference between a `Future` and a `Stream` in Dart?**

- A) A `Future` is for asynchronous operations, while a `Stream` is for synchronous operations.
- B) A `Future` can only hold `String` data, while a `Stream` can hold any type of data.
- C) There is no difference; `Stream` is just another name for a `Future`.
- D) A `Future` represents a single value in the future, while a `Stream` represents a sequence of values over time.

<details>
<summary>Answer</summary>

- D) A `Future` represents a single value in the future, while a `Stream` represents a sequence of values over time.

</details>

**2. You are building an application that needs to display live weather updates every few minutes. Which asynchronous tool would be the most appropriate choice for this task?**

- A) A `Future`, because the weather data is fetched from a server.
- B) A `List`, because you are handling a collection of data.
- C) A `Stream`, because you need a continuous sequence of data over time.
- D) A `Function`, to define the logic for fetching the weather.

<details>
<summary>Answer</summary>

- C) A `Stream`, because you need a continuous sequence of data over time.

</details>

**3. What does the following line of code create?

`Future.delayed(const Duration(seconds: 1));`**

- A) A `Future` that will complete after a one-second delay.
- B) A stream that emits an incrementing number every second, indefinitely.
- C) A stream that emits only one value and then immediately closes.
- D) A function that pauses the entire program for one second.

<details>
<summary>Answer</summary>

- A) A `Future` that will complete after a one-second delay.

</details>

---

[← Course overview](../../../README.md)
