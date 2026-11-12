# Hungrimind Course Archive

The complete written content of every published Hungrimind course: lessons, quizzes and exercises (answers in collapsible sections), and every coding challenge with its starter code, tests and solution.

## Courses

| Course | Modules | Lessons | Coding challenges |
|---|---|---|---|
| [Dart](dart/README.md) | 8 | 89 | 42 |
| [Flutter](flutter/README.md) | 12 | 131 | 64 |
| [S.O.L.I.D Principles in OOP](solid/README.md) | 7 | 36 | 14 |
| [D.R.Y. (Don't Repeat Yourself)](dry/README.md) | 5 | 26 | 6 |
| [TypeScript](typescript/README.md) | 22 | 199 | 142 |
| [Microcontrollers](microcontrollers/README.md) | 12 | 88 | 0 |
| [System Design](system-design/README.md) | 11 | 129 | 7 |
| [Programming And Computers](programming-and-computers/README.md) | 6 | 68 | 0 |
| [Electricity and Current](electricity-and-current/README.md) | 9 | 72 | 0 |

## How it's organized

```
index.json                  machine-readable list of every course and lesson, in order
<course>/
  README.md                 course overview + table of contents (start here)
  01-<module>/01-<section>/01-<lesson>/
    README.md               the lesson, followed by its quiz, exercise or challenge
    code/initial/           coding challenges: starter code + tests
    code/solution/          coding challenges: reference solution (same tests)
    interactive.json        quizzes/exercises: the original definition, incl. answers
  assets/                   images used by the lessons
```

- **Order:** the number prefixes give the intended order. Take modules, sections and lessons in sequence.
- **Lessons:** each lesson `README.md` is the lesson text as it appeared on the platform. If the lesson had a quiz or exercise, it follows under its own heading. Answers are in collapsible `<details>` blocks, so try first, then expand.
- **Coding challenges:** the lesson ends with a `## Challenge` section that describes the task, names the file to edit and links to `code/initial` and `code/solution`.
- **Interactive exercises:** some exercises were visual widgets on the platform (system diagram builder, circuit builder, pinout mapper, signal matcher). The lesson describes them in text with the solution. `interactive.json` holds the exact original definition.

## Running a coding challenge

Each `code/initial` folder is a small standalone project containing the tests the platform ran.

- **Dart:** `cd code/initial && dart pub get && dart test`
- **Flutter:** `cd code/initial && flutter pub get && flutter test`
- **TypeScript:** `cd code/initial && npm install && npx vitest run`

Edit the code until the tests pass, then compare with `code/solution`.

## Using this with an AI assistant

Point the assistant at this repository and ask it to work through a course with you. `index.json` lists every lesson in order with its type and paths. Lesson READMEs are plain markdown, and coding challenges can be run locally with the commands above. A good prompt: _"Teach me the TypeScript course from this repo one lesson at a time. Quiz me before showing the answers, and review my solutions to the coding challenges by running their tests."_
