# Pop

To go back and see the previous "Second Screen" you need to "pop" the topmost layer of the current stack.

![arrow showing that the third screen will be removed](../../../assets/905414d6-flutter_navigation_5.png)

This will result in the stack being two pages deep, and you can see the "Second Screen" again.

![Second screen is visible, with the current stack being 2 pages deep](../../../assets/cb85e73c-flutter_navigation_6.png)

To go back to the previous screen, the code will look like this:

```dart
Navigator.of(context).pop();
```

## Assignment

Navigate to the second page, and implement the functionality to go back to the previous page.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/home_page.dart`.

---

[← Course overview](../../../README.md)
