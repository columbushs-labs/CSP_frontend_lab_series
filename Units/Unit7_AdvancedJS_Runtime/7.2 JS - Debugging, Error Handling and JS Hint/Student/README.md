# Lab 7.2 – Debugging, Error Handling & JSHint

🎯 **Goal:** Use DevTools (console, Sources, breakpoints), error messages, and try/catch to track down and fix bugs
in a small calculator app, then run your code through **JSHint** to improve its quality.

---

## 🎯 Learning Goals

By the end of this lab, I can:

- Use **DevTools** (console, Sources tab, breakpoints, Watch) to debug a broken app.
- Read and interpret common JavaScript errors (ReferenceError, TypeError, SyntaxError, etc.).
- Add **try/catch** and throw custom `Error` objects to handle invalid input.
- Run my code through **JSHint** (or a similar linter) and respond to warnings.

---

## 📖 Pre-Lab Reading & Worksheets

Before editing any code, complete these steps:

1. **Read** the PDF: `_7.2 JS Debugging, Error Handling and JS Hint.pdf_`  
2. **Complete the worksheets in this folder:**
   - `Worksheets/GuidedPractice.md`
   - `Worksheets/VocabularyWorksheet.md`
   - `Worksheets/PseudocodePractice.md`
   - `Worksheets/MiniFRQ_Practice.md`

These will review the debugging strategies and error types you’ll need in the lab.

---

## 🧰 Setup

1. Open this lab folder in VS Code.  
2. Open `src/index.html` in Chrome.  
3. Open DevTools → **Console** and **Sources**.  
4. Work in:

```text
src/Lab7_2_DebuggingErrorHandlingJSHint.js
```

> ✅ The file is intentionally broken. Do **not** delete everything.  
> Use the console and DevTools to understand each bug, then fix it one piece at a time.

---

## 📝 Tasks

Inside `Lab7_2_DebuggingErrorHandlingJSHint.js`:

1. **Bug Hunt – getInputs**  
   - Reproduce the first error and use the console to see the exact message and line number.  
   - Fix the typos that cause the ReferenceError in `getInputs()`.

2. **Bug Hunt – addValues (NaN + validation)**  
   - Use breakpoints to inspect what values are being passed into `Number(...)`.  
   - Add validation: if either input is missing / not a number, throw an `Error` with a friendly message.

3. **Bug Hunt – divideValues (division by zero)**  
   - Add a check for `b === 0`.  
   - Throw an `Error` with a helpful message instead of returning Infinity.

4. **Bug Hunt – displayResult**  
   - Fix the typos that cause the function to crash.  
   - Add a defensive check in case `#result` is missing from the DOM.

5. **Bug Hunt – Events & DOMContentLoaded**  
   - Fix the event names / typos in `setupEvents()` and the `DOMContentLoaded` listener.  
   - Wrap calls to `addValues()` and `divideValues()` in **try/catch** and use a helper to show errors in the UI.

6. **Stretch: Custom Error type** (Optional)  
   - Create a custom error type or clearly distinguish input errors from internal bugs.  
   - Make the user-facing messages in `#result` friendly and clear.

7. **Linting with JSHint**  
   - Run your final JS file through **JSHint** (online or VS Code extension).  
   - Fix at least 2 stylistic or warning issues it reports.  
   - Add a comment at the bottom summarizing what JSHint helped you improve.

---

## 🚀 Stretch Goals (Optional)

- Add a **Clear** button that resets both inputs and the result.  
- Add one more operator (multiply or subtract) and wire up the debugging pattern for that button too.  
- Intentionally introduce a small bug and write a short note for a partner to debug it using your error-handling pattern.

---

## 🎟 Exit Ticket (Turn in with your lab)

Answer in a comment at the bottom of your JS file **or** in your notebook:

1. Which bug took you the longest to track down, and what finally helped you find it?  
2. How did using breakpoints and the Watch panel change the way you debug compared to only using `console.log`?  
3. What is one habit you want to keep using in future projects (e.g., small commits, reading error messages slowly,
   using try/catch around risky code, etc.)?

---

## ✅ Submission Checklist

- [ ] I read the 7.2 PDF and completed all worksheet files in the `Worksheets` folder.  
- [ ] I reproduced and fixed all major bugs in the calculator (getInputs, addValues, divideValues, displayResult, events).  
- [ ] I wrapped risky code in try/catch and show friendly error messages in the UI.  
- [ ] I ran my JS file through JSHint and responded to at least 2 warnings.  
- [ ] I completed the Exit Ticket questions thoughtfully.  
- [ ] I committed and pushed my work with clear messages and opened a PR.
