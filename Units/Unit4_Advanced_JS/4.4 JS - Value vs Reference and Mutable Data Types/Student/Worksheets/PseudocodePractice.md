# Pseudocode Practice – Value vs Reference & Mutable Data Types

Write step-by-step instructions (pseudocode) for each scenario. Focus on avoiding mutation of the original data.

---

### Scenario 1 – Add a student without mutating

You have an array:

```js
const roster = ["Ana", "John", "Fabio"];
```

You want to add `"Lilian"` to the roster **without mutating** the original array.

_Pseudocode:_



---

### Scenario 2 – Remove a task without mutating

You have:

```js
const tasks = ["email parents", "grade quizzes", "plan lab"];
```

You want a new array that has **all tasks except** `"grade quizzes"`.

_Pseudocode:_



---

### Scenario 3 – Update nested object safely

You have a nested object:

```js
const profile = {
  username: "student1",
  settings: {
    theme: "light",
    notifications: true
  }
};
```

Write pseudocode for returning a **new** `profile` object with `theme` changed to `"dark"` without mutating the original object.

_Pseudocode:_



---

### Scenario 4 – Deep copy a list of playlists

You have an array of playlist objects with nested arrays. You want to make a **full independent copy** so you can edit the copy without touching the original.

_Pseudocode:_



