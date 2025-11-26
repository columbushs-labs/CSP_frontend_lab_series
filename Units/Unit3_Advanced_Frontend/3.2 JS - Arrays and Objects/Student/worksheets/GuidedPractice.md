# 3.2 JS Arrays & Objects – Worksheet
## Guided Practice

### Part 1 – Arrays of Objects

1.
```js
const students = [
  { name: "Bob", age: 17 },
  { name: "Susy", age: 18 },
  { name: "Ted", age: 18 }
];
console.log(students[0]);
```

In your own words, explain what `students[0]` represents.


2.
```js
console.log(students[1].name);
```

What will be printed? Why?


3.
```js
const sarah = { name: "Sarah", age: 20 };
console.log(sarah.age);
```

What will be printed? Why?


### Part 2 – Arrays in Arrays (2D Arrays)

Given:

```js
const twoD = [
  ["Bob", "Susy", "Ted"],
  ["Lilly", "Sarah", "Bill"],
  ["Thomas", "Barry", "Alex"]
];
```

4. What will `console.log(twoD[1]);` print?

5. What will `console.log(twoD[1][0]);` print?

6. What will `console.log(twoD[0][3]);` print? Why?


### Part 3 – Arrays of Arrays of Objects

Look at this code:

```js
const classes = [
  [
    { firstName: "Tomas", lastName: "Bechtelar", age: 22 },
    { firstName: "Nico", lastName: "Schamberger", age: 26 }
  ],
  [
    { firstName: "Charlie", lastName: "Rolfson", age: 23 },
    { firstName: "Austin", lastName: "Schowalter", age: 26 }
  ]
];
```

7. In a sentence, describe what `classes` represents.

8. How do you access `"Austin"`’s first name using indexes and dot notation?

Write the code:


9. What will `console.log(classes[0][0].age);` print?


### Part 4 – Objects inside Objects

```js
const classRoom = {
  teacher: {
    firstName: "Greg",
    lastName: "Dach",
    age: 38
  }
};
```

10. What will `console.log(classRoom.teacher.firstName);` print?

11. Write one line of code to log the teacher’s age.

