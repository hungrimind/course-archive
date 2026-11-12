# Concept of Null

In programming, there is this concept called "null", which means there is no value.

Let's say you are building a program where a person enters their date of birth. But the date of birth is not required, so some people might not enter anything. So how do you handle that situation in programming?

One way to do it is to have a special value representing "not entered". Let's say if the user doesn't enter a value, we can assign the year as `-1`, the month as `-1`, and the day as `-1`.

```dart
int year = -1;
int month = -1;
int day = -1;
```

But this is not a great solution because you have to manually check if the value is `-1` every time you use this variable. But you also have to have a special value for all the different variable types. 

It just becomes a lot to handle.

To solve this issue, programming languages have a concept of a special value called `null`. The word `null` means "nothing".

So, in the case of the date of birth, if the user doesn't enter anything, we can set it to `null`.

```dart
int? year = null;
int? month = null;
int? day = null;
```

This means that the year, month, and day are not set. You might notice that the data type is no longer an `int`, but an `int?`. 

Let's dig into this in the next lesson.

## Quiz

**1. Why is using a special value like -1 to mean "not entered" a bad idea?**

- A) It makes the program run slower
- B) You must manually check for -1 everywhere and it doesn't work for all data types
- C) It increases memory usage
- D) It automatically converts to null later

<details>
<summary>Answer</summary>

- B) You must manually check for -1 everywhere and it doesn't work for all data types

</details>

**2. In the context of this lesson, what does null represent?**

- A) Zero
- B) An empty string
- C) A special value meaning "no value" or "not set"
- D) The default value for every variable

<details>
<summary>Answer</summary>

- C) A special value meaning "no value" or "not set"

</details>

**3. A date of birth field is optional. If the user doesn't enter anything, what's the best way to represent that?**

- A) year = 0; month = 0; day = 0;
- B) year = -1; month = -1; day = -1;
- C) year = null; month = null; day = null;
- D) Leave the previous values unchanged

<details>
<summary>Answer</summary>

- C) year = null; month = null; day = null;

</details>

**4. A user doesn't enter their name (an optional field). What should your program store to represent "not entered"?**

- A) null
- B) ""
- C) "unknown"
- D) -1

<details>
<summary>Answer</summary>

- A) null

</details>

---

[← Course overview](../../../README.md)
