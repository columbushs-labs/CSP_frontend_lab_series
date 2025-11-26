# Lab 8.1 – DOM Intro & Selectors

🎯 **Goal:** Practice using the DOM API to select elements (`getElementById`, `getElementsByClassName`,
`getElementsByTagName`, `querySelector`, `querySelectorAll`) and then update their text, styles, and classes.

This lab uses a real HTML page so you can see your changes visually, not just in the console.

---

## 🎯 Learning Goals

By the end of this lab, I can:

- Explain what the DOM is and what `document` represents.
- Select elements using IDs, classes, tags, and CSS selectors.
- Distinguish between an **HTMLCollection** and a **NodeList**.
- Modify elements using `innerHTML`, `style`, and `classList` from JavaScript.

---

## 📖 Pre-Lab Reading & Worksheets

Before editing any code, complete:

1. **Read** the PDF: `_8.1 DOM Introduction and Selectors.pdf_`  
2. **Complete the worksheets in this folder:**
   - `Worksheets/GuidedPractice.md`
   - `Worksheets/VocabularyWorksheet.md`
   - `Worksheets/PseudocodePractice.md`
   - `Worksheets/MiniFRQ_Practice.md`

These review the DOM tree diagram, selection methods, and collection types.

---

## 🧰 Setup

1. Open this lab folder in VS Code.  
2. Open `src/index.html` in Chrome.  
3. Open DevTools → **Console**.  
4. Work in:

```text
src/Lab8_1_DOMIntroSelectors.js
```

Only edit the sections marked with `TODO` and the reflection comments.

---

## 📝 Tasks Overview

- **Task 1:** Select and restyle the `#cat` card using `getElementById`.  
- **Task 2:** Use `getElementsByClassName("mouse")` and loop to style multiple cards.  
- **Task 3:** Use `getElementsByTagName("div")` and style only some of them.  
- **Task 4:** Use `querySelector`/`querySelectorAll` for IDs, classes, and `.color-box` elements.  
- **Task 5:** Add click handlers to buttons, toggle classes, and change an element’s `id`.  
- **Task 6:** Build an interactive color grid mini-project that updates the page when boxes are clicked.

Run your JS frequently and watch the page update + console logs.

---

## 🚀 Stretch Ideas (Optional)

- Make the color boxes show their color name on hover.  
- Add a new button that randomly highlights one card.  
- Create a “dark mode” toggle that swaps a class on the `<body>` element.

---

## 🎟 Exit Ticket (Turn in with your lab)

Answer in a comment at the bottom of your JS file **or** in your notebook:

1. Which selector did you find yourself using most today, and why?  
2. What is one advantage of `querySelectorAll` over `getElementsByClassName`?  
3. Describe one idea for a mini project that uses DOM selection and class toggling.

---

## ✅ Submission Checklist

- [ ] I read the 8.1 PDF and completed all four worksheet files.  
- [ ] I implemented Tasks 1–6 in `Lab8_1_DOMIntroSelectors.js`.  
- [ ] My buttons and color boxes are interactive and clearly show DOM changes.  
- [ ] I completed the Exit Ticket questions thoughtfully.  
- [ ] I committed and pushed my work with clear messages and opened a PR.
