# Lab 3.1 – JavaScript Objects

## 🎯 Learning Goals
By the end of this lab, I can…
- explain **key → value** relationships in objects
- create objects using **object literal syntax**
- access properties using **dot** and **bracket** notation
- add, update, and delete properties in an object
- list keys/values and iterate through an object’s properties

## 📖 Pre‑Lab Reading
- Read: `3_1_JS_Objects.pdf`
- While reading, highlight:
  - when bracket notation is required
  - how to add/update/delete properties
  - one example you could reuse in a real app

## 🧰 Setup
1. Open the `src/` folder.
2. Open `index.html` in Chrome.
3. Open DevTools → **Console**.
4. Edit only: `src/Lab3_1_JSObjects.js`
5. Refresh the page to re-run your code.

## 📝 Tasks
### Part A — Object Basics
1. Create a `student` object with **3 properties** (string, number, boolean).
2. Log the entire object.
3. Log each property using **dot** and **bracket** notation.
4. Add a new property using **bracket** notation only.

### Part B — Brackets When Keys Are Variables
5. Use a variable key (given in the file) to access a property correctly.
6. Create a property with a space in the key (example: `"best class"`) and access it.

### Part C — Update, Delete, and Check Existence
7. Update one value in your object and show **before/after**.
8. Use the `in` operator to test whether a property exists.
9. Delete a property and verify it’s gone.

### Part D — Listing + Iteration
10. Create an `olympicRecords` object with at least **3 properties**.
11. Log `Object.keys(...)` and `Object.values(...)`.
12. Use a `for...in` loop to print `key -> value`.

### Part E — Mini Project: Library Registry
13. Build the mini library system in the JS file using the iteration steps.
14. **Bonus:** Print a clean summary using loops (no hardcoding).

## 🚀 Stretch Goals
- Add a **second user** to the library and print both summaries.
- Add a `checkedOutDate` to each book and include it in the output.
- Use `Object.keys()` to print all properties of a book object.

## 🎟 Exit Ticket
Answer the Exit Ticket questions at the bottom of your JS file.

## ✅ Submission Checklist
- [ ] My JS file runs with no errors
- [ ] I used both dot and bracket notation correctly
- [ ] I used `in`, `delete`, and `for...in`
- [ ] I completed the Library Registry mini project
- [ ] I answered the Exit Ticket

## 🧠 Review
- Quizlet: (teacher will share link)
