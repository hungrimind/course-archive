# Pages API

In the previous navigation method, we had to `push` a `MaterialPageRoute` using the `Navigator`. A `Page` is basically that `MaterialPageRoute`, but instead of needing to use the `Navigator` to push it onto the stack, you control the whole stack and set the pages (routes) yourself.

### With Navigator 1.0

You would need to get access to the `Navigator` of the current context, and then use a built in method to maintain a stack of routes, that you don't have direct access to.

```dart
Navigator.of(context).push(
  MaterialPageRoute(builder: (context) => const SecondPage())
);
```

### With Navigator 2.0

You become the navigation stack. Using `MaterialPage` you set exactly what you want the navigation stack to look like at any moment.

```dart
Navigator(
  pages: [
    MaterialPage(child: FirstPage()),
    MaterialPage(child: SecondPage()),
    MaterialPage(child: ThirdPage()),
  ],
);
```

Here we are starting the initial app stage with a 3 page deep layer of navigation. You can't really do this with the original navigation method. Technically, there is a work around to make this happen, but the point I am trying to make is that it's very straightforward with pages. It's just a list of pages you define.

## Assignment

Add a third page with the name "third" to the initial stack of your app. Now you should be able to click the back button twice.

### Requirements

1. Initializes 3 pages deep
2. Back button leads to "Second Page"

> There is a function called `onDidRemovePage` in the demo. This gets triggered whenever we remove a page from the stack. We will cover this later.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/main.dart`. Tests: `test/main_test.dart`.

---

[← Course overview](../../../README.md)
