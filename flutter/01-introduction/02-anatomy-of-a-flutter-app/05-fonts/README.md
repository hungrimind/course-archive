# Fonts

The `pubspec.yaml` file is the main configuration file. You will usually use it to maintain and update your packages, but it is also used to add assets to your apps.

### Fonts

Fonts have their section within the `pubspec.yaml` file. You can give them a name and link the `.ttf` files.

```yaml title="pubspec.yaml"
flutter:
  fonts:
    - family: Roboto
      fonts:
        - asset: assets/fonts/Roboto-Regular.ttf
        - asset: assets/fonts/Roboto-Bold.ttf
          weight: 700
```

We would use this font in our Flutter app like this:

> Don't worry; we will cover all this soon.

```dart
Text(
  'This is bold text',
  style: TextStyle(
    fontFamily: 'Roboto',
    fontWeight: FontWeight.w700,
  ),
)
```

## Quiz

**1. What type of file format are fonts stored into?**

- A) TTF
- B) FONT
- C) SVG
- D) TXT

<details>
<summary>Answer</summary>

- A) TTF

</details>

---

[← Course overview](../../../README.md)
