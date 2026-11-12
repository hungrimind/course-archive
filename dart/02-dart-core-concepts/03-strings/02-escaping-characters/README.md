# Escaping Characters

What if you want to have the quotation mark as part of the string?

You can use the opposite type of quotation that you started with, without any issues.

```dart
void main() {
  print("My name is Tadas");
  print('My name is Tadas');
  print("My name isn't Robert");
  print('He told me to "Work harder"');
}
```

But what if you want to use the same quotation that you started with? You can do that by "escaping the character" using `\`.

```dart
void main() {
  print("My name is Tadas");
  print('My name is Tadas');
  print('My name isn\'t Robert');
  print("He told me to \"Work harder\"");
}
```


To include a single quote in a string that is defined with single quotes, you need to use the backslash `\`. This is called “escaping” the character.

## Backslash Character

So what if we want to use a backslash in our string? Well, we would have to escape that as well by using two backslashes.

```dart
void main() {
  print('This is how you use a \\ backslash');
}
```

## Assignment

Return a single string that, when printed, displays the exact text:

`She said: "That's a backslash: \"`

Make sure to use the correct escape characters to include both the quotes and the backslash in the output.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/escape_characters.dart`. Tests: `test/escape_characters_test.dart`.

---

[← Course overview](../../../README.md)
