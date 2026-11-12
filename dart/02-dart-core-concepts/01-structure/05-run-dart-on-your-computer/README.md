# Run Dart on Your Computer

The Dart programs we have written so far have been run within the browser on this website. However, Dart can also be run on your computer.

> We won't need to run any code on your computer, since we have everything set up for you in the browser. But, when you are ready to build your own software, you will need to run it on your computer. So it's good to know how to do it.

## Dart SDK

Programming languages need to be translated into binary for the computer to understand them. To do this, each programming language has a software development kit (SDK), which is a set of tools that can translate the programming language into binary.

A software development kit is often called a "toolchain" because it is made up of many tools that must work together to translate the code and provide additional functionality.

The Dart toolchain is called the Dart SDK.

## Installing Dart

To run Dart on your computer, you must install the Dart SDK. The Dart SDK is available for Windows, macOS, and Linux.

To install the Dart SDK, go to the [Dart SDK installation page](https://dart.dev/get-dart) and follow the instructions for your operating system.

## Dart Command Line Tool

Once the Dart SDK is installed, you will have access to the `dart` command line tool. This tool provides several commands that allow you to run, compile, and test Dart code.

Let's say you have a file called `main.dart`, you can run this file by running the following command in the terminal:

```bash
dart run main.dart
```

## This Platform

You might have noticed by now, when you click `Run`, we do the same thing here. When you click it, the `dart run` command pops into the terminal and gets executed. You can actually type `dart run` manually in the terminal, and it will run the program.

But there is a catch.

When you click the `Run` button, we first upload your code to the server, so that the `dart run` command makes sure to run on the latest code. So if you make some changes and type `dart run`, it won't include the latest changes.

> You will notice we don't write the file name after `dart run`. This is because we have a `pubspec.yaml` file with the file name within there. 
>
> You can click the sidebar icon to see the files, and click the `pubspec.yaml` file to see the code there.
>
> This is a configuration file for your project, which we will cover later. But by having that file, you don't need to specify the file name in the command.

## Assignment

No assignment in this lesson, but feel free to play around with the files and type `dart run` in the terminal. Then press the complete button.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/hello_world.dart`. Tests: `test/hello_world_test.dart`.

---

[← Course overview](../../../README.md)
