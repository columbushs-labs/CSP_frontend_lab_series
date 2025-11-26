# Lab 5.2 – OOP: Class & Inheritance

🎯 **Goal:** Use JavaScript `class` syntax to create objects with a shared blueprint and practice inheritance with `extends` and `super`.

---

## 🎯 Learning Goals

By the end of this lab, I can:

- Define a class with a constructor and methods.
- Use the `new` keyword to create instance objects from a class.
- Explain what `extends` and `super` do in JavaScript classes.
- Implement simple inheritance hierarchies like `Rectangle` → `Square` and `Animal` → `Cat` / `Chameleon`.

> 📖 This lab is based on the lesson **“JS | OOP – class and inheritance”** (see attached PDF). Focus on the Monopoly `Player` class, the `Rectangle`/`Square` exercise, and the `Animal` examples. fileciteturn3file0

---

## 📖 Pre-Lab Reading & Worksheets

Before editing any code, complete these steps:

1. **Read** the PDF: `_5.2 OOP Class and Inheritance.pdf_`  
   - Pay attention to: the `Player` class example, how the constructor works, how `new` creates instances, and how `extends` / `super` are used with `Animal`, `Cat`, and `Chameleon`.
2. **Complete these worksheets in this folder:**
   - `Worksheets/GuidedPractice.md` – checks for understanding of classes, constructors, and inheritance.
   - `Worksheets/VocabularyWorksheet.md` – key OOP terms like inheritance, polymorphism, encapsulation, abstraction.
   - `Worksheets/PseudocodePractice.md` – plan small class hierarchies in plain language.
   - `Worksheets/MiniFRQ_Practice.md` – AP-style question designing a base class and a subclass.

These will scaffold your thinking so the class syntax in the lab feels more natural.

---

## 🧰 Setup

1. Open this lab folder in VS Code.  
2. Open `src/index.html` in Chrome.  
3. Open DevTools → **Console** to see the output.  
4. Do your coding in:

```text
src/Lab5_2_OOP_ClassAndInheritance.js
```

> ✅ Only edit the sections marked with `TODO` comments. Do not rename or move files.

---

## 📝 Tasks

Inside `Lab5_2_OOP_ClassAndInheritance.js`, complete:

1. **Player class refactor** – Convert the Monopoly player logic into a `Player` class with a constructor, `move()`, and `displayInfo()` methods. Create three players and simulate two turns.
2. **Rectangle & Square** – Implement `Rectangle` and `Square` using `extends` and `super`, then test perimeter and area as in the lesson.
3. **Animal inheritance** – Implement `Animal`, `Cat`, and `Chameleon` classes, including overridden constructors and extra methods like `changeColor()`.
4. **Reflection** – Answer the reflection questions in the comment block at the bottom.

Test your code often and read the console output carefully.

---

## 🚀 Stretch Goals (Optional)

- Add a `BankPlayer` class that extends `Player` and starts with more cash and a special `giveBonus(amount)` method.
- Add a `Rectangle.describe()` method that logs all measurements and call it from `Square` instances as well.
- Override `scream()` in `Cat` or `Chameleon` to customize behavior and demonstrate **polymorphism**.

---

## 🎟 Exit Ticket (Turn in with your lab)

Answer in a comment at the bottom of your JS file **or** in your notebook:

1. In your own words, how is using a **class** different from using a factory function like `createPlayer()` from 5.1?  
2. Why is inheritance (`extends`) helpful when designing related objects?  
3. Which OOP concept (inheritance, abstraction, polymorphism, encapsulation) feels clearest to you right now, and why?

---

## ✅ Submission Checklist

Before submitting your Pull Request, verify:

- [ ] I read the 5.2 PDF and completed all worksheet files in the `Worksheets` folder.
- [ ] My code runs in the console with no syntax errors.
- [ ] My classes use constructors correctly and I understand what `new` does.
- [ ] I used `extends` and `super` correctly in at least one subclass.
- [ ] I completed the Exit Ticket questions thoughtfully.
- [ ] I committed and pushed my work with clear messages and opened a PR.

---

## 🧠 Review

Use this Quizlet set to review the vocabulary and concepts from this lab:

- _Quizlet link will be provided by your teacher._
