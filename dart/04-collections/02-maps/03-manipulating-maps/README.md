# Manipulating Maps

Just like Lists, we can manipulate Maps in similar ways.

## Adding to a Map

To add a new entry to a map, you can use the assignment operator, or you can use the `addAll()` method, which allows you to add multiple entries at once. `addAll()` takes in another map as an argument and adds all the entries from that map.

```dart
Map<String, int> myMap = {'key1': 1, 'key2': 10};
myMap.addAll({'key3': 100, 'key4': 1000});
print(myMap); // {key1: 1, key2: 10, key3: 100, key4: 1000}
```

## Updating a Map

If you want to update the value of a key that already exists in the map, you can use the assignment operator again. But this time, you specify the key that already exists in the map and assign it a new value.

```dart
myMap['key2'] = 10000;
print(myMap); // {key1: 1, key2: 10000, key3: 100, key4: 1000}
```

## Removing from a Map

To remove an entry from a map, you can use the `remove()` method and pass in the key you want to remove.

```dart
myMap.remove('key4');
print(myMap); // {key1: 1, key2: 10001, key3: 100}
```

You can also use the `clear()` method, which will remove all entries in a map.

```dart
myMap.clear();
print(myMap); // {}
```

And lastly, just like lists, you can loop through them using while, for, and for-in loops.

## Assignment

You are helping a local bakery manage its digital inventory. Update the `bakeryInventory` map to reflect the day's events:

1. Add 30 cookies to the inventory (new delivery).
2. Update the croissant stock by subtracting 5 from the current count (a customer bought 5 croissants).
3. Remove the baguette entry completely (discontinued item).

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/bakery_inventory.dart`. Tests: `test/bakery_inventory_test.dart`.

---

[← Course overview](../../../README.md)
