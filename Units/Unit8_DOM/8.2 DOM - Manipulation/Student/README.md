# Lab 8.2 – DOM Manipulation

🎯 **Goal:** Practice creating, changing, and removing DOM elements, attributes, and events to make a page
dynamic and interactive. This lab follows the same flow as the 8.2 DOM Manipulation lesson.

---

## 🎯 Learning Goals

By the end of this lab, I can:

- Get and change attributes on elements using `getAttribute`, `setAttribute`, and `removeAttribute`.
- Create new elements and text nodes using `createElement` and `createTextNode` and insert them with `appendChild` and `insertBefore`.
- Remove elements using `removeChild` and clear content using `innerHTML`.
- Attach events to elements and use `event.currentTarget` inside event handlers.

---

## 📖 Pre-Lab Reading & Worksheets

Before editing any code, complete:

1. **Read** the PDF: `_8.2 DOM Manipulation.pdf_`  
2. **Complete the worksheets in this folder:**
   - `Worksheets/GuidedPractice.md`
   - `Worksheets/VocabularyWorksheet.md`
   - `Worksheets/PseudocodePractice.md`
   - `Worksheets/MiniFRQ_Practice.md`

These review the DOM manipulation methods, attribute operations, and event patterns you’ll use here.

---

## 🧰 Setup

1. Open this lab folder in VS Code.  
2. Open `src/index.html` in Chrome.  
3. Open DevTools → **Console**.  
4. Work in:

```text
src/Lab8_2_DOMManipulation.js
```

Only edit the sections marked with `TODO` and the reflection comments.

---

## 📝 Tasks Overview

- **Task 1:** Use `getAttribute`, `setAttribute`, and `removeAttribute` to update the question and link.  
- **Task 2:** Use `createElement` and `createTextNode` to add new headings and paragraphs to the page.  
- **Task 3:** Insert a temporary input before the button using `insertBefore`, then remove it with `removeChild`.  
- **Task 4:** Add items to a list and clear it using `innerHTML`.  
- **Task 5:** Use an input + button to add new guests to a list when clicked.  
- **Task 6:** Attach click events to list items and remove the clicked element using `event.currentTarget`.

Run your JS, watch the page update, and keep the Console open to see logs and errors.

---

## 🚀 Stretch Ideas (Optional)

- Add a “Clear guests” button that removes all items from `#item-list`.  
- Add a “Undo last removal” feature for the friend list using an array as history.  
- Count and display how many guests are currently in the list.

---

## 🎟 Exit Ticket (Turn in with your lab)

Answer in a comment at the bottom of your JS file **or** in your notebook:

1. Which DOM method did you use the most in this lab, and why?  
2. What is one situation where `innerHTML = ""` is useful, and one where it might be risky?  
3. Describe a real-world feature (comment section, notifications, etc.) that would require creating and removing DOM nodes.

---

## ✅ Submission Checklist

- [ ] I read the 8.2 PDF and completed all four worksheet files.  
- [ ] I implemented Tasks 1–6 in `Lab8_2_DOMManipulation.js`.  
- [ ] My page responds to clicks by updating the DOM (adding/removing guests and friends).  
- [ ] I completed the Exit Ticket questions thoughtfully.  
- [ ] I committed and pushed my work with clear messages and opened a PR.
