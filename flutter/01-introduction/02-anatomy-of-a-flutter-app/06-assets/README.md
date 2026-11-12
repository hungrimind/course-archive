# Assets

You can also import other types of assets within the `assets` section. They can be images, text files, audio files, videos, PDFs, etc.

You can either import specific files.

```yaml title="pubspec.yaml"
flutter:
  assets:
    - images/flock.png
```

Or you can import a whole folder.

```yaml title="pubspec.yaml"
flutter:
  assets:
    - images/
```

Using an image within a Flutter app looks like this:

```dart
Image(image: AssetImage('images/flock.png'));
```

### Resolution Aware Images

When you become a fancy 10x developer and need your apps to look incredible on every screen, you may want to use resolution-aware images. This allows you to use bigger images (more pixels, higher quality) for bigger screens. The image will look pixelated if you use the same image on small devices on bigger devices.

Flutter handles this whole process for you as long as you define and store the images in the correct place. If you want an image double the size, store it in a `2.0x/` folder within the same path. Then, Flutter will use the device pixel ratio to choose the next highest-quality picture based on that. So, if your device has a pixel ratio of 1.9x, it will use the 2.0x picture.

You don't need to change anything within your `pubspec.yaml` file. Just link to the original image, and Flutter will handle everything else.

## Quiz

**1. What is the purpose of the assets section in the pubspec.yaml file?**

- A) To store fonts
- B) To store only images
- C) To store dependencies
- D) To store many file types

<details>
<summary>Answer</summary>

- D) To store many file types

</details>

---

[← Course overview](../../../README.md)
