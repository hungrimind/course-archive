# Logging

Proper logging is crucial for maintaining and debugging applications, especially in production. While `print` statements are helpful during development, they're unsuitable for production environments because anyone with the app can see them if they look in the device logs (logcat is an example for android).

![logging](../../../assets/89d58f70-logging.png)

## Why Proper Logging Matters

1. **Debugging Production Issues**: When users encounter problems, logs help understand what went wrong
2. **Error Tracking**: Capture and monitor application errors centrally
3. **User Behavior Analysis**: Track important events and user flows
4. **Performance Monitoring**: Log performance metrics and bottlenecks

## Understanding Log Levels

The `logging` package provides different levels of logging:

- **FINEST**: Very detailed information
- **FINER**: Detailed information
- **FINE**: Tracing information
- **CONFIG**: Static configuration information
- **INFO**: General information
- **WARNING**: Potential problems
- **SEVERE**: Serious failures
- **SHOUT**: Extra severe failures

## Implementation

1. First, add the [`logging`](https://pub.dev/packages/logging) package to your `pubspec.yaml`
2. Copy this logging service into your project:

```dart
import 'dart:async';
import 'package:flutter/foundation.dart';
import 'package:logging/logging.dart';

class LoggingService {
  late StreamSubscription _loggerSubscription;

  void init() {
    Logger.root.level = Level.ALL;

    _loggerSubscription = Logger.root.onRecord.listen((record) {
      if (!kReleaseMode) {
        _printLog(record);
        return;
      }

      // In production, send logs to your logging service
      // Example: Sentry, Firebase Crashlytics, DataDog, etc.
    });
  }

  void _printLog(LogRecord record) {
    switch (record.level) {
      case Level.WARNING:
        // ignore: avoid_print
        print('🟡 ${record.level.name}: ${record.loggerName}: ${record.message}');
        break;
      case Level.SEVERE:
        // ignore: avoid_print
        print('🔴 ${record.level.name}: ${record.loggerName}: ${record.message}');
        break;
      case Level.SHOUT:
        // ignore: avoid_print
        print('🔴 ${record.level.name}: ${record.loggerName}: ${record.message}');
        break;
      default:
        // ignore: avoid_print
        print('🟢 ${record.level.name}: ${record.loggerName}: ${record.message}');
        break;
    }
  }

  void dispose() {
    _loggerSubscription.cancel();
  }
}
```

3. Initialize the logging service in your app:

```dart
void main() {
  locator<LoggingService>().init();
  runApp(MyApp());
}
```

4. Use the logger in your classes:

```dart
class UserService {
  // The name of the class is passed to the logger
  final _logger = Logger('UserService');

  Future<void> login(String email) async {
    try {
      _logger.info('Attempting login for user: $email');
      // login logic
      _logger.fine('Login successful for user: $email');
    } catch (e) {
      _logger.severe('Login failed for user: $email', e);
      rethrow;
    }
  }
}
```

## Best Practices

1. **Be Selective**: Don't log everything. Focus on important events and errors
2. **Protect Privacy**: Never log sensitive information like passwords or tokens
3. **Structure Logs**: Include relevant context in your log messages
4. **Use Appropriate Levels**: Choose the right log level for different situations

For production use, you'll want to integrate with a logging service like Sentry, Firebase Crashlytics, or DataDog to capture and analyze logs from your users' devices. Generally, you would only log the errors, not the info or debug logs.

## Quiz

**1. Why shouldn't we use print statements in production?**

- A) They make the app faster
- B) They use too much memory
- C) Anyone with the app on their device can access them
- D) They are too colorful

<details>
<summary>Answer</summary>

- C) Anyone with the app on their device can access them

</details>

**2. what's the benefit of using a logging service in production?**

- A) Centralized error tracking and debugging across all users
- B) It makes the app faster
- C) It reduces app size
- D) It improves UI performance

<details>
<summary>Answer</summary>

- A) Centralized error tracking and debugging across all users

</details>

**3. Which logging level would you use for critical errors?**

- A) Level.INFO
- B) Level.FINE
- C) Level.SEVERE
- D) Level.WARNING

<details>
<summary>Answer</summary>

- C) Level.SEVERE

</details>

---

[← Course overview](../../../README.md)
