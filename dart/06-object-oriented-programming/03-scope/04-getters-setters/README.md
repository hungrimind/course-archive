# Getters & Setters

We can access the `name` property directly and change it to whatever we want.

```dart
void main() {
  Person person = Person();
  person.name = "Hey";
  print(person.name);
}
```

But what if we wanted to add logic to only accept a name that has more than 3 characters? There is no way to do this since we can directly set the `name` from outside the class.

To solve this, we can make the property private by adding the underscore symbol. Now, this property cannot be accessed from outside the class.

```dart
class Person {
  String _name = "";
}
```

Now, if you try assigning a value to it, you will get an error.

> [!warning]
>
> This will only give an error if the class is in a separate file, because private variables are "library-level" private. But as we mentioned in a previous lesson, it's a good practice to split your classes into different files. We have been using the same file to keep the demo code simpler.

```dart
void main() {
  Person person = Person();
  person._name = "Hey";
  print(person._name); //error
}
```

But now, we can't assign a value to the `_name` property. So, we need to create a function that can assign a value to the `_name` property.

```dart
class Person {
  String _name = "";

  void setName(String name) {
    if (name.length > 3) {
      _name = name;
    }
  }
}
```

Now, we can use the `setName` method to assign a value to the `_name` property, but it will only be set if the value has more than 3 characters.

```dart
void main() {
  Person person = Person();
  person.setName("Tad"); // doesn't set it
  person.setName("Tadas"); // does set it
}
```

The method used to set the value of a property is called a **setter**. When we want to get the value of a property, we can create another method called a **getter**.

```dart
class Person {
  String _name = "";

  void setName(String name) {
    if (name.length > 3) {
      _name = name;
    }
  }

  String getName() {
    return _name;
  }
}
```

Now, we can use the `getName` method to get the name of the person.

```dart
void main() {
  Person person = Person();
  person.setName("Tadas");
  print(person.getName()); // "Tadas"
}
```

This concept of not allowing manipulation of data from outside the class is called **encapsulation**.

## Getters & Setters

The above solution works, but Dart has a better syntax for getters and setters.

```dart
class Person {
  String _name = "";

  set name(String name) {
    if (name.length > 3) {
      _name = name;
    }
  }

  String get name {
    return _name;
  }
}
```

We can use the `set` keyword in front of the setter and the `get` keyword in front of the getter.

Now, instead of calling `getName` and `setName` functions, we can access them just like a property.

```dart
void main() {
  Person person = Person();
  person.name = "Heyy";
  print(person.name); // "Heyy"
}
```

Even though this looks like we are directly accessing the property, we are actually accessing the getter and setter. We can add more logic inside the getter or setter when we need it.

## Assignment

You are working with a `Rectangle` class that needs to protect its dimensions from invalid values. Complete the class by implementing getters and setters for the rectangle's properties.

1. Create a `width` getter that returns `_width` and a `width` setter that only updates `_width` if the value is greater than 0.
2. Create a `height` getter that returns `_height` and a `height` setter that only updates `_height` if the value is greater than 0.
3. Create an `area` getter that calculates and returns `_width * _height` (do not create a private `_area` property).

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/smart_rectangle.dart`. Tests: `test/smart_rectangle_test.dart`.

---

[← Course overview](../../../README.md)
