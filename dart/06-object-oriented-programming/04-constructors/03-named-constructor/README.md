# Named Constructor

A class can have multiple constructors, and each constructor can have a different purpose. In Dart, we can give names to the constructors to differentiate between them. This is called a **Named Constructor**.

```dart
class BankAccount {
  String? name;
  double? balance;

  BankAccount(this.name, this.balance);

  BankAccount.fromJson(Map<String, dynamic> json){
    name = json['name'];
    balance = json['balance'];
  }
}
```

In the example above, we have a `BankAccount` class that has a default constructor, as well as a named constructor called `fromJson`. This is a common use case, where you would use a named constructor to create a class from a JSON object, instead of having to parse the JSON outside the class.

To call a named constructor, you use the class name followed by a dot and then the named constructor.

```dart
BankAccount acc2 = BankAccount.fromJson({'name': 'Stefan', 'balance': 1000.0});
```

## Assignment

You are working with product data that comes from a structured format like JSON, represented as a Map in Dart. 

1. Create a named constructor called `fromMap` in the `Product` class that accepts a `Map<String, dynamic>` parameter named `productData`. Use the values from the map (accessing the 'name' and 'price' keys) to initialize the `name` and `price` properties.
2. In the `main` function, use `Product.fromMap` to create a `Product` object from the `productData` map.
3. Print the product name and price using these exact statements: 

```dart
  print('Product Name: ${product.name}');
  print('Product Price: \$${product.price}');
```

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `bin/product_inventory_from_map.dart`. Tests: `test/product_inventory_from_map_test.dart`.

---

[← Course overview](../../../README.md)
