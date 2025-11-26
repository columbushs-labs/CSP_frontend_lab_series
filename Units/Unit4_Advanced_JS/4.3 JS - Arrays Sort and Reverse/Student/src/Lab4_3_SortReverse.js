/* ===========================================================
   Lab 4.3 – JS Arrays: sort() & reverse()
   Practice sorting and reversing arrays using custom compare functions.
   =========================================================== */

// 👇 Task 1: Sorting numbers (ascending)
// 1. Open the console (Right-click → Inspect → Console).
// 2. Use .sort() with a compare function so the numbers are in ascending order.
// 3. Log the result.

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
console.log("Original numbers:", numbers);

// TODO: sort numbers from smallest to largest using a compare function
// numbers.sort(/* your compare function here */);

// TODO: log the sorted array
// console.log("Sorted numbers (ASC):", numbers);


// 👇 Task 2: Sorting numbers (descending)
// Hint: you can reuse your compare function logic, but flip it.

// TODO: create a copy of the array before sorting so you don't lose the ASC order
// const numbersDesc = [...numbers];

// TODO: sort numbersDesc from largest to smallest

// TODO: log the sorted array
// console.log("Sorted numbers (DESC):", numbersDesc);


// 👇 Task 3: Sorting strings alphabetically
// NOTE: The default .sort() already uses string Unicode order

const words = ["Hello", "Goodbye", "AA", "First", "A", "a", "Second", "b", "Third"];
console.log("Original words:", words);

// TODO: use .sort() to sort the words in ascending alphabetical order
// const wordsAsc = /* your code here */;

// TODO: log the result
// console.log("Words (ASC):", wordsAsc);


// 👇 Task 4: Sorting strings by length (DESC)
// Example goal: longest word first, shortest word last.

const wordsByLength = ["b", "a", "Third", "Second", "Hello", "Goodbye", "First", "AA", "A"];

// TODO: write a compare function that uses .length to sort from longest → shortest
// wordsByLength.sort(/* your compare function here */);

// TODO: log the result
// console.log("Words by length (DESC):", wordsByLength);


// 👇 Task 5: reverse()
// 1. Create a small array of at least 5 movie titles.
// 2. Sort them alphabetically.
// 3. Then use .reverse() to flip the order and log both versions.

// const movies = [/* your movie titles here */];

// TODO: sort movies (default string .sort())

// TODO: log the sorted array

// TODO: call .reverse() on movies

// TODO: log the reversed array and explain in a comment what "in place" means.
