# Try-catch tips

There are pros and cons with return values and try-catch, one could argue that a result based system is not built into Dart which means we shouldn't use it. Others argue that the benefit of implementing it makes error handling a lot more explicit with less side-effects.

The main downside we see is the lack of chaining for a return-based systems. You will quickly see large nesting happening.

```dart
void callSomeFunction() {
  final result = someFunction()
    switch (result) {
      case Ok():
        final result = someOtherFunction()
        switch (result) {
          case Ok():
            // do something
          case Error():
            // explicitly have to handle the error
        }
      case Error():
        // explicitly have to handle the error
    }
}
```

We personally opt to using `try-catch` early in the stack, if there is a need for chaining, this is the place. With "early in the stack" we refer to the `Repository` layer.

Lower down in the stack which we refer to things like view-models we always want to avoid having to do `try-catch` handling. We want to be explicitly enforced any known potential issue, to then either notify the user or handle it in another way.

So in short, we use both `try-catch` and `result` based error handling. The main thing is to avoid the pitfalls of nesting or hard to maintain code.

There is nothing wrong with using only `try-catch` though. If you go that route, a good recommendation is to document the methods that can be thrown.

Here is an example

```dart
/// Permanently deletes an item with the given [id].
///
/// Throws:
///
/// * [UnauthorizedException] if the activeRole is not an admin.
void deleteItem(int id) {
  if (activeRole != Role.admin) {
    throw UnauthorizedException('Only admin can delete items');
  }
  // ...
}
```

We have snippets for both creating custom exceptions and documenting methods and functions for potential exceptions they can throw.

You are free to use it, refer to [Dart Exception Simplified](https://github.com/hungrimind/dart-exception-simplified).

## Quiz

**1. Is it fine to just use try-catch**

- A) You should opt to using return values instead of try-catch
- B) You should always combine both try-catch and result-based error handling
- C) Yes, it's fine to just use try-catch
- D) None of the options are correct

<details>
<summary>Answer</summary>

- B) You should always combine both try-catch and result-based error handling
- C) Yes, it's fine to just use try-catch

</details>

---

[← Course overview](../../../README.md)
