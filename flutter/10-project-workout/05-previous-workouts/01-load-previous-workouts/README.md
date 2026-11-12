# Load Previous Workouts

We have everything we need for the current workout session. But this app is a little boring.

What if we added our previous workouts to the UI and tried to beat the number of reps we did last time?

This way, we can keep getting better and see progress.

The first part of this is we need to load the last workout from the database.

## Assignment

The structure is set up for you, and the last workout ID is retrieved.

You must get the set information for that workout ID and store it in a new `ValueNotifier` called `previousSessionSets`.

### Requirements

1. Get the set information for the last workout ID.
2. Store it in a new `ValueNotifier` called `previousSessionSets`.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/workout/workout_view_model.dart`. Tests: `test/create_account_test.dart`, `test/login_test.dart`, `test/workout_test.dart`, `test/user_service_test.dart`, `test/workout_view_model_test.dart`.

---

[← Course overview](../../../README.md)
