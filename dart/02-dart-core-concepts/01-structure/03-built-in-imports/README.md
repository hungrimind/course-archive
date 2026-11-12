# Built-in Imports

The print function is part of the `dart:core` library, which is imported by default in every Dart file. But what is a library, and what is an import?

## Libraries

We mentioned earlier that the print function is a set of instructions that someone else wrote for us, and we can use it as often as we like. 

A library is a collection of code that can be imported into a Dart file. This code can contain functions, classes, variables, and more. Once imported, all the code in this file can be used within the file that imports it.

The print function is just one of the many functions available in the `dart:core` library. And this library is included by default with every Dart program.

So this is why we can use the print function in our Dart programs without having to write the code for it.

## Built-in Libraries

Anybody can make a library for you to use in your code. But a built-in library is a library that is written by the Dart team and is included in the Dart SDK.

There are many built-in libraries in Dart. Here are a few examples:

- `dart:io`: Contains code for input and output, such as accepting user input and reading and writing files. (We saw this in the very first lesson)
- `dart:math`: Contains code for mathematical functions and constants.
- `dart:convert`: Contains code for encoding and decoding data, such as JSON.

However, these libraries are not imported by default. So, if you want to use them in your Dart file, you will need to import them explicitly.

You do this by writing `import` at the top of the file, followed by the library name in quotes.

```dart
import 'dart:math';
```

## Quiz

**1. Which Dart library is automatically imported into every Dart file, allowing you to use functions like `print()` without an explicit import statement?**

- A) dart:io
- B) dart:math
- C) dart:core
- D) dart:convert

<details>
<summary>Answer</summary>

- C) dart:core

</details>

**2. You want to use a function from the `dart:math` library. What is the correct line of code to make this library's contents available in your file?**

- A) include 'dart:math';
- B) import 'dart:math';
- C) You don't need to do anything, all libraries are available by default.
- D) using 'dart:math';

<details>
<summary>Answer</summary>

- B) import 'dart:math';

</details>

**3. In the context of Dart, what is the best definition of a "library"?**

- A) A single function that performs one specific task.
- B) A special comment that explains what your code does.
- C) The main file where you write all your application code.
- D) A collection of reusable code, like functions and classes, that can be imported into your program.

<details>
<summary>Answer</summary>

- D) A collection of reusable code, like functions and classes, that can be imported into your program.

</details>

---

[← Course overview](../../../README.md)
