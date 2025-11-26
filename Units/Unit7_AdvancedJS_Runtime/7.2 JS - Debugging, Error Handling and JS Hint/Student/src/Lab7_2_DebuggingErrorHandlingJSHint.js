/* ===========================================================
   Lab 7.2 – Debugging, Error Handling & JSHint
   Broken calculator app: use DevTools, console, and try/catch to find & fix bugs.
   =========================================================== */

// 🚨 IMPORTANT:
// This file is intentionally broken. Your job is to:
// - Reproduce the errors in the browser
// - Read the error messages in the console
// - Use breakpoints and Watch expressions in DevTools
// - Add try/catch and custom errors where appropriate
// - Fix the bugs step by step
//
// Do NOT start by randomly editing everything. Start by running it, reading the errors,
// and tracing through the execution like in the 7.2 lesson examples.

console.log("🔍 Lab 7.2 loaded. Open DevTools and start debugging!");

// ❌ Bug #1: ReferenceError (wrong variable name)
function getInputs() {
  const aInput = document.getElementById("valueA");
  const bInput = document.getElementById("valueB");

  // TODO: Fix the bug that causes a ReferenceError here.
  // Hint: check the variable names carefully.
  const a = aInpt.value; // <-- typo on purpose
  const b = bInput.valu; // <-- typo on purpose

  return { a, b };
}

// ❌ Bug #2: TypeError / NaN issues & missing validation
function addValues() {
  const inputs = getInputs();
  // TODO: Why might Number(...) still return NaN here?
  // Add validation so that if inputs are not valid numbers, you throw an Error
  // with a helpful message instead of silently producing NaN.
  const sum = Number(inputs.a) + Number(inputs.b);
  displayResult("Sum is: " + sum);
}

// ❌ Bug #3: Logic + division by zero
function divideValues() {
  const inputs = getInputs();
  const a = Number(inputs.a);
  const b = Number(inputs.b);

  // TODO: Add error handling so that dividing by zero (b === 0)
  // throws an Error with a clear message instead of returning Infinity.
  const result = a / b;
  displayResult("Result is: " + result);
}

// ❌ Bug #4: displayResult sometimes crashes
// Hint: What if #result doesn't exist, or textContent is not a function?
function displayResult(message) {
  const resultElement = document.getElementID("result"); // <-- typo on purpose
  resultElement.textContents = message; // <-- typo on purpose
}

// ❌ Bug #5: Event listener hookup
// Some of these event listeners are broken on purpose. Fix them using DevTools
// and by checking the console for errors.
function setupEvents() {
  const addButton = document.querySelector("#addBtn");
  const divideButton = document.querySelector("#divideBtn");

  // TODO: Fix the issues that cause these to fail sometimes.
  addButton.addEventListener("clik", function () { // <-- typo on purpose
    // TODO: Wrap this call in a try/catch and log a helpful error message if something goes wrong.
    addValues();
  });

  divideButton.addEventListener("click", function () {
    // TODO: Also wrap this in try/catch and handle errors.
    divideValues();
  });
}

// ❌ Bug #6: setupEvents might never run in some browsers
// Hint: Which event should we listen for on window or document?
document.addEventListener("DOMContentLoadedd", function () { // <-- typo on purpose
  console.log("Setting up events...");
  setupEvents();
});

// 🧪 Task: Custom error type (stretch goal)
// 1. Create a custom Error subclass (e.g., InputError) for invalid inputs.
// 2. Throw it when the user types something that is not a number.
// 3. Catch it in your event listeners and show a friendly message in #result
//    instead of a scary stack trace in the console.

// 🧠 Reflection (comment only)
/*
1. Which bug took you the longest to fix and why?
2. How did DevTools (console, breakpoints, Watch) help you find the problem?
3. Give one concrete way you could use try/catch to make a real app more user-friendly.
4. After running this file through JSHint, what warnings or suggestions did you see?
*/
