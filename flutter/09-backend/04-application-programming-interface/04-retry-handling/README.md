# Retry Handling

To understand retry we first need to understand some different requirements for doing actual retry at scale.

Let’s learn about exponential backoff and jitter.

### Exponential backoff

Exponential backoff means that when you make a request and that fails you won’t instantly make another request.

A typical example of exponential backoff might look something like this.

- Retry 1: Wait 1 second
- Retry 2: Wait 2 seconds
- Retry 3: Wait 4 seconds

When you do use exponential backoff or any retry logic for that matter you should almost always have some kind of retry limit, otherwise you would have retries happening indefinitely.

### Jitter

Jitter is usually part of an exponential backoff functionality by introducing a random “delay” in the retry.

For example, instead of waiting exactly 2 seconds, the request would wait for a duration anywhere between 1.5 and 2.5 seconds. The previous example could look something like this.

User 1:

- Retry 1: Wait 1.2 second
- Retry 2: Wait 2.4 seconds
- Retry 3: Wait 3.8 seconds

User 2:

- Retry 1: Wait 1 second
- Retry 2: Wait 1.8 seconds
- Retry 3: Wait 4.2 seconds

We gave two examples above for a very important reason. The reason you would have jitter is to reduce the risk of something called “thundering herds”, this is when multiple clients retry simultaneously (maybe after an outage?) which would overwhelm the system.

### How to do a retry request

This depends on the solution you want to go with doing HTTP requests. There are tons of different packages for handling network requests and in this case, we will use `http` by the dart team.

In the `http` package there is a `RetryClient` this one will implement the logic required for handling retries. In Flutter you would just have to create this client once and use it throughout your application.

Below is a small snippet of code showcasing how to use the `RetryClient` so we close the client right after the request is done.

```dart
void main() async {
  // Create a RetryClient with default exponential backoff
  final client = RetryClient(
    http.Client(),
    retries: 5, // Maximum number of retries
   when: (response) =>
      response.statusCode == 502 ||
      response.statusCode == 503 ||
      response.statusCode == 504, // Retry only transient errors
    whenError: (error, stackTrace) =>
        error is http.ClientException, // Retry on network errors
  );

  try {
    // Make a GET request
    final response = await client.get(Uri.parse('https://example.com'));

    if (response.statusCode == 200) {
      print('Response: ${response.body}');
    } else {
      print('Request failed with status: ${response.statusCode}');
    }
  } catch (e) {
    print('Request failed with error: $e');
  } finally {
    client.close();
  }
}
```

This default implementation will already have exponential backoff implemented but it will not have jitter.

Remember, you don’t have to complicate your app by implementing jitter if you are not currently running into issues with concurrent retries.

But if you want to implement jitter you would have to implement your exponential backoff logic with the `delay` property.

```dart
  // Create a RetryClient with exponential backoff and jitter
  final client = RetryClient(
    http.Client(),
    retries: 5, // Maximum number of retries
   when: (response) =>
      response.statusCode == 502 ||
      response.statusCode == 503 ||
      response.statusCode == 504, // Retry only transient errors
    whenError: (error, stackTrace) =>
        error is http.ClientException, // Retry on network errors
    delay: (retryCount) {
      // Implement exponential backoff with jitter
      final exponentialDelay = pow(2, retryCount) * 100; // Milliseconds
      final jitter = Random().nextInt(100); // Add randomness (jitter)
      return Duration(milliseconds: exponentialDelay.toInt() + jitter);
    },
  );

  try {
    // Make a GET request
    final response = await client.get(Uri.parse('https://example.com'));

    if (response.statusCode == 200) {
      print('Response: ${response.body}');
    } else {
      print('Request failed with status: ${response.statusCode}');
    }
  } catch (e) {
    print('Request failed with error: $e');
  } finally {
    client.close();
  }
```

## Quiz

**1. What is exponential backoff?**

- A) Retrying requests at random intervals
- B) Increasing the wait time between retries exponentially (e.g., 1s, 2s, 4s)
- C) Retrying requests immediately after failure
- D) Decreasing the wait time between retries

<details>
<summary>Answer</summary>

- B) Increasing the wait time between retries exponentially (e.g., 1s, 2s, 4s)

</details>

**2. What problem does jitter help solve?**

- A) Network latency
- B) Server crashes
- C) 'Thundering herds' where multiple clients retry simultaneously
- D) Data corruption

<details>
<summary>Answer</summary>

- C) 'Thundering herds' where multiple clients retry simultaneously

</details>

**3. In the RetryClient, what does the 'when' parameter control?**

- A) The number of retries
- B) The delay between retries
- C) Which HTTP status codes should trigger a retry
- D) The jitter amount

<details>
<summary>Answer</summary>

- C) Which HTTP status codes should trigger a retry

</details>

---

[← Course overview](../../../README.md)
