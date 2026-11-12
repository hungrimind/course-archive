# Finish Workout

Now, it's time to store the workouts in the database.

Remember, in the MVVM Architecture, we have a ViewModel that is responsible for the business logic and repository, which is the data layer.

So, just like we did with the `UserRepository` we need to create a `WorkoutRepository` that will be responsible for the data layer of the workouts and then use this repository to store the workouts in the database after the workout is finished.

## Assignment

We created the `WorkoutRepository` for you that has two functions:

1. `createWorkoutSession` - This function will create a new workout session and return the id of the workout session.
2. `saveExerciseSet` - This function will save the exercise set in the database.

You need to use these two functions to store the workout in the database after the workout is finished.

### Requirements

1. Create a new workout session and assign the return value to `sessionId`.
2. Save each exercise set in the workout session.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `lib/workout/workout_view_model.dart`. Tests: `test/create_account_test.dart`, `test/login_test.dart`, `test/workout_test.dart`, `test/user_service_test.dart`, `test/workout_view_model_test.dart`.

---

[← Course overview](../../../README.md)
