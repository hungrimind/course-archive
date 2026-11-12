# String Methods & Properties

A method is like a built-in action that something can do on an Object.

> We will talk about Objects in the Object-Oriented Programming Module. For now, just know that Strings, Numbers, Booleans, etc are all Objects.

Strings in Dart have lots of these built-in actions that let you work with text in different ways. For example, you can make all the letters uppercase, find out how many characters are in the text, or split it into smaller pieces.

You use a method by writing a dot (.) after your text and then the name of the action you want to do.

There are many different methods that you can use on Strings in Dart.

We will not be able to cover every single one in this lesson, but I will cover the ones I use the most. You can find a complete list of all the methods in the [Dart Documentation](https://api.dart.dev/dart-core/String-class.html).

## Changing Case

There are two methods that you can use to convert the case of your Strings.

`.toUpperCase()` makes every character in the String uppercase, and `.toLowerCase()` makes every character in the String lowercase.

```dart
final name = "Kyle";

print(name.toUpperCase()); // KYLE
print(name.toLowerCase()); // kyle
```

## Length

Methods use the `()` because they perform actions. But Strings and other Objects can have **properties** as well. 

Properties don't *do anything*, but instead are pieces of information about the Object. And to get this information, you don't need to use `()`.

The `.length` property will return the number of characters in a String.

```dart
final name = "Kyle";
print(name.length); // 4
```

## Split

The `split()` method allows you to split a String into multiple Strings, which are then returned as a List. 

> We will cover what a List is in future lessons.

The `split()` method takes in a separator, which will be used to determine where to split the original String.

```dart
const fullName = "Kyle Lee";
final split = fullName.split(' ');
print(split); // [Kyle, Lee]
```

## Substring

The `substring()` method is used to extract a substring of a String.

It takes in two parameters: the first is the starting index, and the second is the ending index.

The substring will start at the first index and continue until the ending index, but it will not include the ending index.

```dart
const name = "Kyle Lee";
final firstPart = name.substring(0, 2);
print(firstPart); // Ky
```

There are many more methods for Strings in Dart, but these are the ones that I use the most. For a complete list, refer to the [Dart Documentation](https://api.dart.dev/dart-core/String-class.html).

## Assignment

Process the string `'ada-lovelace'` to create a formatted username.

Take a substring of the first 3 characters (starting at 0, ending at 3), uppercase them, and print them.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/username_formatter.dart`. Tests: `test/username_formatter_test.dart`.

---

[← Course overview](../../../README.md)
