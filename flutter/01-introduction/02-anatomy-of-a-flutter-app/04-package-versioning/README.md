# Package Versioning

You can set the version of the dependency in your `pubspec.yaml` file.

```yaml title="pubspec.yaml" {4}
dependencies:
  flutter:
    sdk: flutter
  chucknorris: ^1.0.0
```

The version for the chucknorris package is `^1.0.0`. When adding a package, you can exclude the version completely. This will cause your project to use the latest version of the package. However, it's not recommended to do it that way because there can be significant changes between version `1.0.0` and `2.0.0`, which could break your app's functionality.

The other approach is setting the version number directly, so no more `^`. This means you are setting the version directly and never want it to change. This is a better approach because if your code works properly, it should continue working until you manually update the dependencies.

The most common approach is the one in the code snippet, using the caret (`^`) in front of the version number. This approach means you want to use the latest version before a major release. So, if the package is updated to version `1.1.0`, this version will be used without us changing the `pubspec.yaml` file. But if it gets updated to version `2.0.0`, it will keep using the highest `1.x.x` version.

### Semantic Versioning

So which one should you use?

It depends.

Having the front number define major versions with breaking changes is called **Semantic Versioning**. It is a loosely agreed-upon approach for increasing versions. When using semantic versioning, no breaking changes should be introduced in minor versions. Minor versions are when the first number doesn't change. If you need to make a breaking change, you should update the first number. Updating this number signifies a major version release.

> The common approach is to add the new functionality to a minor version while keeping the old functionality. This way, you can still release those new features but not break anything. Then, when you have a substantial amount of new features and want to remove the old functionality, you can upgrade the version.

That's why the most commonly used versioning method is a caret (`^`). In theory, your code should not break, and you can get the latest bug fixes if any are found.

However, properly following **Semantic Versioning** isn't something you can check for. Developers are simply trusted to follow this, so there is nothing stopping someone from including a massive breaking change in version `1.0.1`.

While most of the bigger packages and experienced package authors abide by Semantic Versioning, if you are building something that needs to be completely sure that nothing breaks, it might be worth setting a hard version and updating manually.

> **Our Approach:** For most small projects, I use `^`, but if I were building a business with Flutter, I would not use that. I would set the version directly, so nothing breaks on even minor updates.

## Quiz

**1. If my package is currently version `1.1.3`, which of the following could include breaking changes?**

- A) 1.1.4
- B) 1.0.0
- C) 2.0.0
- D) 1.2.0

<details>
<summary>Answer</summary>

- C) 2.0.0

</details>

---

[← Course overview](../../../README.md)
