# Navigator 2.0

You can use the Pages API by itself if the routing for your app is simple. But most of the benefits of "Navigator 2.0" are only seen once you incorporate the Router API.

## Router

To use the Router, you can either declare it yourself.

```dart
MaterialApp(
  home: Router(
    routerDelegate: _routerDelegate,
    routeInformationParser: _routeInformationParser,
  ),
);
```

Or similar to how `Navigator` works, you can have it created for your within the `MaterialApp`, by using `MaterialApp.router`.

```dart
MaterialApp.router(
  routerDelegate: _routerDelegate,
  routeInformationParser: _routeInformationParser,
);
```

The router needs at minimum two classes to function properly:

- `RouterDelegate` - Where you control your page list, and receive notifications about events in the system (that you use to update your page list)
- `RouteInformationParser` - For converting between URLs and Flutter classes

## Quiz

**1. What is the main role of the RouterDelegate?**

- A) It does nothing
- B) Convert URLs to Flutter classes
- C) Delegate the creation of the pages
- D) To control the page list, and receive notifications about events in the system

<details>
<summary>Answer</summary>

- D) To control the page list, and receive notifications about events in the system

</details>

**2. What is the main role of the RouteInformationParser?**

- A) It does nothing
- B) Convert URLs to Flutter classes
- C) Delegate the creation of the pages
- D) To control the page list, and receive notifications about events in the system

<details>
<summary>Answer</summary>

- B) Convert URLs to Flutter classes

</details>

---

[← Course overview](../../../README.md)
