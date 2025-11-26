/* ===========================================================
   Lab 8.2 – DOM Manipulation
   Create, change, and delete elements, attributes, and event handlers.
   This lab builds on the examples from the 8.2 lesson.
   =========================================================== */

console.log("🧱 Lab 8.2 loaded. Open DevTools → Console.");
console.log("Work through the tasks in order. Only edit the TODO sections.");


// 🧩 Task 1 – Attributes: get, set, and remove
// Based on the examples in the lesson (getAttribute, setAttribute, removeAttribute).
//
// 1a. Select the <a> element with id "google-link".
//     - Log its current href using getAttribute.
// 1b. Set its href to "https://www.google.com" and add target="_blank" using setAttribute.
// 1c. Select the <p> with id "paragraph".
//     - Log its id using getAttribute.
//     - Change its id to "info-paragraph" using setAttribute.
// 1d. Remove the class "link" from the anchor (use removeAttribute or classList).
//
// TODO: write your code for Task 1 here.


// 🧩 Task 2 – Creating elements & text nodes
// Based on document.createElement and document.createTextNode in the lesson.
//
// 2a. Create a new <h3> element.
//     - Set its innerHTML to "Dynamic heading created with JavaScript".
// 2b. Append this <h3> as a child of the #content section.
// 2c. Create a new <p> element and a text node with
//     "Hi there! I am using JavaScript" as its value.
//     - Append the text node into the <p>.
//     - Append the <p> into the #content section.
//
// TODO: write your code for Task 2 here.


// 🧩 Task 3 – insertBefore and removeChild
// Based on insertBefore and removeChild in the lesson.
//
// 3a. Create a new <input> element (type="text", placeholder="Temporary input").
//     Insert it BEFORE the #add-item-button inside the .controls div.
// 3b. After inserting it, remove it again using removeChild on its parent
//     (simulate a temporary element).
//
// Hint: store a reference to the parent container and the new input element,
// then call parent.insertBefore(newInput, referenceNode) and parent.removeChild(newInput).
//
// TODO: write your code for Task 3 here.


// 🧩 Task 4 – Clearing content with innerHTML
// Based on the example where innerHTML = "" clears an element.
//
// 4a. Select the #item-list <ul>.
// 4b. Add 3 sample <li> items to it using innerHTML OR createElement/appendChild.
// 4c. Then, clear the entire list by setting innerHTML to "".
// 4d. Finally, add back a single <li> that says "List reset."
//
// TODO: write your code for Task 4 here.


// 🧩 Task 5 – Events & adding items from an input
// Based on the add-item-button example and inputs section in the lesson.
//
// 5a. Select #add-item-button, #guest-name, and #item-list.
// 5b. Attach a click handler to the button that:
//     - Reads the current value of the #guest-name input.
//     - If it's not empty:
//         * Creates a new <li> with text "Guest: <name>".
//         * Appends it to #item-list.
//         * Clears the input and focuses it again.
// 5c. Make sure clicking "Add guest" with an empty input does nothing
//     (or logs a message to the console).
//
// TODO: write your code for Task 5 here.


// 🧩 Task 6 – Getting currentTarget & removing list items
// Based on the event.currentTarget example and the "Your turn" in the lesson.
//
// 6a. For every <li> inside #friend-list, attach a click handler that:
//     - Logs the clicked name to the console using event.currentTarget.innerHTML.
// 6b. Modify the handler so that instead of just logging, it removes the clicked <li>
//     from the DOM (use parent.removeChild(e.currentTarget)).
// 6c. OPTIONAL: instead of removing immediately, first toggle a "removed" class
//     on click, and only remove it if clicked again.
//
// TODO: write your code for Task 6 here.


// 📝 Reflection (comment only)
/*
1. When would you choose to use createElement/appendChild instead of innerHTML, and why?
2. Why is removeChild required to delete a node? Why can't we just "hide" everything with CSS?
3. In your own words, what does event.currentTarget represent?
4. Give one idea for a small interactive feature (outside of this lab) that would require
   creating or removing DOM elements from JavaScript.
*/
