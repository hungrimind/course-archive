# Packages

`ChangeNotifier` and `ValueNotifier` with `InheritedWidget` is an approach to managing state using only the tools provided by Flutter. But, if you have been in the Flutter community for a while, you will have heard a lot of fuss about "state management packages".

It comes from a good place: from the drive to write more organized and efficient software.

In most cases, however, the best approach is to keep it simple and use the framework's tools, but that doesn't mean packages are useless.

Packages do provide benefits. They come with features and robustness that help you scale your state management while making it less set up for the developer.

## Options

There are so many options for packages that manage your state, and everybody has their own strong opinions on which ones are better and worse. Feel free to explore them all, but these options stand out more than others due to their popularity and general acceptance within the community.

### Provider

`Provider` is a wrapper around `InheritedWidget`, making it easier to use with different data types.

It has `FutureProvider` and `StreamProvider`, which handle passing futures and streams down your widget tree. It also has a `ValueListenableProvider` and `ChangeNotifierProvider`, similar to what we built.

### Riverpod

Riverpod is what we recommend for most people who choose to use a package. Riverpod incorporates the concepts from `Provider` into a complete state management solution. For holding state, you should use a `NotifierProvider` which:

1. Provides the state of your application.
2. Creates an interface to update that state using a `Notifier`.

This is very similar to the approach we took in this article, except less boilerplate.

Riverpod has the least boilerplate while also utilizing the core Flutter features appropriately.

### Bloc

Bloc is another top-rated solution within the Flutter community. It is known to scale well and is a good choice for big projects.

We don't choose Bloc for our projects because it contains a lot of boilerplate, which we were trying to avoid when using a package. You also have to learn the Bloc paradigm before using it.

Some people see this as a positive because it forces you to follow good code practices, which is essential when scaling your applications. But we enjoy packages with less overhead.

### Others

There are many other options, so feel free to explore, but these three are the big dogs in the Flutter community, and you can't go wrong with them.

## Our Recommendation

We recommend not using any of these. Our recommendation is to use `ValueNotifier` within the MVVM architecture and access the app state using service locators.

If that sounds like gibberish, don't worry; that is the next section.

## Quiz

**1. What is Provider primarily designed as?**

- A) A complete replacement for Flutter's state management
- B) A wrapper around InheritedWidget to make it easier to use
- C) A database management solution
- D) A UI component library

<details>
<summary>Answer</summary>

- B) A wrapper around InheritedWidget to make it easier to use

</details>

---

[← Course overview](../../../README.md)
