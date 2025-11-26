# 4.1 JS Functions Advanced – Lab

In this lab, you will practice more **advanced function concepts** in JavaScript, based on the lesson **4.1 JS | Functions Advanced**.

You will:

- Work with **function expressions** and compare them to declarations
- Use **callbacks** to control execution order
- Write and use **anonymous functions**
- Rewrite code using **arrow functions**
- Explore the special **arguments object** inside functions

---

## 🎯 Learning Goals (I can…)

- I can explain the difference between a **function declaration** and a **function expression**.
- I can pass a function as an argument and use it as a **callback**.
- I can write and use **anonymous functions** when passing callbacks.
- I can write and refactor functions into **arrow function** form.
- I can use the **arguments object** to work with a dynamic number of parameters.

---

## 📖 Pre-Lab

1. Read **4.1 JS | Functions Advanced**.
2. Complete the worksheets in this order:
   - `GuidedPractice.md`
   - `VocabularyWorksheet.md`
   - `PseudocodePractice.md`
   - `MultipleFunctionsAdvancedPractice.md`
   - `MiniFRQ_Practice.md`

These worksheets are designed to **build up to the lab** so the advanced concepts feel manageable — “one bite at a time”.

---

## 🧰 Setup

1. Open VS Code and navigate to:

   ```bash
   4.1 - JS Functions Advanced/Student_Version/4.1_JS_FunctionsAdvanced
   ```

2. Open the `src` folder and then:

   - Edit your JavaScript in: `src/Lab4_1_JSFunctionsAdvanced.js`
   - Open `src/index.html` in your browser.

3. Open the browser console:

   - Right-click in the page → **Inspect** → **Console**.
   - Refresh after changes to rerun your code.

> ✅ **Only edit:** `src/Lab4_1_JSFunctionsAdvanced.js` and the student worksheets in `worksheets/`.

---

## 📝 Lab Tasks – One Bite at a Time

### 🧩 Task 1 – Declaration vs Expression

1. Create a **function declaration** called `calcSumDecl` that:
   - accepts `x` and `y`
   - returns their sum

2. Call `calcSumDecl` **before** it is defined in the code and log the result.

3. Create a **function expression** called `calcSumExpr` that does the same.

4. Try to call `calcSumExpr` **before** it is defined and add a comment describing what happens and why (related to **hoisting**).

---

### 🧩 Task 2 – Function Expressions in Variables

1. Create a function expression stored in a `const` called `welcomeMessage` that:
   - accepts a `message`
   - logs `"MESSAGE: <message>"`

2. Call `welcomeMessage` with `"So nice to have you here! Welcome!"`.

3. Add a second variable `anotherGreeting` and assign it to `welcomeMessage` (no parentheses).

4. Call `anotherGreeting` with a different message and log the result.

Add a comment explaining why `anotherGreeting` works even though it's a different variable name.

---

### 🧩 Task 3 – Basic Callbacks

1. Define two functions:

   ```js
   function eatDinner() {
     console.log("Eating the dinner!");
   }

   function eatDessert() {
     console.log("Eating the dessert!");
   }
   ```

2. Call them in the order: dinner first, then dessert.

3. Now rewrite `eatDinner` so it accepts a **callback parameter**:

   ```js
   function eatDinner(callback) {
     console.log("Eating the dinner!");
     // TODO: use the callback to eat dessert afterwards
   }
   ```

4. Call `eatDinner(eatDessert)` and make sure it prints:
   - `Eating the dinner!`
   - `Eating the dessert!`

---

### 🧩 Task 4 – Callback with setTimeout

1. Rewrite `eatDinner` so that it uses `setTimeout` to simulate a delayed dinner:

   ```js
   function eatDinner(callback) {
     setTimeout(function () {
       console.log("Eating the dinner (slow)!");
       callback();
     }, 1000);
   }
   ```

2. Call `eatDinner(eatDessert)` and confirm that after ~1 second you see:
   - `Eating the dinner (slow)!`
   - `Eating the dessert!`

3. Add a comment explaining why the callback ensures dessert happens **after** dinner, even though `setTimeout` is async.

---

### 🧩 Task 5 – Anonymous Callback Functions

1. Write a function `printName(name, callback)` that:

   - logs `"Original name: <name>"`
   - calls `callback(name)`

2. Call `printName("sandra", <anonymous function here>)` where the anonymous function:
   - capitalizes the first letter and logs `"Formatted name: Sandra"`

Example output:

```text
Original name: sandra
Formatted name: Sandra
```

3. Write a function `getLength(str, callback)` that:

   - logs `"String received: <str>"`
   - calls `callback(str)`

4. Call `getLength` twice with different strings and different anonymous callbacks that log the length.

---

### 🧩 Task 6 – Arrow Functions Basics

1. Create a regular function expression:

   ```js
   const sayHello = function (name) {
     return `Hello, ${name}!`;
   };
   ```

2. Rewrite it as an **arrow function** `sayHelloArrow`.

3. Log the result of `sayHello("Ana")` and `sayHelloArrow("Ana")` to confirm they match.

4. Create an arrow function `noParams` that logs `"Hello there!"` and call it.

---

### 🧩 Task 7 – Short Arrow Functions

1. Write an arrow function `double` that:

   - accepts a number
   - returns the number times 2

   (Use the **short** form, no `{}` and no `return` keyword.)

2. Write an arrow function `toUpper` that:

   - accepts a string
   - returns the uppercased version

3. Test both functions with a few example values and log the results.

---

### 🧩 Task 8 – The arguments Object

1. Write a function `printArgs` **using a function declaration** that:

   - logs `"arguments length:"` and `arguments.length`
   - logs `"all:"` and `arguments`
   - logs `"first arg:"` and `arguments[0]` (if it exists)

2. Call `printArgs("hi", "there")` and observe the console.

3. Add a `for` loop inside `printArgs` that logs **each** argument on its own line.

4. Inside `printArgs`, create:

   ```js
   const argsArray = Array.from(arguments);
   ```

   and then use `argsArray.forEach` to log each element again.

Add a comment explaining why we need `Array.from` before using `.forEach`.

---

### 🧩 Task 9 – Flexible Sum with arguments (Mini Project)

Write a function `flexibleSum` that:

1. Does **not** specify any parameters in its declaration.

2. Uses the `arguments` object to:

   - loop over all arguments
   - add up all the numeric values
   - ignore any non-numeric values

3. Returns the total sum.

Examples to test:

```js
console.log(flexibleSum(1, 2, 3));                // 6
console.log(flexibleSum(10, -5, 7, 3));           // 15
console.log(flexibleSum(1, "hello", 2, true, 3)); // 6
```

---

## 🚀 Stretch Goals (Optional)

- Rewrite `flexibleSum` using `Array.from(arguments)` and **arrow functions** inside `.filter` and `.reduce`.
- Create a function `callThreeTimes(callback)` that calls the given callback three times, then:
  - call it with an anonymous function
  - call it with an arrow function

---

## 🎟 Exit Ticket

Answer briefly:

1. What is the main difference between a function declaration and a function expression in terms of **hoisting**?
2. Why are callbacks useful when working with async operations like `setTimeout`?
3. What is the `arguments` object and how is it different from a normal array?

---

## ✅ Submission Checklist

- [ ] All TODOs in `Lab4_1_JSFunctionsAdvanced.js` are completed or attempted.
- [ ] Your code runs without syntax errors.
- [ ] You used at least one callback and one anonymous function.
- [ ] You wrote at least two arrow functions.
- [ ] You used the `arguments` object and logged its contents.
- [ ] All required worksheets in the `worksheets/` folder are completed.
- [ ] Exit ticket questions are answered.

