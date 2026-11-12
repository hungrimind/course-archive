# Structure of a Dart Program

A Dart program is simply a text file with the `.dart` extension containing the code you want to run. The entry point to a Dart program is the `main` function, which can be written as:

```dart title="main.dart"
void main() {

}
```

This is the simplest valid Dart program, but it doesn't do anything. If you try to run this program, nothing will happen.

But it is still a valid program.

The main function is required in every Dart program. If you remove that, you will get the following error:

```txt
Invoked Dart programs must have a 'main' function defined
```


If you want to create a program that does something, you can use something called a print function to display the text within the quotes in your terminal.

```dart
void main() {
  print('HUNGRIMIND HUNGRIMIND HUNGRIMIND');
}
```

This is the simplest program that actually does something.

## Assignment

Write a Dart program that prints the exact string "Hello, Dart!" to the console.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/hello_dart.dart`. Tests: `test/hello_dart_test.dart`.

---

[← Course overview](../../../README.md)
