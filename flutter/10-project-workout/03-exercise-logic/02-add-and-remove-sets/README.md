# Add and Remove Sets

The next step is to add the ability to add and remove sets from the workout. Since we have the ValueNotifier for each exercise, adding and removing sets is relatively straightforward.

## Assignment

Implement the ability to add and remove sets from the workout. Since each set is a list of the current reps, we need to append the new reps to that list when adding a set. And remove the set information from the list when removing a set.

### Requirements

1. Add the new rep count to its corresponding ValueNotifier.
2. Remove the set information from the list based on the index.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/workout/workout_view_model.dart`. Tests: `test/create_account_test.dart`, `test/login_test.dart`, `test/workout_test.dart`, `test/user_service_test.dart`, `test/workout_view_model_test.dart`.

---

[← Course overview](../../../README.md)
