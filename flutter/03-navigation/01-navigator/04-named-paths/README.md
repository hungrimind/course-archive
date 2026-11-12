# Named Paths

## Named Navigation

If you're from web development, you will probably be familiar with routes. You can see the route for the different pages in the website URL. For example, this page is on the `/navigation` route within the `/flutter` route.

You can assign these names within Flutter and maneuver throughout your application using them.

> ### Warning
>
> Flutter doesn't recommend using named routes because the behavior of deep links can't be customized, and the forward button doesn't work. For a solution to all this, you should use Navigator 2.0

When using named navigation, you do it ahead of time instead of defining the route on the fly. These routes need to be configured within the `MaterialApp`.

```dart
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => const HomeScreen(),
    '/second': (context) => const SecondScreen(),
  },
)
```

The initial route on any website or app is `'/'`. You can customize this in Flutter to something else, but we will keep it `'/'`.

Within the `routes`, we define all our routes. So the `'/'` route will lead us to our Home Screen, where our app will start, and we will predefine a `'/second'` route, which we can use to navigate to the second screen.

### Push

Using named routes makes your syntax a little cleaner since your routes were already defined.

```dart
Navigator.of(context).pushNamed('/second');
```

### Pop

The logic is the same for popping since we don't have to define the specific route. We remove the very top layer.

```dart
Navigator.of(context).pop();
```

## Quiz

**1. Where do you define named routes in Flutter?**

- A) In the MaterialApp widget
- B) In each individual screen
- C) In a separate routes.dart file
- D) In the main.dart file only

<details>
<summary>Answer</summary>

- A) In the MaterialApp widget

</details>

**2. What is the correct syntax for navigating to a named route?**

- A) Navigator.push('/second')
- B) Navigator.of(context).push('/second')
- C) Navigator.pushNamed('/second')
- D) Navigator.of(context).pushNamed('/second')

<details>
<summary>Answer</summary>

- D) Navigator.of(context).pushNamed('/second')

</details>

**3. Why doesn't Flutter recommend using named routes?**

- A) They are too complex to implement
- B) They use too much memory
- C) Deep links can't be customized and forward button doesn't work
- D) They are being deprecated

<details>
<summary>Answer</summary>

- C) Deep links can't be customized and forward button doesn't work

</details>

---

[← Course overview](../../../README.md)
