# Lab 8.3 – JS Testing & Jasmine

🎯 **Goal:** Learn how to write and run automated tests with Jasmine, and practice basic TDD
(Test-Driven Development) using small pure functions like `greeting`, `sum`, and `avg`.

This lab follows the examples in the **8.3 JS | Testing & Jasmine** lesson.

---

## 🎯 Learning Goals

By the end of this lab, I can:

- Explain what software testing is and why it matters for my apps.
- Describe the parts of a Jasmine test: suite (`describe`), spec (`it`), and expectation (`expect` + matcher).
- Write simple unit tests for pure functions.
- Use a TDD loop (red → green → refactor) to implement a function from specs.

---

## 📖 Pre-Lab Reading & Worksheets

Before editing any code, complete:

1. **Read** the PDF: `_8.3 JS Testing and Jasmine.pdf_`  
2. **Complete the worksheets in this folder:**
   - `Worksheets/GuidedPractice.md`
   - `Worksheets/VocabularyWorksheet.md`
   - `Worksheets/PseudocodePractice.md`
   - `Worksheets/MiniFRQ_Practice.md`

These review: what testing is, unit tests, TDD, Jasmine structure, and common matchers. fileciteturn11file0

---

## 🧰 Setup

1. Open this lab folder in VS Code.  
2. Use a local web server (or VS Code Live Server) to open `SpecRunner.html` in the browser.  
3. Keep the **SpecRunner** tab open; it will show which tests are passing/failing.  
4. Work in:

```text
src/greeting.js
src/calc.js
spec/greeting.spec.js
spec/calc.spec.js
```

Only edit the sections marked with `TODO` and the reflection comments.

---

## 📝 Tasks Overview

1. **Greeting test + implementation**  
   - Recreate the greeting spec so that `greeting()` must return `"Hello Ironhackers!"`.  
   - Implement `greeting()` in `src/greeting.js`.

2. **sum(): TDD loop**  
   - Complete each spec in `spec/calc.spec.js` for `sum()`:
     - `sum` is a function  
     - `sum([]) === 0`  
     - `sum()` with no argument throws `Error("No parameter provided")`  
     - `sum([...])` always returns a number  
     - `sum([...])` returns the correct total for different test arrays  
   - Then, implement `sum(array)` in `src/calc.js` to make all tests pass.

3. **avg(): check for understanding**  
   - Add specs for `avg()` based on the lesson’s “Check for understanding”.  
   - Implement `avg(array)` so that all your tests pass.

4. **Refactor step (optional)**  
   - Once everything is green, look for any small cleanups you can make without breaking tests.

---

## 🎟 Exit Ticket (Turn in with your lab)

Answer in a comment at the bottom of one of your spec files **or** in your notebook:

1. In your own words, what is the TDD mantra “red → green → refactor”?  
2. How did writing tests change the way you thought about the `sum` and `avg` functions?  
3. Where could automated tests save you time on a bigger project?

---

## ✅ Submission Checklist

- [ ] I read the 8.3 Testing & Jasmine lesson and completed all worksheets.  
- [ ] My greeting, sum, and avg specs are written and passing in Jasmine.  
- [ ] I can explain what `describe`, `it`, `expect`, and “matcher” mean in plain English.  
- [ ] I completed the Exit Ticket questions thoughtfully.  
- [ ] I committed and pushed my work with clear messages and opened a PR.
