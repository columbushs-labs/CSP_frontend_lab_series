/* ===========================================================
   Lab 8.1 – DOM Intro & Selectors
   Visual lab: practice selecting and updating real elements on the page.
   =========================================================== */

console.log("🔍 Lab 8.1 loaded. Open DevTools → Console.");
console.log("Work through the tasks in order. Only edit the TODO sections.");


// 🧩 Task 1 – Selecting by ID

// 1a. Use document.getElementById to select the element with id "cat".
// 1b. Log it to the console to confirm you selected the right node.
// 1c. Change its innerHTML so the paragraph text says something new.
// 1d. Change at least two style properties (e.g., backgroundColor, color, borderRadius).

// TODO: write your code for Task 1 here.


// 🧩 Task 2 – Selecting by class name (HTMLCollection)

// 2a. Use document.getElementsByClassName to select all elements with class "mouse".
// 2b. Log the collection and confirm its length.
// 2c. Convert the HTMLCollection to a real array using [...collection].
// 2d. Loop through and give each mouse card a slightly different style
//     (for example, different border colors or box shadows).

// TODO: write your code for Task 2 here.


// 🧩 Task 3 – Selecting by tag name

// 3a. Use document.getElementsByTagName("div") to get all <div> elements.
// 3b. Log how many divs you have.
// 3c. Style only the even-indexed divs (0, 2, 4, ...) with a subtle background change.
//     Hint: loop with index and use i % 2 === 0.

// TODO: write your code for Task 3 here.


// 🧩 Task 4 – querySelector vs querySelectorAll

// 4a. Use document.querySelector("#title") to select the DOM Playground title.
//     - Add a small "DOM Ready" message to the end of its text.
// 4b. Use document.querySelector(".mouse.featured") to select the featured mouse card.
//     - Add a ⭐ emoji to its <h3> text.
// 4c. Use document.querySelectorAll(".color-box") to get all the color boxes.
//     - Loop through them and set their backgroundColor based on their data-color attribute.

// TODO: write your code for Task 4 here.


// 🧩 Task 5 – Changing className and id

// 5a. Select the #highlight-btn and #reset-btn buttons with querySelector.
// 5b. Add click event listeners to each button:
//     - "Highlight" button: add the class "highlighted" to ALL elements with class "card".
//     - "Reset" button: remove the "highlighted" class from all cards and restore any
//       styles you changed in previous tasks (as best you can).
// 5c. In at least one place, change the id of an element from JS and log before/after.
//     Example: rename "cat" to "main-cat".

// TODO: write your code for Task 5 here.


// 🧩 Task 6 – Mini DOM Project: Color Grid

// 6a. Using querySelectorAll, select all elements with class "color-box".
// 6b. Add a click handler so that when you click a box:
//     - It logs which data-color it represents.
//     - It adds the "highlighted" class to that box only (remove it from others).
// 6c. OPTIONAL: also update the #title text to say "Selected color: <name>".

// TODO: write your code for Task 6 here.


// 📝 Reflection (comment only)
/*
1. What is the difference between an HTMLCollection and a NodeList?
2. When would you choose getElementById vs querySelector?
3. How does changing className or classList on an element affect its styles?
4. Give one example of something on a real website that is probably updated by
   JavaScript changing the DOM.
*/
