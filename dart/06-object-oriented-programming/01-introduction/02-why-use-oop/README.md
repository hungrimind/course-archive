# Why use OOP?

The main reason Object Oriented Programming became so popular is that it makes your code much more organized, reusable, and maintainable.

## Organized

It is much easier to organize your code by grouping properties and functions in a class. If you wanted to create a program to manage a school, you could have a class for Students, Teachers, Subjects, and Assignments. All the properties and functions related to each group would be inside the class.

This is not possible if you are using only functions and variables.

## Reusable

OOP also allows us to reuse code easily. Once you have defined a class, you can create multiple objects using that class. So if you have a `Student` class, you can create objects for all the students in the school using that class. You don't have to write the same code again for each student.

You can also create a new class that inherits all the properties and functions from another class. So if you have a `Student` class, and you want to create a `CollegeStudent` class, you can inherit all the properties and functions from the `Student` class and add some extra properties and functions specific to college students.

> If you are confused by some of this terminology, don't worry we will walk through everything with examples.

## Maintainable

OOP makes your code much more maintainable and easier to debug. If you want to change the functionality of a class, you only need to change the code in one place, and it will be reflected everywhere you use that class. If you were not using OOP, you would have to make the same change in multiple places, which is more error-prone.

## Quiz

**1. According to the lesson, what are the three main benefits of using Object-Oriented Programming (OOP)?**

- A) It makes your code run faster, use less memory, and require fewer variables.
- B) It automatically fixes bugs, writes comments for you, and chooses the best variable types.
- C) It helps make your code more organized, reusable, and maintainable.
- D) It's the only way to use loops, functions, and conditional statements in Dart.

<details>
<summary>Answer</summary>

- C) It helps make your code more organized, reusable, and maintainable.

</details>

**2. Imagine you are building an application to manage a library. How would OOP help you organize your code?**

- A) By creating one very long `main` function that handles everything related to the library.
- B) By creating classes like `Book`, `Author`, and `LibraryMember` to group related properties and functions.
- C) By storing all the library data in a single `List` of `String`s.
- D) By using `if/else` statements to separate the logic for books and authors.

<details>
<summary>Answer</summary>

- B) By creating classes like `Book`, `Author`, and `LibraryMember` to group related properties and functions.

</details>

**3. You have created a `Car` class in your program. If you need to represent 50 different cars, what is the most significant advantage of using this class?**

- A) You can create 50 different `Car` objects from the single `Car` class without rewriting the code for each one.
- B) The program will automatically prevent you from creating more than one car.
- C) You must create 50 separate functions, one for each car.
- D) The `Car` class will make your program run exactly 50 times faster.

<details>
<summary>Answer</summary>

- A) You can create 50 different `Car` objects from the single `Car` class without rewriting the code for each one.

</details>

---

[← Course overview](../../../README.md)
