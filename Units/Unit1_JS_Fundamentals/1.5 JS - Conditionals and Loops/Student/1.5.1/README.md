# Lab 004 – Conditionals and Loops

## 🎯 Learning Goals
- Understand what statements are and why they’re needed.
- Use `if`, `else if`, and `else` statements.
- Identify when to use `switch` instead of if..else.
- Use loops (`while`, `do..while`, `for`) for repetition.
- Apply `break` and `continue` statements inside loops.

---

## 📖 Pre-Lab Reading
- Open the included PDF: `004_JS _ Conditionals and Loops.pdf`
- Sections: Conditionals, if..else, switch, while, do..while, for, break, continue

---

## 🧰 Setup
- Run file with:
  ```bash
  node src/Lab004_ConditionalsLoops.js
  ```
- Edit only: `src/Lab004_ConditionalsLoops.js`

---

## 📝 Tasks
1. **if..else**
   - Ask the user for their age (hardcode variable for now, e.g., `let age = 15`).
   - Print:
     - `"Teen discount"` if age ≤ 16.
     - `"Senior discount"` if age ≥ 65.
     - Otherwise, `"No discount"`.

2. **Nested if**
   - Create two variables, `number1` and `number2`.
   - Print:
     - `"Numbers are equal"` if equal.
     - `"Number 1 is bigger"` if number1 > number2.
     - `"Number 1 is smaller"` otherwise.

3. **Switch**
   - Create a variable `language = "French"`.
   - Use a switch statement:
     - `"Spanish"` → `"Hola, mundo!"`
     - `"French"` → `"Bonjour tout le monde"`
     - `"English"` (or default) → `"Hello, world!"`

4. **While Loop**
   - Print numbers 1 to 10 using a `while` loop.

5. **Do..while Loop**
   - Print numbers 1 to 5 using a `do..while` loop.

6. **For Loop**
   - Print numbers 1 to 20.
   - If number is 10, print `"ten"` instead.
   - If number is 20, print `"twenty"` instead.

7. **Even/Odd with Loops**
   - Write a loop from 1 to 20.
   - Print `"X is even"` or `"X is odd"` for each number.

---

## 🚀 Stretch Goals
- Write a loop that counts backwards from 20 to 1.
- Modify the even/odd loop to skip multiples of 3 using `continue`.

---

## 🎟 Exit Ticket
Answer in 2–3 sentences each:
1. Why might `switch` be easier than many `else if` statements?
2. What’s the difference between `while` and `do..while` loops?
3. How do `break` and `continue` affect loop execution?
4. Which type of loop (`for`, `while`, `do..while`) do you prefer and why?

---

## ✅ Submission Checklist
- [ ] All TODOs completed in `src/Lab004_ConditionalsLoops.js`
- [ ] Console output runs without errors
- [ ] Exit Ticket answered in this README
- [ ] Pushed to your fork & PR created to teacher repo
