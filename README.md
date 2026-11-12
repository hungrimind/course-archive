# Hungrimind Course Archive

The complete written content of every published Hungrimind course: lessons, quizzes and exercises (answers in collapsible sections), and every coding challenge with its starter code, tests and solution.

## Courses

| Course | Modules | Lessons | Coding challenges |
|---|---|---|---|
| [Dart](dart/README.md) | 8 | 90 | 42 |
| [Flutter](flutter/README.md) | 12 | 132 | 64 |
| [S.O.L.I.D Principles in OOP](solid/README.md) | 7 | 37 | 14 |
| [D.R.Y. (Don't Repeat Yourself)](dry/README.md) | 5 | 27 | 6 |
| [TypeScript](typescript/README.md) | 22 | 200 | 142 |
| [Microcontrollers](microcontrollers/README.md) | 12 | 88 | 0 |
| [System Design](system-design/README.md) | 11 | 130 | 7 |
| [Programming And Computers](programming-and-computers/README.md) | 6 | 69 | 0 |
| [Electricity and Current](electricity-and-current/README.md) | 9 | 73 | 0 |

## How it's organized

```
<course>/
  README.md                 course overview + table of contents
  01-<module>/01-<section>/01-<lesson>/
    README.md               the lesson, followed by its quiz/exercise or challenge
    code/initial/           starter code for coding challenges
    code/solution/          reference solution
    interactive.json        raw definition of the lesson's interactive exercise
  assets/                   images used by the lessons
```

## Running a coding challenge

Each `code/initial` folder is a small standalone project containing the tests the platform ran.

- **Dart / Flutter:** `cd code/initial && dart pub get && dart test` (Flutter projects: `flutter test`)
- **TypeScript:** `cd code/initial && npm install && npx vitest run`

Edit the code until the tests pass, then compare with `code/solution`.
