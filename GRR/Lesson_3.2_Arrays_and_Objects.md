
# Lesson 3.2 – Arrays & Objects (Nested Data Structures)

## 🎯 Lesson Focus
Real-world data is rarely flat. In this lesson, students learn how arrays and objects are combined to model more complex systems and how to access information from nested data structures accurately and efficiently.

---

## 1. Data Structures as Organization Tools

### Discovery Question
Why isn’t a single variable enough to represent something like a classroom or a list of students?

### Task Question
Decide which data structure best represents a list of students and explain why.

```js
let student1 = "Bob";
let student2 = "Susy";
let student3 = "Ted";
```

```js
const students = ["Bob", "Susy", "Ted"];
```

### Key Vocabulary
- Data structure
- Array
- Index
- Element

### Technical Skills
- Identifying when a list structure is needed
- Explaining why arrays are used for collections
- Accessing array elements by index

---

## 2. Objects Inside Arrays (Arrays of Objects)

### Discovery Question
If each student has more than one piece of information, how should that data be organized?

### Task Question
Given the array below, write one line of code to access Sarah’s age.

```js
const students = [
  { name: "Bob", age: 17 },
  { name: "Susy", age: 18 },
  { name: "Ted", age: 18 },
  { name: "Sarah", age: 20 }
];
```

```js
__________________________________
```

### Key Vocabulary
- Object
- Property
- Array of objects
- Key-value pair

### Technical Skills
- Navigating from an array to an object
- Accessing object properties through array indexing
- Reading nested structures left to right

---

## 3. Arrays Inside Arrays (Two-Dimensional Arrays)

### Discovery Question
Why might data need to be grouped into rows and columns instead of a single list?

### Task Question
Predict the value returned by the following expressions.

```js
const grid = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"]
];

grid[1];
grid[1][2];
```

### Key Vocabulary
- Two-dimensional array
- Row
- Column
- Nested array

### Technical Skills
- Accessing arrays within arrays
- Tracing multi-level indexing
- Avoiding out-of-bounds access

---

## 4. Objects Inside Objects (Nested Objects)

### Discovery Question
How does nesting objects help represent relationships like teachers and classrooms?

### Task Question
Write one line of code to access the teacher’s last name.

```js
const classRoom = {
  teacher: {
    firstName: "Greg",
    lastName: "Dach",
    age: 38
  }
};
```

```js
__________________________________
```

### Key Vocabulary
- Nested object
- Property chain
- Dot notation

### Technical Skills
- Accessing deeply nested properties
- Following object paths correctly
- Avoiding incorrect property access

---

## 5. Combining Arrays and Objects (Real-World Models)

### Discovery Question
How would you represent an entire school with multiple classrooms and students?

### Task Question
Explain what each part of the following expression accesses.

```js
school.classRooms[1].students[4].firstName;
```

### Key Vocabulary
- Nested data structure
- Hierarchy
- Path

### Technical Skills
- Reading and writing long access chains
- Breaking down complex expressions
- Mapping code paths to real-world meaning

---

## 🔁 Recap & Synthesis

By the end of this lesson, students should understand that:
- Arrays organize lists of data
- Objects label and group related properties
- Real programs often combine arrays and objects
- Correct data access depends on understanding structure and order

These skills are foundational for iteration, two-dimensional arrays, and AP-style Free Response Questions.
