# Using HTTP

HTTP (Hypertext Transfer Protocol) is how your Flutter app talks to servers on the internet. Think of it like sending and receiving mail - you need to know the address (URL), what you're sending (request), and expect something back (response).

## HTTP Methods

The most common HTTP methods are:

- **GET**: Fetch data (like getting your email)
- **POST**: Create new data (like sending a new email)
- **PUT/PATCH**: Update existing data (like editing a draft)
- **DELETE**: Remove data (like moving to trash)

## Status Codes

When you make an HTTP request, the server responds with a status code that tells you what happened:

- **2xx**: Success (200 = OK, 201 = Created)
- **4xx**: Client errors (404 = Not Found, 401 = Unauthorized)
- **5xx**: Server errors (500 = Internal Server Error)

## Making HTTP Requests in Flutter

There are a few packages that are popular for making HTTP requests in Flutter.

The one we use is the `http` package which is minimal and maintained by the Dart team. Here is an example of a `GET` and `POST` request:

```dart
import 'package:http/http.dart' as http;

// GET request
final response = await http.get(Uri.parse('https://api.example.com/data'));

if (response.statusCode == 200) {
  // Success! Use response.body
  print('Got data: ${response.body}');
} else {
  // Handle error
  print('Failed with status: ${response.statusCode}');
}

// POST request with JSON data
final postResponse = await http.post(
  Uri.parse('https://api.example.com/create'),
  headers: {'Content-Type': 'application/json'},
  body: jsonEncode({'name': 'John', 'age': 30}),
);
```

## Common Headers

Headers provide extra information about the request:

```dart
final headers = {
  'Content-Type': 'application/json',     // Type of data you're sending
  'Accept': 'application/json',           // Type of data you want back
  'Authorization': 'Bearer your_token',   // Authentication token
};
```

## Best Practices

1. **Always handle errors** - Network requests can fail
2. **Use timeout** - Don't wait forever for responses
3. **Parse responses carefully** - Server data might not be what you expect
4. **Close clients** - Release resources when done (In flutter you usually don't have to care about that as you have a single http instance for the entire application)

```dart
// Example with best practices
Future<String> fetchData() async {
  final client = http.Client();
  try {
    final response = await client.get(
      Uri.parse('https://api.example.com/data'),
    ).timeout(
      const Duration(seconds: 10),
      onTimeout: () => throw TimeoutException('Request took too long'),
    );

    if (response.statusCode == 200) {
      return response.body;
    } else {
      throw HttpException('Failed with status: ${response.statusCode}');
    }
  } finally {
    client.close();
  }
}
```

Remember: HTTP requests are asynchronous - they take time to complete. Always use `async`/`await` or handle `Future`s appropriately.

## Assignment

We have built you a minimal weather application.

Your assignment is to make sure we are parsing the reponse from the http request so it can be displayed in the UI.

### Requirements

1. Parse the response from the http request in `weather_repository.dart`

> **Hint**
>
> This function returns a `Weather` object. Check the data class for a helper function to parse the json.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/weather/weather_repository.dart`. Tests: `test/weather/weather_view_test.dart`.

---

[← Course overview](../../../README.md)
