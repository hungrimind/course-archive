# Basics of State

At this point, you are familiar with the concept of state within a `StatefulWidget`. It's data that can be updated, and when it is updated, we should rebuild the application to show the latest state.

However, there are two types of states, and knowing their differences is important.

How does state work? Why can't we have a normal variable and the UI updates by itself?

## Ephemeral state

Ephemeral State is the first type of state. It is referred to as local state; in short, it is state contained within a single widget. This is the state that is used in a `StatefulWidget` and updated using `setState`.

Here are a few examples:

- A counter increment widget (text and button). The state is the current counter value within that single widget.
- The current page in a `PageView`

## App State

The simplest definition of app state is a state shared between multiple widgets. Some examples of this are:

- Authentication/login info
- Unread notification count

There are multiple ways to manage the app state. We will cover them in the architecture section!

## What does setState actually do?

We can learn about it by diving into the source code. If you have a project open with a `setState`, you can right-click and "goToDefinition" which will result in you seeing something like this:

```dart collapse={6-24,30-35,45-53}
void setState(VoidCallback fn) {
  assert(() {
    if (_debugLifecycleState == _StateLifecycle.defunct) {
      throw FlutterError.fromParts(<DiagnosticsNode>[
        ErrorSummary('setState() called after dispose(): $this'),
        ErrorDescription(
          'This error happens if you call setState() on a State object for a widget that '
          'no longer appears in the widget tree (e.g., whose parent widget no longer '
          'includes the widget in its build). This error can occur when code calls '
          'setState() from a timer or an animation callback.',
        ),
        ErrorHint(
          'The preferred solution is '
          'to cancel the timer or stop listening to the animation in the dispose() '
          'callback. Another solution is to check the "mounted" property of this '
          'object before calling setState() to ensure the object is still in the '
          'tree.',
        ),
        ErrorHint(
          'This error might indicate a memory leak if setState() is being called '
          'because another object is retaining a reference to this State object '
          'after it has been removed from the tree. To avoid memory leaks, '
          'consider breaking the reference to this object during dispose().',
        ),
      ]);
    }
    if (_debugLifecycleState == _StateLifecycle.created && !mounted) {
      throw FlutterError.fromParts(<DiagnosticsNode>[
        ErrorSummary('setState() called in constructor: $this'),
        ErrorHint(
          'This happens when you call setState() on a State object for a widget that '
          "hasn't been inserted into the widget tree yet. It is not necessary to call "
          'setState() in the constructor, since the state is already assumed to be dirty '
          'when it is initially created.',
        ),
      ]);
    }
    return true;
  }());
  final Object? result = fn() as dynamic;
  assert(() {
    if (result is Future) {
      throw FlutterError.fromParts(<DiagnosticsNode>[
        ErrorSummary('setState() callback argument returned a Future.'),
        ErrorDescription(
          'The setState() method on $this was called with a closure or method that '
          'returned a Future. Maybe it is marked as "async".',
        ),
        ErrorHint(
          'Instead of performing asynchronous work inside a call to setState(), first '
          'execute the work (without updating the widget state), and then synchronously '
          'update the state inside a call to setState().',
        ),
      ]);
    }
    // We ignore other types of return values so that you can do things like:
    //   setState(() => x = 3);
    return true;
  }());
  _element!.markNeedsBuild();
}
```

I like the way Flutter explains this:

> Calling [setState] notifies the framework that the internal state of this object has changed in a way that might impact the user interface in this subtree, which causes the framework to schedule a [build] for this [State] object.

Essentially, it will cause the `build` method of your `StatefulWidget` to be called again, forcing a new "frame" to render on the device. Once this happens, the UI will show the new values.

Without the use of something like `setState`. The framework won't know if a value has changed, so the UI won't "rebuild" when the data has changed and should be displayed to the user.

## Why does markNeedsBuild matter?

If you saw the snippet above, right at the bottom, you will see a call to `_element!.markNeedsBuild()`. This line of code causes the rebuild that we explained above. This is the basis of all "state management".

In the upcoming lectures you will learn about some of the different built-in solutions to handle state without the use of `setState`. This will set up the basis for app state, which we will cover in the architecture section.

## Quiz

**1. What is Ephemeral State in Flutter?**

- A) State that is shared between multiple widgets
- B) State contained within a single widget
- C) State that only exists temporarily
- D) State that cannot be modified

<details>
<summary>Answer</summary>

- B) State contained within a single widget

</details>

**2. What does setState() do in Flutter?**

- A) It only updates variable values
- B) It directly modifies the UI elements
- C) It notifies the framework that state has changed and schedules a rebuild
- D) It creates new widget instances

<details>
<summary>Answer</summary>

- C) It notifies the framework that state has changed and schedules a rebuild

</details>

**3. Which of these is an example of App State?**

- A) Current page in a PageView
- B) A local counter value
- C) Authentication/login information
- D) Current scroll position

<details>
<summary>Answer</summary>

- C) Authentication/login information

</details>

---

[← Course overview](../../../README.md)
