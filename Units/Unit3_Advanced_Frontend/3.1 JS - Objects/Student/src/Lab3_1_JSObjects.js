/* ===========================================================
   Lab 3.1 – JavaScript Objects
   Key-value pairs, dot/bracket access, add/update/delete,
   listing keys/values, and iterating object properties.
   =========================================================== */

console.clear();
console.log("✅ Lab 3.1 loaded");

// -----------------------------------------------------------
// Part 0 — Warm-up: Key → Value thinking
// -----------------------------------------------------------
// TODO 0A: Create an object literal named `student` with:
// - firstName (string)
// - gradeLevel (number)
// - isAthlete (boolean)
// Then console.log(student).

// TODO 0B: Access and log each property twice:
// - once with dot notation
// - once with bracket notation

// TODO 0C: Add a new property after creation called `favoriteSnack`.
// Add it using bracket notation (not dot).

// -----------------------------------------------------------
// Part 1 — Dot vs Bracket: when you MUST use brackets
// -----------------------------------------------------------
// Scenario: you have a variable that stores the key you want.
const keyToRead = "firstName";

// TODO 1A: Using `keyToRead`, access the value from `student`
// and console.log it. (Hint: dot won't work here.)

// TODO 1B: Create a property on `student` named "best class" with a string value.
// (Yes, the key has a space.) Use bracket notation.
// Then log it.

// -----------------------------------------------------------
// Part 2 — Update + Delete + "in" operator
// -----------------------------------------------------------
// TODO 2A: Update student.gradeLevel to the next grade.
// Log before and after.

// TODO 2B: Use the `in` operator to check if "isAthlete" exists.
// Log the boolean result.

// TODO 2C: Delete the property `favoriteSnack`.
// Then log the whole student object to verify.

// -----------------------------------------------------------
// Part 3 — Listing + Iterating: Object.keys / Object.values / for...in
// -----------------------------------------------------------
// TODO 3A: Create an object called `olympicRecords` with at least 3 properties
// similar to the lesson examples (athletics100Men, swimming200Men, etc.).
// Log it.

// TODO 3B: Log Object.keys(olympicRecords) and Object.values(olympicRecords)

// TODO 3C: Use a for...in loop to print each key and value like:
// athletics100Men -> Usain Bolt

// -----------------------------------------------------------
// Part 4 — Mini Project: Library Registry (Objects + Arrays)
// -----------------------------------------------------------
// Goal: model a tiny library system using objects and arrays.
// Build it in iterations like the PDF.

// Iteration 1:
// TODO 4A: Create `user` object with:
// - name (your name or a fictional one)
// - id (number)

// Iteration 2:
// TODO 4B: Create two book objects (book1, book2) with:
// - title
// - author
// - isbn (string)
// - category

// Iteration 3:
// TODO 4C: Add a `books` array onto `user` using dot notation.
// Put book1 and book2 inside.

// Iteration 4:
// TODO 4D: Create `library` as an array.
// Add `user` into `library`.

// Iteration 5:
// TODO 4E: Create a new book object `book3` (any data).
// Add it into the correct place so the user now has 3 books.
// IMPORTANT: Access it through `library` (not directly through `user`).

// Bonus:
// TODO 4F: Print a clean summary:
// Example format:
// Nick (id: 7) has 3 books:
// - Title, Author (ISBN)
// Use loops — do not hardcode the book list.

/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   2. When is bracket notation required instead of dot notation?
   3. What was the hardest bug or mistake you made today?
   4. Where could objects make code more organized in a real app?
   =========================================================== */
