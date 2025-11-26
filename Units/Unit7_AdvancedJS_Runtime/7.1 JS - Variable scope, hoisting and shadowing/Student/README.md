# Lab 7.1 – Variable Scope, Hoisting & Shadowing

🎯 **Goal:** Explore how variable scope works in JavaScript (global, function, and block), how `var` vs `let`/`const`
behave differently, what hoisting does, and how shadowing can affect your code.

---

## 🎯 Learning Goals

By the end of this lab, I can:

- Explain the difference between **global**, **function**, and **block** scope in JavaScript.
- Describe how `var`, `let`, and `const` differ in terms of scope, re-declaration, and updates.
- Explain what **hoisting** is, including why `var` logs `undefined` and `let`/`const` produce a ReferenceError.
- Recognize and explain **variable shadowing** and the idea of the **temporal dead zone**.

---

## 📖 Pre-Lab Reading & Worksheets

Before editing any code, complete these steps:

1. **Read** the PDF: `_7.1 JS Variable scope, hoisting and shadowing.pdf_`
2. **Complete the worksheets in this folder:**
   - `Worksheets/GuidedPractice.md`
   - `Worksheets/VocabularyWorksheet.md`
   - `Worksheets/PseudocodePractice.md`
   - `Worksheets/MiniFRQ_Practice.md`

---

## 🧰 Setup

1. Open this lab folder in VS Code.  
2. Open `src/index.html` in Chrome.  
3. Open DevTools → **Console**.  
4. Work in:

```text
src/Lab7_1_VariableScopeHoistingShadowing.js
```

Only edit the `TODO` sections and reflection comments.

---

## 📝 Tasks

1. **Global vs function scope**  
2. **Block scope with if/for** (`var` vs `let`)  
3. **Hoisting experiments** (var vs let + TDZ)  
4. **Shadowing** with `outer` / `shadowExample`  
5. **Combined snippet** using all three kinds of scope

---

## 🚀 Stretch Goals

- Refactor a `var`-heavy snippet to `let`/`const`
- Draw a scope lookup diagram
- Add `"use strict";` and observe changes

---

## 🎟 Exit Ticket

Answer (in JS comments or notebook):

1. What is hoisting, and how does it differ for `var` vs `let`/`const`?  
2. Why is `let` often safer than `var` in loops and conditionals?  
3. One helpful and one dangerous example of shadowing.

---

## ✅ Submission Checklist

- [ ] Read 7.1 PDF  
- [ ] Completed all worksheets  
- [ ] Hoisting experiments tested and re-commented  
- [ ] Exit Ticket answered  
- [ ] PR opened with clear commit message
