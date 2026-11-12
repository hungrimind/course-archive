# Widget Testing Theory

Unit tests test the input and output of code, while widget tests test the functionality of the widgets.

Widget testing focuses on testing individual widgets in isolation from the rest of the app. It ensures that a widget behaves as expected in various scenarios. Unlike unit tests, which test logic, and integration tests, which test the interaction between components, widget tests specifically verify the UI and its behavior with the ViewModel.

The tests require a completely different way to interact with the code. Unit tests just needed to run the logic, while widget tests need to actually interact with the widgets.

Because of this, we use a different testing function. Instead of `test('description',(){})` you need to use `testWidgets('description',(WidgetTester tester){})`.

This new function gives us access to a `WidgetTester` that allows you to programmatically interact with widgets. So, when running widget tests, the testing framework creates a simulated environment that you can interact with.

## Interact

Since widget tests check that the UI is working properly in a simulated environment, we need to trigger things to happen within that UI. We can trigger these interactions using the `WidgetTester` available within each test.

Here are some of the most common actions the `WidgetTester` can trigger.

- `tap`
- `drag`
- `enterText`
- `longPress`

Using these, you can interact with the simulated app to ensure that the actions lead to the correct results.

## Pump

Again, widget tests check the functionality of the widget. But a widget needs a UI in order to exist. We mentioned that widget tests run in a simulated environment. We must control all interactions inside this simulated environment, including rendering the next frame.

This is where `pump` comes into play. Whenever you trigger an action like `tap`, you must render the next frame for the new UI to be “visible” in the simulated environment. It won’t actually be visible to us, because it’s all running behind the scenes, but it becomes visible for our test to do the following action.

For example, this is how you add a todo.

```dart
await tester.tap(find.byIcon(Icons.add));
await tester.pump();
await tester.enterText(find.byType(TextField), 'Your Todo');
await tester.tap(find.byKey(TodoPage.addTodoKey));
await tester.pump();
```

There is also `pumpWidget`, which you need to run initially to render the widget you plan to test. Also, `pumpAndSettle` is used for animations, transitions, and other pending work. It waits for all updates to be completed before going to the following line in the test.

## Expect

Like unit tests, widget tests should follow the Arrange, Act, and Assert flow. You **Arrange** the widget you’re testing by rendering it onto the screen with `pumpWidget`, then you **Act** using the tester interactions and rendering the frames after each interaction. The last step is to **Assert** because a test isn’t a test if it is not checking that the correct actions have been taken.

For Unit tests, the checks were logical; for widget tests, we use the `Finder` class to check if the appropriate widgets are rendered on the screen.

For the todo example, we expect a Todo with the text ‘Your Todo’ inside. We should only find one of them since that’s all we entered into the test, so we can use `find.text('Your Todo')` to see if the text is within the screen and `findsOneWidget` is a matcher that ensures there is only one instance found.

```dart
expect(find.text('Your Todo'), findsOneWidget);
```

You can find widgets `byIcon`, `byKey`, `byType`, `text`, `byTooltip`, and others. Then check against the following matchers.

- `findsNothing` - finds 0 widgets
- `findsOneWidget` - finds exactly 1 widget
- `findsWidgets` - finds one or more widgets
- `findsNWidgets` - find a specific number of widgets

## Wrap with MaterialApp

The last thing to remember is that your tests are running in a simulated environment, which means they are still running as an app and need a base of app features provided by `MaterialApp`.

It creates a widget tree in the simulated environment, and if the page or widget you are testing does not have a `MaterialApp`, you need to add it to your test.

## Quiz

**1. What is the main difference between unit tests and widget tests?**

- A) Widget tests are faster than unit tests
- B) Widget tests don't require any special setup
- C) Unit tests are only for UI testing
- D) Widget tests verify UI and behavior, while unit tests verify input and output

<details>
<summary>Answer</summary>

- D) Widget tests verify UI and behavior, while unit tests verify input and output

</details>

**2. Which function is used for widget testing?**

- A) test
- B) widgetTest
- C) testWidgets
- D) uiTest

<details>
<summary>Answer</summary>

- C) testWidgets

</details>

**3. Why do we need to call pump() after interactions?**

- A) To render the next frame in the simulated environment
- B) To make the test run faster
- C) To clear the widget tree
- D) To reset the test environment

<details>
<summary>Answer</summary>

- A) To render the next frame in the simulated environment

</details>

**4. What is the purpose of pumpAndSettle()?**

- A) To reset the widget tree
- B) To find widgets on the screen
- C) To simulate user interactions
- D) To wait for all animations, transitions and pending work to complete

<details>
<summary>Answer</summary>

- D) To wait for all animations, transitions and pending work to complete

</details>

**5. Which matcher would you use to verify that exactly one widget exists?**

- A) findsWidgets
- B) findsNothing
- C) findsOneWidget
- D) findsNWidgets

<details>
<summary>Answer</summary>

- C) findsOneWidget

</details>

---

[← Course overview](../../../README.md)
