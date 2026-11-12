# View Model

Every page must have exactly **one** view model. The view model has multiple purposes:

1. Removing the business logic from the View.
2. Making all the business logic fully testable
3. Making the state uni-directional (flows from a "higher" class down to the "view")

## Causing rebuilds on state changes

There are some requirements for a view model to cause the View to be rebuilt. If you remember, in the "State management" section, we talked about the use of `ValueListenableBuilder`. That is the core of this architecture; in some cases, you can opt towards using `ChangeNotifier` and `ListenableBuilder`, but that is harder to control when and what gets rebuilt.

Here is an example of a view model responsible for managing a list of todos. For more complicated states, we can have additional `ValueNotifier` classes or a state object for the `ValueNotifier`.

```dart
class TodoPageViewModel {
  TodoPageViewModel()

  final ValueNotifier<List<Todo>> todosNotifier = ValueNotifier([]);

  void add(Todo todo) {
    todosNotifier.value = [...todosNotifier.value, todo];
  }

  void dispose() {
    todosNotifier.dispose();
  }
}
```

Let's showcase a complete example of using this ViewModel within the View.

```dart {48, 27-31} collapse={8-9}
class _MyHomePageState extends State<MyHomePage> {
  final homePageViewModel = TodoPageViewModel();

  final TextEditingController _todoController = TextEditingController();

  @override
  void dispose() {
    _todoController.dispose();
    homePageViewModel.dispose();
    super.dispose();
  }

  void _addTodo() {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text("Add Todo"),
          content: TextField(
            controller: _todoController,
            decoration: const InputDecoration(
              labelText: "Title",
            ),
          ),
          actions: [
            TextButton(
              onPressed: () {
                homePageViewModel.add(
                  Todo(
                    todo: _todoController.text,
                  ),
                );
                _todoController.clear();
                Navigator.pop(context);
              },
              child: const Text("Add"),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      /// [ValueListenableBuilder] is used here to rebuild if the [ValueNotifier] updates
      body: ValueListenableBuilder(
        valueListenable: homePageViewModel.todosNotifier,
        builder: (context, todos, child) {
          return ListView.builder(
            itemCount: todos.length,
            itemBuilder: (context, index) {
              final todo = todos[index];
              return ListTile(
                title: Text(todo.title),
                trailing: Checkbox(
                  value: todo.completed,
                  onChanged: (value) {},
                ),
              );
            },
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _addTodo,
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

## ValueNotifier?

Now if you notice this is very similar or almost identical to how you would directly use `ValueNotifier`s. That is the intention.

While there are many solutions to how you would pass around your view models, this approach enforces type safety and fully removes the need for `notifyListeners`.

`ValueNotifier` is core to the architecture, and you will see how we use it in other places as well.

## Assignment

We've gone ahead and created a view model for you that is currently using a `ValueListenableBuilder` to make sure the UI updates, but nothing happens when the button is pressed to increment.

Fix the bug by making sure we use the ViewModel to update the state.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/counter_view_model.dart`. Tests: `test/widget_test.dart`.

---

[← Course overview](../../../README.md)
