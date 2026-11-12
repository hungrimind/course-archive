# RouterDelegate

The `RouterDelegate` is the most important piece of the puzzle for this new navigation system. This is where all the different moving pieces come together to display the route to the end user.

You will notice, it's not that different from what we have always been working with. First, the build method is returning the same `Navigator` that we use for all navigation, but we do it using the new Pages API.

## What's different then?

To be honest, the core functionality is not much different from what we already know. The main reason for `RouterDelegate` is that it enforces you to listen and rebuild when your navigation stack changes. And the other big reason is it has some functions that get triggered when certain navigation actions happen within the app or by the system. The `RouterDelegate` is the glue that holds the system navigation and app navigation together.

## Source of Truth

Since there are two navigation systems we have to maintain (app internal and system), we need a source of truth. This should be a list of data that defines what pages we should build within the Flutter app, and what URLs should be created for the system.

This source of truth should be always kept up to date with whatever is happening in the application and should be used to create the pages.

## RouterDelegate Overrides

There are a few very important functions that you must override in the `RouterDelegate`.

### Listeners

The `RouterDelegate` must listen to changes to your source of truth. Anytime the source of truth changes the routes must be rebuilt.

```dart
@override
void addListener(VoidCallback listener) {
	routes.addListener(listener);
}

@override
void removeListener(VoidCallback listener) {
	routes.removeListener(listener);
}
```

### popRoute

The system back buttons on iOS and Android are handled by the `popRoute` override within the `RouterDelegate`.

We only want to remove the route if our navigation stack has more than 1 item in the list because when we click the system back button on the root page, we want to pop out of the app (not handle it within our app). We let the device know that we didn’t handle the back button by returning a false. If we do handle it (like in most cases), we should return a true. And we wrap these returns in a `SynchronousFuture` because it’s slightly more performant.

```dart
@override
Future<bool> popRoute() async {
  if (routes.value.length > 1) {
    //remove the route from your source of truth
    return SynchronousFuture(true);
  }
  return SynchronousFuture(false);
}
```

### setNewRoutePath

This function is called whenever the operating system pushes a new route to our application. The most common case of this would be when someone types a URL directly in the address bar. In this case, we want to create a new stack.

```dart
@override
Future<void> setNewRoutePath(String configuration) async {
  routes.value = [configuration]
}
```

### Edge Cases

There are some edge cases like `PopScope`, where you need to ensure that everything is synced up between the system and your app. For this, you would use `onPopPage` or `onDidRemovePage` within the Navigator.

This has been the most confusing point when working with Navigator 2. There is a deprecated method on the `Navigator` called `onPopPage` that seems to work better than `onDidRemovePage`.

The `onPopPage` method was called only when a pop was initiated within the system. This allowed us to pop the page directly from our service, instead of needing to use the navigator context to trigger it manually.

In fact, none of the navigation frameworks have been updated to use the new method. Not even [go_router](https://github.com/flutter/flutter/issues/152504), which is maintained by Flutter! There are even a few issues opened on GitHub ([#153122](https://github.com/flutter/flutter/issues/153122) and [#160463](https://github.com/flutter/flutter/issues/160463)) that have been open for a long time related to `onDidRemovePage`.

For this demo, we won't be using these functions, because they are for edge cases, but it's important to understand.

## Assignment

In this assignment, we create our source of truth as a global variable of type `ValueNotifier<List<String>>`. This is a list of all the URLs in a `ValueNotifier` so we can listen to it. We will cover `ValueNotifier` later in this course, but for now, you just need to know that when the List changes, our `RouterDelegate` is listening to this, so it will be updated.

This app has many ways for us to navigate, but your third page is not getting added properly. The source of truth is being set, so you need to make sure we create the `ThirdPage` for our app to display.

### Requirements

1. When clicking the "Add Second and Third" button, there should be two pages that get added to the stack, and you should be able to click the back button twice to get back to the home screen.

> On the third screen you will also notice a button that lets you remove the screen underneath. This is the magic of Navigator 2.0.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/main.dart`. Tests: `test/main_test.dart`.

---

[← Course overview](../../../README.md)
