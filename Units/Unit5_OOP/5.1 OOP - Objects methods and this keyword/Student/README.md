# Lab 5.1 – OOP: Objects, Methods & the `this` Keyword

🎯 **Goal:** Practice creating JavaScript objects with methods and using the `this` keyword to access properties inside those methods.

---

## 🎯 Learning Goals

By the end of this lab, I can:

- Explain what an **object** is in JavaScript and why it’s useful.
- Create objects using the **object literal** pattern.
- Add **methods** to objects and use `this` inside those methods.
- Model a simple game scenario (Monopoly turns) using objects and methods.

> 📖 This lab is based on the lesson **“JS | OOP – objects, methods and the 'this' keyword”** (see attached PDF). Read the examples about the Monopoly players and the `chuck` object before coding. fileciteturn2file0

---

## 📖 Pre-Lab Reading & Worksheets

Complete these steps **before** you start editing the JS file:

1. **Read** the PDF: `_5.1 OOP - Objects methods and this keyword.pdf_`  
   - Focus on: object literals, the Monopoly example with `move()` and `displayInfo()`, and the Chuck Norris exercise.
2. **Complete the Worksheets:**
   - `Worksheets/GuidedPractice.md` – checks your understanding of objects, methods, and `this`.
   - `Worksheets/VocabularyWorksheet.md` – key OOP terms from the lesson.
   - `Worksheets/PseudocodePractice.md` – plan out behaviors (methods) in plain language before coding.
   - `Worksheets/MiniFRQ_Practice.md` – AP-style question where you design an object with methods.

These are meant to scaffold your thinking so the coding part feels like a natural next step.

---

## 🧰 Setup

1. Open this lab folder in VS Code.  
2. Open `src/index.html` in Chrome.  
3. Open DevTools → **Console** to see results.  
4. Do all your work in:

```text
src/Lab5_1_OOP_ObjectsMethodsThis.js
```

> ✅ Only edit the sections marked with `TODO` comments. Do not rename or move any files.

---

## 📝 Tasks

Inside `Lab5_1_OOP_ObjectsMethodsThis.js`, complete:

1. **Warm-up object** – Build a `teacher` object with an `introduce()` method that uses `this`.
2. **Monopoly players** – Write a `createPlayer` function that returns player objects with `move()` and `displayInfo()` methods. Simulate two turns for each player.
3. **Chuck Norris object** – Implement `getAge`, `addJoke`, and `getRandomJoke` using `this` to access data on the object.
4. **Your own object** – Design an object from your world with properties and at least two methods that use `this`.

Run your code often and check the console after each task.

---

## 🚀 Stretch Goals (Optional)

- Add a `bankrupt` boolean property to players that becomes `true` when their cash drops below 0, and keep them from moving further turns.
- Add a method `chuck.tellRandomJoke()` that both returns **and logs** a random joke.
- Create a second custom object that **interacts** with the first (for example, a `course` object with a `teacher` property that calls the teacher’s method).

---

## 🎟 Exit Ticket (Turn in with your lab)

Answer in a comment at the bottom of your JS file **or** in your notebook:

1. When we call `player1.move()`, what does `this` refer to inside `move()`?  
2. Why might it be better to write `createPlayer()` once instead of manually creating each player with copy-pasted code?  
3. Describe one bug that could happen if you accidentally mutate the wrong object because you misunderstood `this`.

---

## ✅ Submission Checklist

Before you submit your Pull Request, check that:

- [ ] I read the 5.1 PDF and completed all worksheets in the `Worksheets` folder.
- [ ] My code runs in the browser console without syntax errors.
- [ ] Each object method uses `this` correctly to access properties.
- [ ] I completed the Exit Ticket questions.
- [ ] I committed and pushed my work with clear messages and opened a PR.

---

## 🧠 Review

Use this Quizlet set to review key vocabulary and concepts from this lab:

- _Quizlet link will be provided by your teacher._
