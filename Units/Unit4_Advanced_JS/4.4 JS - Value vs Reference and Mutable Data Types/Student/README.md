# Lab 4.4 – Value vs Reference & Mutable Data Types

🎯 **Goal:** Understand how primitives vs. objects/arrays are copied, compared, and mutated, and practice using **non-mutating** patterns with arrays and objects.

---

## 🎯 Learning Goals

By the end of this lab, I can:

- Explain the difference between copying a primitive and copying an object/array.
- Describe what it means for data to be passed or copied **by reference**.
- Distinguish between **shallow** and **deep** copies of objects and arrays.
- Use non-mutating patterns (like spread, `slice`, `concat`, `filter`, and `JSON.parse(JSON.stringify())`) to avoid side effects.

> 📖 This lab is based on the lesson **“JS | Value vs Reference and Mutable Data Types”** (see attached PDF).  Read the examples on primitives vs objects, copying objects/arrays, and the mutability tables on arrays/objects first. fileciteturn1file0

---

## 📖 Pre-Lab Reading & Worksheets

Before you write any code, complete these steps **in order**:

1. **Read** the PDF: `_4.4 JS - Value vs Reference and Mutable Data Types.pdf_`  
   - Focus on: primitives by value, objects/arrays by reference, Object.assign vs deep copy, array copying methods, and the mutability tables for arrays and objects.
2. **Complete the worksheets in this folder:**
   - `Worksheets/GuidedPractice.md` – concept checks on value vs reference and mutation.
   - `Worksheets/VocabularyWorksheet.md` – key terms like shallow copy, deep copy, spread, destructuring.
   - `Worksheets/PseudocodePractice.md` – plan safe updates to arrays/objects without mutation.
   - `Worksheets/MiniFRQ_Practice.md` – AP-style question involving immutable updates.

These worksheets scaffold the big ideas so the coding portion feels easier and more meaningful.

---

## 🧰 Setup

1. Open this lab folder in VS Code.  
2. Open `src/index.html` in your browser (Chrome recommended).  
3. Open DevTools → **Console** to view logs.  
4. Do your coding in:

```text
src/Lab4_4_ValueReferenceAndMutability.js
```

> ✅ Only edit the sections marked with `TODO` comments. Do **not** rename or move files.

---

## 📝 Tasks

Work through each task in `Lab4_4_ValueReferenceAndMutability.js`:

1. **Primitives by value** – modify one variable and observe that the copy doesn’t change.
2. **Objects/arrays by reference** – modify a property through an alias and see both change.
3. **Shallow vs deep copy** – use `Object.assign` or spread for a shallow copy, and `JSON.parse(JSON.stringify())` for a deep copy. Observe what happens when changing nested properties.
4. **Mutating vs non-mutating array operations** – compare `.push()` on a shared reference vs adding items with a copy using `slice` or spread.
5. **Removing items without mutation** – remove an item using a mutating method (`splice`) and then using a non-mutating approach (`filter` or `slice` + spread).
6. **Reflection** – answer questions in a block comment at the bottom of the file.

Run your code often and check the console to make sure each step behaves the way you expect.

---

## 🚀 Stretch Goals (Optional)

Try any of the following if you finish early:

- Write a helper function `deepClone(object)` that uses `JSON.parse(JSON.stringify(object))` and test it with a nested object.
- Given an array of nested student groups (2D array), create an **immutable** function that adds a student to a specific group without mutating the original structure.
- Research one real JavaScript library (like React or Redux) that prefers **immutable** updates and write 2–3 sentences in a comment about why.

---

## 🎟 Exit Ticket (Turn in with your lab)

Answer these questions in a comment at the bottom of your JS file **or** in your notebook:

1. In your own words, what is the difference between a **shallow copy** and a **deep copy**?
2. Why can sharing references between different parts of a program lead to bugs?
3. Give one example of a **non-mutating** pattern you used in this lab and explain why it is safer than mutating the original data.

---

## ✅ Submission Checklist

Before submitting your Pull Request, verify:

- [ ] I read the 4.4 PDF and completed all worksheet files in the `Worksheets` folder.
- [ ] My code runs in the console without syntax errors.
- [ ] I used deep copy only where necessary and can explain why it was needed.
- [ ] I answered all Exit Ticket questions thoughtfully.
- [ ] I committed and pushed my work to GitHub with clear messages, then opened a PR.

---

## 🧠 Review

Use this Quizlet set to review the vocabulary and concepts from this lab:

- _Quizlet link will be provided by your teacher._
