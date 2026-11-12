# Test Conventions

There are a few testing conventions that we follow to make testing simpler. These are commonly used throughout the industry but are not a “hard rule”.

## Test Folder Structure

Since tests live in a separate file from the actual code, it can be easy to lose where the tests are located for a specific function as your codebase grows.

Imagine having 10 ViewModel files in your code; if you had the tests for each of those ViewModels scattered, it would be hard to navigate.

To solve this, we mirror the folder structure in our `lib` folder to match within the test folder. This way, you go to the same file path within the `test` folder to find the test for a specific file.

> This means that if you change the location of a file in the `lib` folder, you need to change it in the `test` folder as well. Although this isn’t a big deal to do manually, we like to automate things. So, we built a script that you can run to automatically update your test files to mirror the `lib` folder. You can find the [sync_test script here](https://github.com/hungrimind/sync_test).

The names of the files should be the same as those in the `lib` folder except for a `_test.dart` at the end.

```
lib/                                test/
├── features/                       ├── features/
│   └── home/                       │   └── home/
│       └── home_page.dart          │       └── home_page_test.dart
```

## Test Descriptions

When defining a test, the first thing you need to pass is a description. In theory, these descriptions can be anything. You could make them an empty string.

But then, when a test fails, figuring out what went wrong would make it slightly more annoying. In our case, we write test descriptions that make it very straightforward what the test is about. We like the idea that a different team member should be able to implement the test given only the description.

❌ Bad test names:

- `test1()`
- `loginTest()`
- `testLoginFunction()`
- `shouldWork()`

✅ Good test names:

- `should return error message when password is empty`
- `should disable login button while authentication is in progress`
- `should clear error message when user starts typing`
- `should navigate to home screen after successful login`

## Quiz

**1. Where should test files be located in relation to the source files?**

- A) In a mirrored structure under the test directory
- B) In the same directory as the source files
- C) Anywhere in the test directory
- D) In a separate tests project

<details>
<summary>Answer</summary>

- A) In a mirrored structure under the test directory

</details>

**2. Which of the following is the best test description?**

- A) should validate empty password field
- B) test password validation on login screen
- C) should handle empty password case
- D) should display error message when password input is empty and login button is pressed

<details>
<summary>Answer</summary>

- D) should display error message when password input is empty and login button is pressed

</details>

**3. What makes a good test description?**

- A) It's as short as possible
- B) It includes the function name being tested
- C) By only seeing the test description, you can rewrite the test if it was removed
- D) It starts with 'test'

<details>
<summary>Answer</summary>

- C) By only seeing the test description, you can rewrite the test if it was removed

</details>

---

[← Course overview](../../../README.md)
