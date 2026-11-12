# What is a Map?

Maps are another type of collection in Dart. They are similar to lists, but they are a collection of key-value pairs, whereas lists are a collection of only values. In a list, you can store one value for each index, but in a map, you can store any number of values for each key.

Here is a real-world example to help you understand it better. Let’s say you want to store the English and French translations of numbers. You could store them in a list like this:

```dart
void main() {
  List<String> numbers = [
    "one", "un", "two", "deux", "three", "trois"
  ];
}
```

But a List is not the best way to store the translation. 

For example, if you want to store the translation for all the numbers, you would have a list twice as long as the number of numbers you want to store. If you want to get the French translation of the number “two”, you would have to create an algorithm to retrieve the value from the list.

A better way of storing this would be to use a map.

```dart
void main() {
  Map<String, String> numbers = {
    "one": "un",
    "two": "deux",
    "three": "trois"
  };

  print(numbers["two"]); // deux
}
```

A map is similar to storing a list of variables. Each "key" is like a variable, and the "value" is like the value of a variable.

You can store the translation for all the numbers without duplicating the numbers. And you can get the French translation of a number by retrieving the value of that key. 

This is called a key-value pair.

## Quiz

**1. What is the fundamental difference between a `Map` and a `List` in Dart?**

- A) A `List` stores collection of values, while a `Map` stores a collection of key-value pairs.
- B) A `Map` can only store `String` values, while a `List` can store any data type.
- C) A `List` uses curly braces `{}` for its syntax, while a `Map` uses square brackets `[]`.
- D) A `Map` is a collection of unique values, while a `List` can have duplicates.

<details>
<summary>Answer</summary>

- A) A `List` stores collection of values, while a `Map` stores a collection of key-value pairs.

</details>

**2. In a Dart `Map` literal, which symbol is used to separate a key from its value?**

- A) `=` (Equals sign)
- B) `=>` (Arrow)
- C) `:` (Colon)
- D) `,` (Comma)

<details>
<summary>Answer</summary>

- C) `:` (Colon)

</details>

**3. Given the following `Map`, how would you access the French translation for the word "three"?


Map<String, String> numbers = {
  "one": "un",
  "two": "deux",
  "three": "trois"
};
```**

- A) `numbers[2]`
- B) `numbers["three"]`
- C) `numbers.three`
- D) `numbers("trois")`

<details>
<summary>Answer</summary>

- B) `numbers["three"]`

</details>

---

[← Course overview](../../../README.md)
