/* ===========================================================
   Lab 4.4 – Value vs Reference & Mutable Data Types
   Explore how primitives vs. objects/arrays are copied, compared, and mutated.
   =========================================================== */

// 🔍 Task 1: Primitives are copied by value
// 1. Create two variables price1 and price2 with the same number value.
// 2. Change price1 and log both variables.
// 3. In a comment, explain what you observe.

// TODO: create price1 and price2
// let price1 = ...;
// let price2 = ...;

// TODO: change price1, then log both
// price1 = ...;
// console.log("price1:", price1);
// console.log("price2:", price2);
// Explain in a comment why price2 did NOT change.


// 🔍 Task 2: Objects/arrays are copied by reference
// 1. Create a book object with a title and author.
// 2. Create bookAlias that "copies" book using assignment (=).
// 3. Change the author through bookAlias and log both book and bookAlias.
// 4. In a comment, describe what reference means here.

// TODO: create book object and alias
// const book = { ... };
// const bookAlias = book;

// TODO: change bookAlias.author and log both objects
// bookAlias.author = ...;
// console.log("book:", book);
// console.log("bookAlias:", bookAlias);


// 🔍 Task 3: Shallow copy vs deep copy (objects)
// Use this base object:
const playlist = {
  name: "Morning Vibes",
  owner: { username: "student1" },
  songs: ["Shine", "Echo", "Wave"]
};

console.log("Original playlist:", playlist);

// 3a. Create playlistCopyShallow using Object.assign or the spread operator.
//     Then change playlist.owner.username and log both objects.
// TODO: create a shallow copy
// const playlistCopyShallow = ...;

// TODO: mutate playlist.owner.username and log both
// playlist.owner.username = "mutatedUser";
// console.log("playlist (after owner change):", playlist);
// console.log("playlistCopyShallow:", playlistCopyShallow);
// In a comment: Did the copy's owner change? Why?

// Reset the owner so the next task is easier to read:
playlist.owner.username = "student1";

// 3b. Create playlistCopyDeep using JSON.parse(JSON.stringify(playlist)).
//     Then change playlist.owner.username again and log both.
// TODO: create a deep copy
// const playlistCopyDeep = ...;

// TODO: mutate playlist.owner.username and log both
// playlist.owner.username = "deepChange";
// console.log("playlist (after deep change):", playlist);
// console.log("playlistCopyDeep:", playlistCopyDeep);
// In a comment: Did the copy's owner change this time? Why?


// 🔁 Task 4: Mutating vs non-mutating array methods
// Start with this array (do not change it directly):
const studentsOriginal = ["Ana", "John", "Fabio"];

// 4a. Create studentsMutated by copying the reference and using .push().
// TODO: point studentsMutated at the same array, then push a new name
// const studentsMutated = studentsOriginal;
// studentsMutated.push("Lilian");
// console.log("studentsOriginal (mutated):", studentsOriginal);
// console.log("studentsMutated:", studentsMutated);

// 4b. Create studentsSafe using the spread operator or .slice(), then add a new
//     student without mutating studentsOriginal.
// TODO: create a non-mutating copy and add a new student
// const studentsSafe = [...studentsOriginal]; // or studentsOriginal.slice()
// studentsSafe.push("Ariel");
// console.log("studentsOriginal (safe):", studentsOriginal);
// console.log("studentsSafe:", studentsSafe);

// In a comment, explain the difference between 4a and 4b.


// 🧩 Task 5: Removing items without mutation
// Using this array:
const tasks = ["email parents", "grade quizzes", "plan lab", "update slides"];

// 5a. Use a mutating method (like .splice()) to remove "grade quizzes".
//     Log the array afterward.
// TODO: create tasksMutated that references tasks and remove an item with splice
// const tasksMutated = tasks;
// tasksMutated.splice(1, 1);
// console.log("tasks (after splice):", tasks);
// console.log("tasksMutated:", tasksMutated);

// 5b. Create a new array tasksFiltered that does NOT mutate tasks,
//     but contains all tasks except "grade quizzes" (hint: .filter() or slice + spread).
// TODO: create tasksFiltered without changing tasks
// const tasksFiltered = tasks.filter(...);
// console.log("tasks (original, should be unchanged if you reset above):", tasks);
// console.log("tasksFiltered:", tasksFiltered);


// ⭐ Task 6 (Reflection comment)
/*
In your own words:
1. What is the difference between copying a primitive and copying an object/array?
2. Why can mutation (changing data in place) cause bugs in real apps?
3. Give one example from this lab where using a non-mutating method was safer or clearer.
*/
