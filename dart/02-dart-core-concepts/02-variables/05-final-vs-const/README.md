# final vs const

A variable is like a box, and the data is like a ball. You can put the ball in the box, remove it, and swap it out for a different ball. 

But what if you wanted a box that you could never remove the ball from after you have put it in?

## Final Keyword

The final keyword is used to signify that a variable can only be set once during runtime and cannot be changed after that. Run time, as it implies, is when the program is actually running.

```dart
final int age = 24;
age = 25; // This will give an error
```

This is useful when you want to ensure that a variable is not accidentally changed later in the code. For example, if you want to store your birthday, you can be confident that your birthday will never change.

```dart
final String birthday = 'January 1, 2000';
```

## Const Keyword

The const keyword is similar to the final keyword, with only one difference. In addition to being unable to change the value, you must set the value of the variable at compile time.

```dart
const int age = 24;
```

Compile time is the time when the code is being converted into binary. This means you cannot have a const variable that gets the value from another variable since the variable's value is only known at runtime.

```dart
const int age = getMyAge(); // This will give an error
```

The only difference between final and const is that const must be set at compile time, while final can be set at runtime. Both cannot be changed after the value is set.


## Which one to use?

If you can use the const keyword, you should use it. The earlier in the process you can set something that doesn't change, the less complexity you have to deal with.

Although you may not see the benefit of this now, as you start building larger apps, it will save you a lot of time debugging.

## Quiz

**1. What is the primary difference between the `final` and `const` keywords in Dart?**

- A) `const` variables must be set at compile time, while `final` variables can be set at runtime.
- B) `final` variables can be reassigned, but `const` variables cannot.
- C) `const` can only be used for numbers, and `final` can only be used for text (Strings).
- D) There is no difference; they can be used interchangeably in all situations.

<details>
<summary>Answer</summary>

- A) `const` variables must be set at compile time, while `final` variables can be set at runtime.

</details>

**2. You need to store the current date and time when a user signs up. Which keyword is most appropriate for this variable?**

- A) `const`
- B) `final`
- C) `var`

<details>
<summary>Answer</summary>

- B) `final`

</details>

---

[← Course overview](../../../README.md)
