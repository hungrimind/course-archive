# Errors as return values

Now return values are a bit different. The previous lesson about try-catch. The scenario of wrapping http request with try-catch doesn’t work with return-values because the client doesn’t have return values built in as an error handling approach. This is true for anything in Dart and Flutter, you always have to use try-catch first to handle underlying issues and then opt for return-values.

Return value error handling is not built into the language like it is for other languages like Rust.

Let me give a quick example of how it looks and works.

First we would have to define what result handling we should have. This is directly taken from some of the Flutter architecture documentation, with a small variation which is that we can define the error return type.

```dart
sealed class Result<T, R> {
  const Result();

  /// Creates an instance of Result containing a value
  factory Result.ok(T value) => Ok(value);

  /// Create an instance of Result containing an error
  factory Result.error(R result) => Error(result);
}

/// Subclass of Result for values
final class Ok<T, R> extends Result<T, R> {
  const Ok(this.value);

  /// Returned value in the result
  final T value;
}

/// Subclass of Result for errors
final class Error<T, R> extends Result<T, R> {
  const Error(this.error);

  /// Returned result in result
  final R error;
}
```

If you have a simple method that uses this, you would return either an error or an ok response.

```dart
Result<String, String> someFunction(bool returnError) {
  if(returnError) {
    return Result.error('opsi')
  }

  return Result.ok('woo')
}
```

You would then handle it with a switch to enforce the handling of the error. Now there is no longer a way for the error handling to be forgotten.

```dart
void callSomeFunction() {
  final result = someFunction()
    switch (result) {
      case Ok():
        // do something
      case Error():
          final error = result.error;
          // Do something with the string error we got
    }
}
```

For the above example we made it simple by just defining a string as the return type. In reality you would probably want to define an enum or sealed class.

Here is an example with a sealed class

```dart
sealed class WeatherRequestError {
  WeatherRequestError(this.error);

  final Exception error;
}

final class WeatherRequestErrorUnknown extends WeatherRequestError {
  WeatherRequestErrorUnknown(super.error);
}

final class WeatherRequestErrorNotFound extends WeatherRequestError {
  WeatherRequestErrorNotFound(super.error);
}

/// Now we can use this in our result
Result<String, WeatherRequestError> getWeather() {
  if(someCondition) {
    // You would probably have caught an exception here
    // instead of creating one that you then pass to the class.
    return Result.error(WeatherRequestErrorUnknown(Exception('unknown error')))
  }

  return Result.ok('14 degrees')
}

/// Now we can handle it like this
void callGetWeather() {
  final result = getWeather();
  switch (result) {
    case Ok():
      // do something
    case Error():
      switch (result.error) {
        case WeatherRequestErrorUnknown():
          // Do something on an unknown error
        case WeatherRequestErrorNotFound():
          // Do something if not found
      }
  }
}
```

Before we continue, we want to mention that there are quite a lot of packages that already have result based classes implemented such as `multiple_result` or `result_dart`.

## Assignment

This assignment is similar to the previous one, but now we need to handle the resulting error instead of catching the exception.

### Requirements

1. Assign the exception to the `issuesNotifier`

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/counter_view_model.dart`.

---

[← Course overview](../../../README.md)
