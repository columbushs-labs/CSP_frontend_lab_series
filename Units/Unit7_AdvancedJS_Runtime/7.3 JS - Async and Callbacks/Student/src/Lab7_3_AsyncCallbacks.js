/* ===========================================================
   Lab 7.3 – Async & Callbacks
   Practice async behavior using setTimeout, setInterval, and callbacks.
   Mirrors the examples from the lesson: async vs sync, fake file read, callback chains,
   and timers (count up / count down).
   =========================================================== */

console.log("🔁 Lab 7.3 loaded. Open DevTools → Console and run the functions below.");
console.log("Follow the TODO comments step by step. Do NOT delete everything.");


// 🧪 Task 1: Sync vs Async

// 1a. Create a normal (synchronous) function called normalGreeting that logs:
//     "Normal greeting: Hello, Ironhacker!"
// 1b. Create an async-style function called asyncGreeting that uses setTimeout
//     with a delay of 1000 ms to log:
//     "Async greeting: Hello (after 1 second)!"
// 1c. Call both functions and observe the order in the console.
// 1d. In comments, explain why the async message appears later.
//
// TODO: implement normalGreeting and asyncGreeting, then call them.


// 🧪 Task 2: Fake file read with a callback

// You will simulate reading a file from disk using setTimeout.
// 2a. Create a function readFakeFile(filePath, callback) that:
//     - Logs "Reading file from: <filePath> ..."
//     - Uses setTimeout with a delay of 1500 ms.
//     - Inside setTimeout, creates a fake content string like:
//       "This is the content of " + filePath
//     - Calls the callback with that content: callback(fakeContent)
//
// 2b. Call readFakeFile("my-notes.txt", <someCallback>) and in the callback:
//     - Log "File content received: ..." with the content.
// 2c. Add a comment explaining why the callback does NOT run immediately.
//
// TODO: implement readFakeFile and a callback that logs the content.


// 🧪 Task 3: Callback chain (processing async result)
//
// 3a. Create a function toUpperCaseAsync(text, callback) that uses setTimeout (500 ms)
//     to convert text.toUpperCase() and pass it to callback.
// 3b. Chain it after readFakeFile, so that:
//     - You read the fake file
//     - Then convert its content to uppercase
//     - Then log: "UPPERCASE CONTENT: ..."
//
// TODO: implement toUpperCaseAsync and chain it with readFakeFile.


// ⏱️ Task 4: Count-up timer with setTimeout
//
// 4a. Create a function startCountUp(limit) that:
//     - Starts at 1 and logs "Count: 1", "Count: 2", ... up to the given limit.
//     - Uses setTimeout recursively (or a helper function) with a 1000 ms delay between logs.
// 4b. At the end, log "Done counting up!"
// 4c. Test it by calling startCountUp(5).
//
// TODO: implement startCountUp(limit).


// ⏲️ Task 5: Countdown with setInterval + clearInterval
//
// 5a. Create a function startCountdown(seconds) that:
//     - Logs the current seconds remaining every 1000 ms using setInterval.
//     - When it reaches 0, logs "🎉 Countdown finished!" and clears the interval.
// 5b. Make sure it doesn't keep going into negative numbers.
// 5c. Test it with startCountdown(5).
//
// TODO: implement startCountdown(seconds).


// 🧠 Task 6: Timing bug exploration
//
// 6a. Write a function showAsyncResult() that:
//     - Uses setTimeout to set a variable result = 42 after 1000 ms.
//     - Immediately logs "Result right now:", result (before the timeout fires).
//     - Inside setTimeout, log "Result inside timeout:", result.
// 6b. Run showAsyncResult() and observe the console output.
// 6c. In comments, explain why result is undefined (or not what you expect)
//     outside the timeout, and how callbacks help solve this.
//
// TODO: implement showAsyncResult() and add your explanation in comments.


// 📝 Reflection (comment only)
/*
1. In your own words, what is a callback? How is it different from just calling a function directly?
2. Why does JavaScript sometimes finish other work before calling your callback from setTimeout/setInterval?
3. Describe one real-world feature (in a website or app) that probably uses callbacks and timers.
4. How did working with count-up and countdown timers change the way you think about "time" in code?
*/
