# How to Handle Remote Data

Almost every app nowadays uses a database. Some of the worst user experiences I have experienced have all been caused by not having the data locally first.

1. No network connection, and the app doesn't work at all
2. Slow network connection and the app becomes almost unusable

For some apps, this is acceptable. For example, I don't think anybody complains that their video call app isn't working when they don't have a connection. Obviously, there is no connection, and the app shouldn't be working. However, a todo list, notes app, games, and fitness tracker should all work just the same when there is no connection to have a good experience.

So how do you handle this?

You want to have two data sources, a local and a remote. Then, the repository is used to orchestrate which data source to call.

## When do you need this

For example, if you are building a todo app, you would want to have a local and a remote database of the user's todo list. When the app is offline, use the local database, and when it is back online, create a system to update the remote database with all the new todos so they can be synced with other devices.

## Data Source

This fits right into the MVVM architecture. You can create a `LocalDatabaseAbstraction` and a `RemoteDatabaseAbstraction` and then use them within the repository.

For example, if we want to create a todo, it would be nice if local and remote data sources had the same `create(Todo todo)` function.

Then, as you handle this in the repository, you don't have to worry about how the actual todo is created (the implementation details are within the data source); you only have to worry about orchestrating it properly.

```dart
class TodosRepository {
  TodosRepository({required TodosLocalDataAbstraction todosLocalDataAbstraction, required TodosRemoteDataAbstraction todosRemoteDataAbstraction}) : _todosLocalDataAbstraction = todosLocalDataAbstraction, _todosRemoteDataAbstraction = todosRemoteDataAbstraction;

  final TodosLocalDataAbstraction _todosLocalDataAbstraction;
  final TodosRemoteDataAbstraction _todosRemoteDataAbstraction;

  final _streamController =
      StreamController<List<Todo>>.broadcast(sync: true);

  Stream<List<Todo>> watchAll() {
    return _streamController.stream;
  }

  Future<void> create(Todo todo) async {
    // You would need to handle any exceptions that can come up and gracefully revert state if needed
    await _todosRemoteDataAbstraction.create(model);
    await _todosLocalDataAbstraction.create(model);
    final todos = await _todosLocalDataAbstraction.readAll();
    _streamController.add(todos);
  }
}
```

In short, we call both the remote and local abstractions and provide a listenable so services or ViewModels can update once the data has been updated.

## Is it a lot?

Yes, it is, but luckily, you don't have to do this setup in MOST cases. For example, suppose you use `Firestore` as your database. In that case, you don't need to interact with the cache since that is handled within the dependency, so you would only need a `TodosRepository` that would interact with `Firestore`.

If you use `GraphQL`, there are solutions for that as well through things like `grahpql` and `graphql_codegen` packages, which provide you with a way to interact, listen, and reactively update the cache.

So, most of the time, you don't have to set this up yourself, but it's good to be aware of it.

## Do you need this?

Like always, the answer is "it depends". Our opinion is that if you can avoid all the boilerplate for handling caching, then do so. The key point is to try to keep the source of truth as close to the source as possible.

> "There are only two hard things in Computer Science: cache invalidation and naming things." -- Phil Karlton

## Quiz

**1. Why is it important to have local data in most apps?**

- A) To reduce server costs
- B) To make the app faster
- C) To reduce code complexity
- D) To provide a good user experience when offline or with slow connections

<details>
<summary>Answer</summary>

- D) To provide a good user experience when offline or with slow connections

</details>

**2. Which apps might NOT need local data storage?**

- A) Todo list apps
- B) Notes apps
- C) Video call apps
- D) Fitness tracking apps

<details>
<summary>Answer</summary>

- C) Video call apps

</details>

**3. What is the recommended approach for handling data in most apps?**

- A) Use only remote data
- B) Use only local data
- C) Use direct database connections
- D) Use both local and remote data sources through a repository

<details>
<summary>Answer</summary>

- D) Use both local and remote data sources through a repository

</details>

**4. When using Firestore, do you need to implement your own caching?**

- A) No, Firestore handles caching internally
- B) Yes, always
- C) Only for offline support
- D) Only for large datasets

<details>
<summary>Answer</summary>

- A) No, Firestore handles caching internally

</details>

---

[← Course overview](../../../README.md)
