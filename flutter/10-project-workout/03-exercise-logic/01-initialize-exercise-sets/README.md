# Initialize Exercise Sets

All our user management is handled at this point. It was a necessary step because even though the core user management is dealt with, most of the actions taken within the application are related to the user in some way. That's why it's important to get it right and have a single source of truth for the user.

The next step is to structure the workout view.

We already have the data model for the workout. We have two data models:

1. **Workout Session** - This is an actual workout and has a foreign key that ties this workout to the user who owns it.
   1. `id` - The id of the workout session.
   2. `user_id` - The id of the user that owns the workout session.
   3. `date` - The date of the workout session.
2. **Exercise Sets** - This is the actual exercise performed. It has a foreign key that ties this exercise to the workout session it belongs to.
   1. `id` - The id of the exercise set.
   2. `session_id` - The id of the workout session that this exercise set belongs to.
   3. `exercise_name` - The name of the exercise performed.
   4. `set_number` - The number of the set performed.
   5. `reps` - The number of reps that were performed.

We like starting with the data approach. The database is defined in this case, but we need to create the ValueNotifier within the ViewModel.

## Assignment

The app we will build will have four exercises for every workout.

```dart
final exercises = ['Push-ups', 'Pull-ups', 'Sit-ups', 'Squats'];
```

We have created a ValueNotifier for the set information. The `ValueNotifier` is a type of `List<int>`. Each item in the list will be a set, and the `int` will be the rep information.

You will make sure that our new `Map` is initialized with our different exercises.

### Requirements

1. Create a method, that will loop through the exercises and assign a `ValueNotifier`
2. Initialize in the constructor of the class.

> **Hint:** To assign a value to a Map, reference the specific key and set its value: `myMap[key] = myValue`;

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/workout/workout_view_model.dart`. Tests: `test/create_account_test.dart`, `test/login_test.dart`, `test/workout_test.dart`, `test/user_service_test.dart`, `test/workout_view_model_test.dart`.

---

[← Course overview](../../../README.md)
