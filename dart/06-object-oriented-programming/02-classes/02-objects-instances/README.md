# Objects & Instances

Now that we know how to create a class, how do we use it? A class is not something that can be used directly in our program. A class is a blueprint for an object. We need to create objects from that class to use the fields and methods defined in the class.

## Creating an Object

To create an object, we use the class name followed by parentheses `()`.

```dart
void main() {
  Square square = Square();
}
```

We have created a new variable called `square` that is of type `Square`. This variable is an object or an instance of the class `Square`.

## Objects vs Instances

There is often confusion about the difference between objects and instances. I want to clarify that there is no difference between an object and an instance. They are the same thing.

The difference is in the context in which the words are used. The word `instance` is used when you want to emphasize that the object was created from a class.

```dart
Square square = Square();
```

In the code above, `square` is an instance of the `Square` class.

The word `object` is used when you want to emphasize that the variable is an object that you can use in your code.

```dart
Square square = Square();
```

In the code above, `square` is an object that you can use in your code.

The words are used interchangeably, and I will also use them interchangeably throughout this course.

## Object-Oriented Programming

Now that we have a class and an object, we can use the fields and methods defined in the class. This is what object-oriented programming is all about. We create a class, then create an object from that class, which allows us to use the code we wrote in the class.

## Quiz

**1. What is the primary relationship between a class and an object in Dart?**

- A) An object is a blueprint used to create a class.
- B) A class is a blueprint used to create objects.
- C) A class and an object are two different terms for the exact same thing.
- D) A class is a special type of function, and an object is the value it returns.

<details>
<summary>Answer</summary>

- B) A class is a blueprint used to create objects.

</details>

**2. Given a class named `Bicycle`, which line of code correctly creates an instance of this class and assigns it to a variable named `myBike`?**

- A) Bicycle myBike = Bicycle;
- B) create Bicycle() -> myBike;
- C) Bicycle myBike = Bicycle();
- D) myBike Bicycle = Bicycle();

<details>
<summary>Answer</summary>

- C) Bicycle myBike = Bicycle();

</details>

---

[← Course overview](../../../README.md)
