# View

A view is what you actually see, also called the UI. I don't know why they called it a "view". It's probably to make the name MVVM look cool. Model-UserInterface-UserInterfaceModel didn't pass the vibe check.

Anyways, in simple terms, a view is either a page in your application or a UI widget (can be`StatefulWidget` or a `StatelessWidget`).

## Pages

Pages are simple to understand within MVVM. The page takes up the entire screen. It should use one ViewModel to handle most, if not all, of the logic for that page.

## Widgets

When it comes to individual widgets, it gets a little more "it depends". When working with any architecture, the goal is to make your life simpler, not more complex. While you _technically could_ still keep all the logic in the ViewModel, it doesn't make sense for many widgets.

Let's take an example. You have a button that has a loading state. You could pass the state in (from the ViewModel), but if you end up using it 20 times in your app, that means you will need to have 20 separate states for a freaking button. That's annoying. So here's a general rule we follow:

**If the state is fully contained, keep it within the widget.**

This makes it easy to reuse throughout your application, and the ViewModel is focused on the "page state" instead of the individual widget states.

We're getting a little ahead of ourselves, but as we were writing this section, we realized we have three places to store state:

1. Widget State: Stored in an individual widget only when the state is fully contained to just that widget.
2. Page State: Stored within a ViewModel
3. App State: Stored in a Service and exposed to the page through a ViewModel

The following two lessons will go deeper into this. We totally hijacked this section to talk about state, but the gist is that a View is an actual page and what the user sees. This view will probably contain widgets, and if your state is fully contained within the widget, you can keep it within the widget. But when it comes to "business" logic and the state of a page, this should be within a ViewModel, so let's get to that.

> What kind of file structure should I use? It doesn't really matter. File structure is overrated, but as long as you have a good architecture, you can command/control click into the classes. The approach we use is to store widgets within the same file if they are private for that page; if it's something that will be used app-wide, we put them in a separate folder called `ui` or `widgets`.

## Quiz

**1. What is a View in MVVM architecture?**

- A) The actual UI that the user sees
- B) The business logic layer
- C) The data model
- D) The state management system

<details>
<summary>Answer</summary>

- A) The actual UI that the user sees

</details>

**2. When should widget state be kept within the widget itself?**

- A) When the state is fully contained within that widget
- B) Always
- C) Never
- D) Only for StatefulWidgets

<details>
<summary>Answer</summary>

- A) When the state is fully contained within that widget

</details>

---

[← Course overview](../../../README.md)
