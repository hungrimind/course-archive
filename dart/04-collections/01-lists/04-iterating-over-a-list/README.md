# Iterating over a List

Accessing your list items with an index is useful in many cases, but in many other cases, you want to loop through the list and access each element one by one.

You can do that using a `for` loop. Instead of hard-coding the length of the list, you can use the `length` property:

```dart
void main() {
  List<String> favMovies = ['Interstellar', 'Inception', 'The Dark Knight'];
  for (int i = 0; i < favMovies.length; i++) {
    print(favMovies[i]);
  }
}
```

The code above prints each movie in the list on a new line.

The example above is a little more robust than the previous `for` loop example because if you add or remove an element from the `favMovies` list, this code will still work.

But there is a way to make it even more robust. In the code above, we are still accessing the element using the index. What if I told you there is a way to access the element directly without using the index?

That is precisely what the `for-in` loop is for.

```dart
void main() {
  List<String> favMovies = ['Interstellar', 'Inception', 'The Dark Knight'];
  for (String movie in favMovies) {
    print(movie);
  }
}
```

A `for-in` loop acts in a very similar way to a `for` loop. It loops through everything `in` favMovies, and assigns it to a variable that is recreated every time it goes through the loop.

This is a much better way to loop through a list and is also easier to read.

## Assignment

You are organizing a party and have a list of guests who have confirmed they will attend. Write a `for-in` loop that iterates over the `guestList`. Inside the loop, for each guest's name, print a personalized welcome message in the format: "Welcome to the party, guest_name!"

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/greeting_party_guests.dart`. Tests: `test/greeting_party_guests_test.dart`.

---

[← Course overview](../../../README.md)
