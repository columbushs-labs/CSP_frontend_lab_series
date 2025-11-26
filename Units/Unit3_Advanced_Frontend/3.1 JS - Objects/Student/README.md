# 3.1 JS Objects – Lab

In this lab, you will practice working with **objects** in JavaScript, based on the lesson **3.1 JS | Data Types in JavaScript – Objects**.

You will:

- Understand **key–value pairs** and why objects are useful
- Declare objects using **object literal syntax**
- Access properties with **dot notation** and **bracket notation**
- Add, update, and delete properties
- Check if a property exists with the `in` operator
- Use `Object.keys`, `Object.values`, and `for...in` to list properties

---

## 🎯 Learning Goals (I can…)

- I can explain what a key–value pair is and how it relates to objects.
- I can create and initialize an object using curly braces `{ }`.
- I can access and update properties using both dot and bracket notations.
- I can add and remove properties from an object.
- I can list an object’s keys and values using built-in methods and loops.

---

## 📖 Pre-Lab

1. Read **3.1 JS | Objects**.
2. Complete the worksheets in this order:
   - `GuidedPractice.md`
   - `VocabularyWorksheet.md`
   - `PseudocodePractice.md`
   - `MultipleObjectsPractice.md`
   - `MiniFRQ_Practice.md`

These worksheets are designed to **build up to the lab** so that the coding feels like the final step, not the first.

---

## 🧰 Setup

1. Open VS Code and navigate to:

   ```bash
   3.1 - JS Objects/Student_Version/3.1_JS_Objects
   ```

2. Open the `src` folder and then:

   - Edit your JavaScript in: `src/Lab3_1_JSObjects.js`
   - Open `src/index.html` in your browser.

3. Open the browser console:

   - Right-click in the page → **Inspect** → **Console**.
   - Refresh after changes to rerun your code.

> ✅ **Only edit:** `src/Lab3_1_JSObjects.js` and the student worksheets in `worksheets/`.

---

## 📝 Lab Tasks – One Bite at a Time

### 🧩 Task 1 – Your First Object

1. Create an object called `student` with at least these properties:
   - `firstName` (string)
   - `lastName` (string)
   - `id` (number)

2. Log the full `student` object.
3. Log just the `firstName` and `id` using **dot notation**.

---

### 🧩 Task 2 – Key–Value Pairs and Bracket Notation

1. Add a new property `favoriteSubject` to `student` using **dot notation**.
2. Add a new property `"favorite sport"` (note the space!) using **bracket notation**.
3. Log both values to the console.

Example:

```js
student["favorite sport"] = "basketball";
console.log(student["favorite sport"]);
```

Add a comment explaining **when** bracket notation is required.

---

### 🧩 Task 3 – Updating Values

1. Change `student.favoriteSubject` to a different subject.
2. Change `"favorite sport"` to a different sport.
3. Log the `student` object before and after the updates to see the change.

---

### 🧩 Task 4 – Does a Property Exist?

Using the `in` operator:

1. Check if `"firstName"` is in `student`.
2. Check if `"age"` is in `student`.
3. Log the result of each check.

Example:

```js
console.log("firstName" in student); // true or false
```

Add a short comment explaining what the `in` operator does.

---

### 🧩 Task 5 – Delete a Property

1. Add a temporary property `nickname` to `student`.
2. Log the object.
3. Use the `delete` operator to remove `nickname` from the object.
4. Log the object again to confirm it has been removed.

Example:

```js
delete student.nickname;
```

---

### 🧩 Task 6 – Objects of Olympic Records

1. Create an object `olympicRecords` based on the lesson:

   - `athletics100Men: "Usain Bolt"`
   - `athleticsLongJumpMen: "Mike Powel"`
   - `swimming200Men: "Michael Phelps"`
   - `swimming400Women: "Katie Ledecky"`

2. Log the full object.
3. Access **two properties with dot notation** and **two with bracket notation**.

---

### 🧩 Task 7 – Updating and Adding Olympic Records

1. Update `athletics100Men` to `"Justin Gatlin"` and then back to `"Usain Bolt"`.
2. Add a new property `gymnasticsAllAroundWomen` with any champion name you like.
3. Log the updated object.

---

### 🧩 Task 8 – Listing Keys and Values

Using your `olympicRecords` object:

1. Use `Object.keys(olympicRecords)` and log the result.
2. Use `Object.values(olympicRecords)` and log the result.
3. Use a `for...in` loop to log each key and its value in the format:
   - `"athletics100Men: Usain Bolt"`

---

### 🧩 Task 9 – Library, Users, and Books (Mini Project)

We’ll model the **Public Library** example from the reading.

1. Create a `user` object with:
   - `id` (number)
   - `name` (string)
   - `books` (array, start as empty: `[]`)

2. Create two `book` objects with:
   - `title`
   - `author`
   - `isbn`
   - `category`

3. Add both books into `user.books`.

4. Create a `library` array and add the `user` object to it.

5. Log:
   - the full `library`
   - `library[0].name`
   - the titles of all books that the first user has.

Hint:

```js
for (let i = 0; i < library[0].books.length; i++) {
  console.log(library[0].books[i].title);
}
```

---

## 🚀 Stretch Goals (Optional)

- Add another user with different books to the `library` array.
- Write a function `printLibrary(library)` that prints each user and the titles of their books.
- Use `for...in` or `Object.keys` inside `printLibrary` to dynamically print properties of each book.

---

## 🎟 Exit Ticket

Answer briefly:

1. What is a **key–value pair** in your own words?
2. When do you need to use **bracket notation** instead of dot notation?
3. Why might you want to use `Object.keys` or `Object.values` on a large object?

---

## ✅ Submission Checklist

- [ ] All TODOs in `Lab3_1_JSObjects.js` are completed or attempted.
- [ ] Your code runs without syntax errors.
- [ ] You used both **dot** and **bracket** notation at least once.
- [ ] You used `in`, `delete`, and at least one of `Object.keys`, `Object.values`, or `for...in`.
- [ ] All required worksheets in the `worksheets/` folder are completed.
- [ ] Exit ticket questions are answered.

