# Style Post

We need to make the post look like the one in the UI.

![Post](../../../assets/09b7e4ac-eachpost.png)

## Assignment

Add styling to the post to look like the image above.

There is a lot of styling here, and it might look like an overwhelming task. But try to really break it down and go step by step to see how close you can get. You will notice it's mostly a bunch of `Row` and `Column` widgets combined with widgets we have used before.

You can always check the solution if you get stuck.

> **Hint**
>
> You might run into a bug that says something about your parent widget not having a finite width. This comes back to the Box Constraint Model. It breaks when the parent doesn't have a finite width. You have a row with two widgets in it, and one of the widgets is a `Text` widget, you will get an error, because a `Row` can extend infinitely.
>
> To fix this, you can wrap the child widget in an `Expanded` widget, which fills the remaining space and defines the width available to the child widget.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/pages/home.dart`. Tests: `test/pages/signin_test.dart`, `test/pages/home_test.dart`, `test/main_test.dart`.

---

[← Course overview](../../../README.md)
