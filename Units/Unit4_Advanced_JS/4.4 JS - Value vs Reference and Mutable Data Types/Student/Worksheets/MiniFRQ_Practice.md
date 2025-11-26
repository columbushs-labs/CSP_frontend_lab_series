# Mini FRQ Practice – Value vs Reference & Mutable Data Types

**Prompt:**

An online course platform stores course information like this:

```js
const course = {
  title: "Intro to JavaScript",
  teacher: "Mr. L",
  students: ["Ana", "John", "Fabio"]
};
```

### Part (a)

Write a function `addStudentImmutable(courseObj, newStudent)` that returns a **new course object** with `newStudent` added to the end of the `students` array **without mutating** `courseObj`.

- You may assume `courseObj` always has a `students` array.
- Do not modify `courseObj.students` directly.

_Write your function here:_



### Part (b)

Explain in 1–2 sentences why directly pushing into `courseObj.students` might cause bugs in a larger application.

_Answer:_



### Part (c)

Write a short code segment that:

- Calls `addStudentImmutable(course, "Lilian")` and stores the result in `updatedCourse`.
- Logs both `course` and `updatedCourse` to show that the original was not mutated.

_Write your code here:_



