# Row & Column

A `Row` lines up its children horizontally; a `Column` stacks them vertically. It’s as simple as that. If you want a series of icons or text labels in a single horizontal line, use a `Row`. If you need them stacked from top to bottom, go for a `Column`. While the concept is straightforward, these two widgets are the backbone of almost every Flutter layout.

### Alignment & Spacing

`mainAxisAlignment` tells Flutter how to arrange widgets along the primary axis. In a `Row`, that’s left-to-right; in a `Column`, it’s top-to-bottom.
`crossAxisAlignment` handles alignment on the perpendicular axis.
With just these two properties, you can easily center widgets, push them to opposite ends, or add spacing between them. Here’s a tiny example:

```dart
Row(
  mainAxisAlignment: MainAxisAlignment.spaceAround,
  children: [
    Icon(Icons.favorite, color: Colors.pink),
    Text('Favorites'),
  ],
)
```

This `Row` puts an icon and a text label side by side, spaced evenly across the available width. If you replaced `Row` with `Column`, they’d stack vertically instead. And that’s really all there is to it. Master rows and columns, and you’ll be able to arrange your UI elements however you like!

### Assignment

Add a `Row` with 3 colored boxes below the Title and Subtitle text. Make these boxes centered horizontally.

Use this for the colored boxes:

```dart
Container(width: 50, height: 50, color: Colors.red),
Container(width: 50, height: 50, color: Colors.green),
Container(width: 50, height: 50, color: Colors.blue),
```

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/layout.dart`. Tests: `test/layout_test.dart`.

---

[← Course overview](../../../README.md)
