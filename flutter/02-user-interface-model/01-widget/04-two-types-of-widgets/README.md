# Two Types of Widgets

Every widget in Flutter is built from one of the two root widgets: `StatelessWidget` or `StatefulWidget`. There are some very smart people on the Flutter team, and you can see that these names were chosen carefully. I bet you know the difference between the two without me even having to explain it.

`StatelessWidget` is **State-Less** while `StatefulWidget` is **State-Full**. The first one doesn't have a `State` associated with it, while the second one definitely does. But what is a State?

### What is a State?

The simple version is that the state is data that can be changed (within a widget). If you display something to the user that cannot be altered, like static text, that does **NOT** have any state. But, if you display a counter that can be triggered to go up or down, that counter value is considered your **State**.

## Quiz

**1. Which widget type would be most appropriate for displaying a counter that can be incremented?**

- A) StatelessWidget
- B) StatefulWidget
- C) Both would work equally well
- D) Neither, you need a different widget type

<details>
<summary>Answer</summary>

- B) StatefulWidget

</details>

**2. Which of the following would be best implemented as a StatelessWidget?**

- A) A form with input fields
- B) A logo image that doesn't change
- C) A toggle switch
- D) A shopping cart with items

<details>
<summary>Answer</summary>

- B) A logo image that doesn't change

</details>

---

[← Course overview](../../../README.md)
