# Creating a Map

First, let's begin by creating an empty map. To create a map, you write the `Map` keyword, and inside angle brackets, you write the type of the key and the type of the value. The syntax is as follows:

```dart
Map<KeyType, ValueType> variableName = {};
```

The key and value types don't always have to be the same.

```dart
Map<String, int> ages = {};
Map<String, String> capitals = {};
Map<int, String> grades = {};
```

## Adding Elements to a Map

If you want to add an element to a map, you can use the assignment operator.

```dart
Map<String, int> ages = {};
ages['Andy'] = 30;
ages['Bob'] = 27;
ages['Carl'] = 32;
```

## Creating a Map with Values

Similarly to a list, you can also create a map with values inside the squiggly brackets. You specify the key, followed by a colon, then the value.

```dart
Map<String, int> ages = {
  'Andy': 30,
  'Bob': 27,
  'Carl': 32,
};
```


## Assignment

You are managing a product inventory system. Populate the `inventory` map with the following products and their quantities: 
- 'Apples' with quantity 10
- 'Oranges' with quantity 25
- 'Bananas' with quantity 15.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/product_inventory.dart`. Tests: `test/product_inventory_test.dart`.

---

[← Course overview](../../../README.md)
