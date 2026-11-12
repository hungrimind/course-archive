# Handle Spam Tapping

When building Flutter apps, handling rapid-fire user interactions with async operations is a common challenge. For example, a user might tap a button multiple times while an API call is in progress. Let's create a reusable solution using a mixin.

## Understanding the Problem

Consider this common scenario:

```dart
onTap: () async {
  await someAsyncOperation(); // What if user taps multiple times?
}
```

Without proper handling, this can lead to:

- Multiple simultaneous API calls
- Race conditions
- Wasted resources
- Unexpected state changes

## Creating the LoadingStateMixin

Let's build a mixin that solves this problem by managing loading states:

```dart
mixin LoadingStateMixin<T extends StatefulWidget> on State<T> {
  final ValueNotifier<bool> isLoading = ValueNotifier(false);

  Future<void> withLoading(Future<void> Function() callback) async {
    if (isLoading.value) return;

    isLoading.value = true;
    try {
      await callback();
    } finally {
      isLoading.value = false;
    }
  }

  @override
  void dispose() {
    isLoading.dispose();
    super.dispose();
  }
}
```

Let's break down how this mixin works:

## 1. Mixin Declaration

```dart
mixin LoadingStateMixin<T extends StatefulWidget> on State<T>
```

- The `mixin` keyword creates a reusable piece of code
- `on State<T>` restricts this mixin only to be used with State objects
- Generic `<T extends StatefulWidget>` ensures type safety

## 2. Loading State Management

```dart
final ValueNotifier<bool> isLoading = ValueNotifier(false);
```

- Uses `ValueNotifier` for reactive state updates
- Automatically notifies listeners when value changes
- Keeps track of loading state

## 3. The withLoading Function

```dart
Future<void> withLoading(Future<void> Function() callback) async {
  if (isLoading.value) return; // Early return if already loading

  isLoading.value = true;
  try {
    await callback();
  } finally {
    isLoading.value = false;
  }
}
```

Key features:

- Takes an async function as a parameter
- Prevents multiple executions while loading
- Automatically manages loading state
- Uses `finally` to ensure the loading state is reset
- Handles errors gracefully

## 4. Resource Cleanup

```dart
@override
void dispose() {
  isLoading.dispose();
  super.dispose();
}
```

- Properly disposes of the ValueNotifier
- Prevents memory leaks
- Follows Flutter's disposal pattern

## Using the Mixin

Here's how you can use the mixin in your widgets, i.e. whenever you have a button or similar that you want to enforce a loading structure on you can add the mixin and be enforced to implement.

```dart
class MyButtonExample extends StatefulWidget {
  const MyButtonExample({
    super.key,
    required this.onPressed,
    required this.title,
  });

  final Future<void> Function() onPressed;
  final String title;

  @override
  State<MyButtonExample> createState() => _MyButtonExampleState();
}

class _MyButtonExampleState extends State<MyButtonExample>
    with LoadingStateMixin {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () => withLoading(widget.onPressed),
      child: ValueListenableBuilder(
        valueListenable: isLoading,
        builder: (context, loading, child) {
          if (loading) {
            return const SizedBox(
              width: 16,
              height: 16,
              child: CircularProgressIndicator(strokeWidth: 2.0),
            );
          }
          return Text(widget.title);
        },
      ),
    );
  }
}
```

## Common Use Cases

The LoadingStateMixin is particularly useful for any button that requires making async requests where you always reuse logic to ensure loading indications are shown during that async request.

Using this mixin, you can easily prevent spam tapping and consistently manage loading states across your entire application.

## Quiz

**1. What are the benefits of using LoadingStateMixin?**

- A) Only shows loading indicators
- B) Only handles UI animations
- C) Prevents multiple simultaneous API calls in a single place
- D) Only manages widget disposal

<details>
<summary>Answer</summary>

- C) Prevents multiple simultaneous API calls in a single place

</details>

---

[← Course overview](../../../README.md)
