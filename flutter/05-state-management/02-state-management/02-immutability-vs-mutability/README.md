# Immutability vs Mutability

Even with separation of concerns, managing state is still tricky. Your apps will probably have a lot of different states, and many of them will need to depend on each other. This can lead to weird scenarios like one state updating but a dependent state not updating or updating the state and the UI not being notified.

These types of mistakes are due to developers not being diligent, but it's hard when there are so many moving pieces. You can make this a little easier by building your apps with immutability.

## Mutability

Mutability is something you have been using for a long time. The definition of mutability is being able to change or modify something after it's created. In code terms, this means being able to change an object.

I will show you a typical example.

```dart
Todo todo = Todo(title: 'something', checked: false);

void update(bool checked) {
  todo.checked = checked;
}
```

Here, we create a todo object and update the object when the `update` function is called. Simple, right? In some cases, this is exactly what you want, but in other cases, it is not.

## Immutability

Immutability is the opposite. This means that the object cannot be updated. Why would we want this? It is due to consistency and predictability; let me show you an example.

```dart
bool hasDriverLicense = true;

void canPersonDrive() {
  if (hasDriverLicense) {
    hasDriverLicense = false;
    drive(); // the lines above could modify our property, resulting in a weird behaviour that we thought we already checked for
  }
}
```

Because you didn't use immutability, now you have to spend your time in jail, or get a ticket, depends where you live.

This is a simple example, but tracking every piece of data would be a nightmare in a bigger, more complex codebase.

If we make the variable `const` or `final`, it will become immutable, and we won't run into this issue because our code won't even compile. Within the function `canPersonDrive`, we would see an error that you can't update final variables.

```dart ins="final"
final bool hasDriverLicense = true;

void canPersonDrive() {
  if (hasDriverLicense) {
    hasDriverLicesnse = false; // Will not compile because immutable data can't change
    drive();
  }
}
```

Now, there is no possibility that the person doesn't have a driver license before the `drive()` function is called. This is immutability, and your code is more predictable and consistent. And crimes cannot be committed.

This is also how the core of the Flutter framework is built. Widgets are immutable in Flutter. So, how does anything update? How can I update the `hasDriverLicense` variable when someone gets their license? How does our app even work if nothing can update?

You rebuild!

Within a `StatefulWidget`, we can change the variables all we want, but nothing happens in the user interface until we call `setState` because the widgets are immutable.

It's the same with `ChangeNotifier`; nothing changes until you `notifyListeners` to rebuild. While the widgets are immutable, the `ChangeNotifier` itself is mutable. What if there is a way to make our state management solution immutable as well? This way, we can skip manually notifying the UI to update, and it would happen automatically.

We can do this using `ValueNotifer`.

## Quiz

**1. What is the main benefit of immutability in Flutter?**

- A) It makes the code run faster
- B) It makes state changes more predictable and consistent
- C) It reduces memory usage
- D) It makes the code shorter

<details>
<summary>Answer</summary>

- B) It makes state changes more predictable and consistent

</details>

**2. How can you make a variable immutable in Dart?**

- A) Use the static keyword
- B) Use the const or final keyword
- C) Use the immutable keyword
- D) Make it private with an underscore

<details>
<summary>Answer</summary>

- B) Use the const or final keyword

</details>

**3. In Flutter, widgets are:**

- A) Mutable by default
- B) Immutable by default, and updates happen through rebuilding
- C) Both mutable and immutable depending on the context
- D) Neither mutable nor immutable

<details>
<summary>Answer</summary>

- B) Immutable by default, and updates happen through rebuilding

</details>

---

[← Course overview](../../../README.md)
