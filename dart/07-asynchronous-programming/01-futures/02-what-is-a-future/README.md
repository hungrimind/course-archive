# What is a Future?

The previous lesson explained the event loop and how Dart handles asynchronous programming. The most common way to create asynchronous code is by using futures.

A future is a special object that represents a value that may not be available yet but will be at some point in the future.

## Future States

A future can be in one of three states:

1. Uncompleted: The future is still running and is yet to complete. It is waiting for the result.
2. Completed with Data: The future has completed and has returned a value.
3. Completed with Error: The future has completed but has thrown an error.


## Future Example

To make this more concrete, let's use the example of fetching data from a database. This process takes time because we need to make a network call and wait for a response.

When we call the `fetchData` function, it immediately returns a `Future<String>` object, which means the function will return a string at some point in the future. The code inside the function will run asynchronously, and when it is done, it will return the string `"Hunter"`.

```dart
Future<String> fetchData() {
  // fetch data from database
  return "Hunter";
}
```

We can use this `Future<String>` object in our application. This is similar to ordering a package from Amazon and being given a tracking number. You don't have the package yet, but you have the tracking number, and you know you will get it at some point in the future.


The same thing happens with our function. We don't have the data yet, but we have the future.

```dart
void main() {
  Future<String> data = fetchData();
}
```

The process of fetching data from the database is handled asynchronously, and at some point, the future will be completed with the data, and the string will be returned.

The future can also be completed with an error if the database is down or the call fails.


## Synchronous vs Asynchronous

The main difference between synchronous and asynchronous programming is how the code is executed.

Synchronous code is executed line by line. Each line of code must be completed before the next line can be executed.

Asynchronous code runs in the background and does not block the execution of the rest of the program. It allows the event loop to handle other tasks while waiting for the asynchronous code to complete.

## Quiz

**1. In Dart, what does a `Future` object represent?**

- A) A value that may not be available yet, but will be at some point in the future.
- B) A value that is immediately available for use.
- C) A special type of `Function` that can only be called once.
- D) A collection of values, similar to a `List`.

<details>
<summary>Answer</summary>

- A) A value that may not be available yet, but will be at some point in the future.

</details>

**2. What is the key difference between how synchronous and asynchronous code executes?**

- A) Asynchronous code always runs faster than synchronous code.
- B) Only synchronous code can use `try-catch` blocks to handle errors.
- C) Asynchronous code must be written in a separate file from synchronous code.
- D) Synchronous code is executed line by line, blocking further execution, while asynchronous code runs in the background without blocking.

<details>
<summary>Answer</summary>

- D) Synchronous code is executed line by line, blocking further execution, while asynchronous code runs in the background without blocking.

</details>

**3. Which of the following is **NOT** a valid state for a `Future`?**

- A) Paused
- B) Uncompleted
- C) Completed with Data
- D) Completed with Error

<details>
<summary>Answer</summary>

- A) Paused

</details>

---

[← Course overview](../../../README.md)
