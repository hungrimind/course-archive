# Initializer Lists

The main reason we learned about named constructors first is so that you can understand **Initializer Lists**.

If you want to modify the values a little before assigning them, you cannot do this inside the constructor, as the values have to be assigned to the properties before the constructor body is executed.

```dart
class User {
  String name;
  int age;

  User(String n, int a) {
    name = n;
    age = a + 10;
  }
}
```

The code above will throw an error as the constructor body (the curly braces) is executed after the values are assigned to the properties. And since the values are not nullable (aka don't have `?` like in the previous lesson), that means that line 6 in our code will start executing while a non-nullable variable is null. 

The way to solve this is by using **Initializer Lists**.

```dart
class User {
  String name;
  int age;

  User(String n, int a) : name = n, age = a + 10 {
    print("something");
  }
}
```

Initializer lists are written between the parentheses and the curly braces. You use the colon symbol to start the initializer lists, and each assignment is separated by a comma.

When you use an initializer list, the values are assigned before the code within the brackets is executed. Thus, your non-nullable variables are set before they are used.

You can also use this with named constructors.

```dart
class User {
  String name;
  int age;

  User(this.name, this.age);

  User.add10(String name, int age)
      : name = name,
        age = age + 10;
}
```

## Assignment

Complete the `Product` constructor so that:

1. The `name` is always stored in uppercase
2. The `category` is always stored in lowercase

Use `.toUpperCase()` and `.toLowerCase()` in the initializer list to transform the values.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/formatted_product_initialization.dart`. Tests: `test/formatted_product_initialization_test.dart`.

---

[← Course overview](../../../README.md)
