# 3.2 JS Arrays & Objects – Lab

In this lab, you will practice working with **nested data structures** in JavaScript, based on the lesson **3.2 JS | Arrays & Objects**.

You will:

- Review arrays and objects as core **data structures**
- Work with **arrays of objects** and **arrays inside arrays**
- Access values from deeply nested arrays and objects
- Practice modeling a **school system** with classrooms, teachers, and students

---

## 🎯 Learning Goals (I can…)

- I can explain what a **data structure** is and why we nest arrays and objects.
- I can access values from **arrays of objects** and **arrays of arrays**.
- I can read and write code that uses **multiple levels of nesting** (e.g. `schoolSystem.schools[1].classRooms[0].students[2].firstName`).
- I can model real-world information (schools, classrooms, students) using JavaScript arrays and objects.

---

## 📖 Pre-Lab

1. Read **3.2 JS | Arrays & Objects**.
2. Complete the worksheets in this order:
   - `GuidedPractice.md`
   - `VocabularyWorksheet.md`
   - `PseudocodePractice.md`
   - `MultipleStructuresPractice.md`
   - `MiniFRQ_Practice.md`

These worksheets are designed to **build up to the lab** so that the nested structures feel manageable, “one bite at a time”.

---

## 🧰 Setup

1. Open VS Code and navigate to:

   ```bash
   3.2 - JS Arrays and Objects/Student_Version/3.2_JS_ArraysAndObjects
   ```

2. Open the `src` folder and then:

   - Edit your JavaScript in: `src/Lab3_2_JSArraysAndObjects.js`
   - Open `src/index.html` in your browser.

3. Open the browser console:

   - Right-click in the page → **Inspect** → **Console**.
   - Refresh after changes to rerun your code.

> ✅ **Only edit:** `src/Lab3_2_JSArraysAndObjects.js` and the student worksheets in `worksheets/`.

---

## 📝 Lab Tasks – One Bite at a Time

### 🧩 Task 1 – Recap: Arrays vs Objects

1. Create an array `students` with the names:

   ```js
   "Bob", "Susy", "Ted", "Sarah", "Bill"
   ```

2. Log:
   - the full array
   - the first student
   - the last student (using `.length - 1`)

3. Create an object `bob`:

   ```js
   const bob = { name: "Bob", age: 17 };
   ```

4. Log `bob.name` and `bob.age`.

---

### 🧩 Task 2 – Array of Student Objects

Create the `studentsArray` below:

```js
const studentsArray = [
  { name: "Bob", age: 17 },
  { name: "Susy", age: 18 },
  { name: "Ted", age: 18 },
  { name: "Sarah", age: 20 },
  { name: "Bill", age: 19 }
];
```

Then:

1. Log the whole `studentsArray`.
2. Log the name of the **first student**.
3. Log the age of **Sarah** by using her index in the array.

> 💡 Hint: Sarah is at index 3 in this array.

---

### 🧩 Task 3 – Adding Student Objects

Using your `studentsArray`:

1. Use `.push` to add a new student object for `"Steve", age: 25`.
2. Create a `newStudent` object for `"Nick", age: 23` and push it into the array.
3. Log the updated `studentsArray` and confirm the new students are at the end.

---

### 🧩 Task 4 – 2D Arrays (Arrays in Arrays)

Create the `twoD` array:

```js
const twoD = [
  ["Bob", "Susy", "Ted"],
  ["Lilly", "Sarah", "Bill"],
  ["Thomas", "Barry", "Alex"]
];
```

Then:

1. Log the entire second row (`["Lilly", "Sarah", "Bill"]).
2. Log `"Lilly"` using the correct indexes.
3. Log `"Bob"` using the correct indexes.
4. Log an index that is out of range and observe `undefined`.

Add a comment explaining why one of your logs prints `undefined`.

---

### 🧩 Task 5 – classes: Arrays of Arrays of Objects

Create the full `classes` array from the reading (you can copy/paste from the PDF into this file).

Then:

1. Log the **second classroom** of students (the whole array).
2. Log the first name `"Antonette"` using the correct indexes.
3. Log the age `18` (one of the students has this age in the structure).
4. Log the last name `"Beatty"` using the correct indexes.

> Try to keep your code readable with comments like `// second classroom` or `// last student in last classroom`.

---

### 🧩 Task 6 – Nested Objects: classRoom with teacher and address

Create the following object:

```js
const classRoom = {
  teacher: {
    firstName: "Greg",
    lastName: "Dach",
    age: 38,
    address: {
      street: "3085 Kelton Knolls",
      city: "Aldaside",
      state: "Maryland"
    }
  }
};
```

Then:

1. Log the teacher’s first name.
2. Log the teacher’s age.
3. Log the **city** inside the nested address object.

---

### 🧩 Task 7 – classroom with Students

Create a `classRoom2` object:

```js
const classRoom2 = {
  teacher: { firstName: "Marcelino", lastName: "Padberg", age: 25 },
  students: [
    { firstName: "Aliyah", lastName: "Schulist", age: 18 },
    { firstName: "Cleveland", lastName: "Towne", age: 28 },
    { firstName: "Jan", lastName: "Quitzon", age: 18 },
    { firstName: "Alaina", lastName: "Runolfsdottir", age: 18 },
    { firstName: "Gerhard", lastName: "Bergstrom", age: 23 }
  ]
};
```

Then:

1. Log the first name of the third student (`"Jan"`).
2. Log the teacher’s age.
3. Log the full name (first + last) of the last student.

---

### 🧩 Task 8 – school and schoolSystem

1. Create the `school` object from the reading with:
   - `name`
   - `classRooms` (array with at least 2 classroom objects like above)

2. Log:
   - the school name
   - the first name of a student in the **second classroom**

3. Create the `schoolSystem` object from the reading with at least 2 schools.

4. Log:
   - the name of the second school
   - the full object for the second school
   - one specific student’s first name from within that school system, using the full path (like the examples in the PDF).

---

### 🧩 Task 9 – Helper Functions for Nested Data (Mini Project)

Write helper functions that work with your `schoolSystem`:

1. `getSchoolNames(system)`  
   - accepts `schoolSystem`
   - logs the name of each school

2. `getStudentsFromSchool(system, schoolIndex)`  
   - logs the first names of **all students** in the school at `schoolIndex`  
   - (you can assume each school has 2 classrooms like in the reading)

3. `addStudentToFakeSchool2FirstClass(system, studentObject)`  
   - finds `"Fake School 2"`  
   - pushes `studentObject` into the **first classroom’s** students array

Test `addStudentToFakeSchool2FirstClass` with:

```js
const newStudent = { firstName: "Lucille", lastName: "Lozano", age: 21 };
addStudentToFakeSchool2FirstClass(schoolSystem, newStudent);
```

Then log the updated classroom to confirm.

---

## 🚀 Stretch Goals (Optional)

- Write a function `findStudentByFirstName(system, firstName)` that searches through all schools, classrooms, and students.
- Write a function `countAllStudents(system)` that returns how many total students are in the system.

---

## 🎟 Exit Ticket

Answer briefly:

1. What does it mean for data structures to be “nested”?
2. Why might we use an **array of objects** instead of two separate arrays (e.g., names and ages)?
3. Write a path (in code) that accesses a deeply nested value from your `schoolSystem` (even if you already logged it above).

---

## ✅ Submission Checklist

- [ ] All TODOs in `Lab3_2_JSArraysAndObjects.js` are completed or attempted.
- [ ] Your code runs without syntax errors.
- [ ] You accessed values from **arrays of objects** and **arrays of arrays**.
- [ ] You created and accessed a **schoolSystem** object with multiple schools.
- [ ] All required worksheets in the `worksheets/` folder are completed.
- [ ] Exit ticket questions are answered.

