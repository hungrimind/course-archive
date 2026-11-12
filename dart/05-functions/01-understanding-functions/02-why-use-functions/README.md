# Why use Functions?

Functions are essential for three main reasons: reusability, readability, and maintainability.

### Reusability

The most significant reason to use functions is to avoid repeating code.

Throughout your programming journey, you will often encounter situations where you must repeat the same code. For example, if we played three hands in the previous poker game, the same code would be repeated three times.

```dart
List<String> deck = createDeck();
List<String> player1Hand = dealHand(deck);
List<String> player2Hand = dealHand(deck);
List<String> player3Hand = dealHand(deck);

print(player1Hand);
print(player2Hand);
print(player3Hand);
```

You might think this is not a big deal, but what if we want to change the code to deal a hand of 4 cards instead? We must change the code in three places, and it's easy to miss one.

By creating a function, you only need to update the code in one place, creating less room for error.

### Readability

If you have ever read a book, which I hope you have, you would know that it is split up into chapters, sections, and paragraphs. This makes the book easier to read and understand.

We can do the same thing in programming. By creating functions, you split your code into smaller pieces, making it easier to read and understand.

This is especially important when working in a team, since many team members might be working on the code at the same time. When the code is separated into many different functions, each team member can work on updates within that function, without affecting the rest of the codebase.

### Maintainability

If your code is more readable, it will naturally be easier to maintain and update.

When code is separated into smaller pieces, understanding what it does is much easier. If you need to update something, you know exactly where to update it.

If your code is a jumbled mess, you will have difficulty updating it, and there is a higher chance that you will break something.

## Quiz

**1. Imagine you have written code to calculate sales tax, and you use it in 10 different places in your e-commerce application. If the tax rate changes, what is the primary advantage of having this calculation inside a function?**

- A) You only need to update the tax rate in the single function, and the change will apply everywhere.
- B) You have to create a new function for the new tax rate.
- C) The program will run significantly faster with the calculation in a function.
- D) The function will automatically detect that the tax rate has changed.

<details>
<summary>Answer</summary>

- A) You only need to update the tax rate in the single function, and the change will apply everywhere.

</details>

**2. How do functions help make a large program easier to understand, similar to how a book is structured?**

- A) They automatically add comments to explain complex logic.
- B) They break down code into smaller, named chunks, making the program's overall purpose easier to follow.
- C) They convert all your code into simple `if/else` statements.
- D) They highlight the most important variables in your code.

<details>
<summary>Answer</summary>

- B) They break down code into smaller, named chunks, making the program's overall purpose easier to follow.

</details>

**3. Which of the following are the three main reasons for using functions as discussed in the lesson?**

- A) Speed, Simplicity, and Security
- B) Variables, Operators, and Control Flow
- C) Reusability, Readability, and Maintainability
- D) Input, Output, and Debugging

<details>
<summary>Answer</summary>

- C) Reusability, Readability, and Maintainability

</details>

---

[← Course overview](../../../README.md)
