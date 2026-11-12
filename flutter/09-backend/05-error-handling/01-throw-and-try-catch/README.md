# Throw and try-catch

When you are doing certain actions such as calling an external api with `HttpClient` a typical exception that can occur is a `SocketException`.

Let’s say we would want to return text back in the scenario of a `SocketException`. We would use a `try-catch` and specifically catch the `SocketException` to then return the appropriate message.

```dart
Future<String> fetchData(String url) async {
  final HttpClient client = HttpClient();

  try {
    // Create the request
    final HttpClientRequest request = await client.getUrl(Uri.parse(url));

    // Send the request and wait for a response
    final HttpClientResponse response = await request.close();

    // Read and return the response body
    if (response.statusCode == 200) {
      return await response.transform(const Utf8Decoder()).join();
    } else {
      throw HttpException('Failed with status code: ${response.statusCode}');
    }
  } on SocketException catch (e) {
    // catch `SocketException` and return a message
    return 'Error: Unable to fetch data due to a network issue.';
  } finally {
    client.close();
  }
}
```

In Dart, and most programming languages, there are built-in class exceptions and custom exceptions.

Built-in exceptions are the ones already pre-defined such as a `SocketException` which gives you an indication that the request couldn’t be done because of a network issue.

Custom exception classes are exception types that can be defined ourselves. You would use this if you want to be explicit about what has gone wrong. This gets you away from creating and using generic exceptions, which is nice because in most scenarios you should catch the specific exceptions you expect.

So instead of doing something like this

```dart
throw Exception('You do not have the authority to delete this item');
```

You would create a custom exception such as this.

```dart
class UnauthorizedException implements Exception {
  UnauthorizedException(this.message);

  final String message;

  @override
  String toString() => 'UnauthorizedException: $message';
}

// When thrown we would do the following
throw UnauthorizedException('You do not have the authority to delete this item');
```

## Assignment

We have defined a fake exception that will throw when you tap the button. Right now, nothing happens if you press the button though.

What we want you to do is to catch this specific exception and make sure the UI is updated to display the error message.

### Requirements

1. Make sure we catch the `FakeLessonException`
2. Assign the exception to our notifier so it's displayed in the UI

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/counter_view_model.dart`.

---

[← Course overview](../../../README.md)
