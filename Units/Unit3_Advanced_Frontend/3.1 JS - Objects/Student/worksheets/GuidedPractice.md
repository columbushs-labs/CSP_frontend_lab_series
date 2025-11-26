# 3.1 JS Objects – Worksheet
## Guided Practice

### Part 1 – Reading Object Literals

1.
```js
let olympicRecords = {
  athletics100Men: "Usain Bolt",
  athleticsLongJumpMen: "Mike Powel"
};
```

In your own words, explain what this object represents and what each part is:


2.
```js
let student = {
  firstName: "Ana",
  lastName: "Lopez",
  id: 7
};
console.log(student.firstName);
```

What will be printed and why?


3.
```js
let car = {
  make: "Honda",
  model: "Accord",
  year: 1998
};
console.log(car["model"]);
```

What will be printed and why is bracket notation allowed here?


### Part 2 – Dot vs Bracket Notation

Given:

```js
let user = {
  name: "Nick",
  "favorite sport": "skateboarding"
};
```

4. Write one line that logs the `name` using **dot notation**.

5. Write one line that logs `"favorite sport"` using **bracket notation**.

6. Why can’t we write `user.favorite sport`? Explain in a sentence.


### Part 3 – Adding and Updating Properties

7.
```js
let olympicRecords = {
  athletics100Men: "Justin Gatlin"
};
olympicRecords.athletics100Men = "Usain Bolt";
console.log(olympicRecords.athletics100Men);
```

What will be printed and why?


8.
```js
let olympicRecords = {
  athletics100Men: "Usain Bolt"
};
olympicRecords.swimming200Men = "Michael Phelps";
console.log(olympicRecords);
```

What new property was added and what is its value?


### Part 4 – The in Operator and delete

9.
```js
let myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998
};

console.log("make" in myCar);
console.log("color" in myCar);
```

What will each `console.log` print?


10.
```js
let olympicRecords = {
  athletics100Men: "Usain Bolt",
  doubleOllie: "Chris Chann"
};

delete olympicRecords.doubleOllie;
console.log(olympicRecords);
```

What does `delete` do in this example?

