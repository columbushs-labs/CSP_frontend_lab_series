# Lab 7.3 – Async & Callbacks

🎯 **Goal:** Understand how JavaScript handles asynchronous actions using `setTimeout`, `setInterval`, and
callbacks. Practice writing and reading callback-based code, and see how timing affects when code runs.

---

## 🎯 Learning Goals

By the end of this lab, I can:

- Explain the difference between synchronous and asynchronous code in JavaScript.
- Use `setTimeout` and `setInterval` to schedule code to run in the future.
- Write and use functions that accept **callbacks** to handle async results.
- Reason about timing bugs where values are not available yet.

---

## 📖 Pre-Lab Reading & Worksheets

Before editing any code, complete these steps:

1. **Read** the PDF: `_7.3 JS Async and Callbacks.pdf_`
2. **Complete the worksheets in this folder:**
   - `Worksheets/GuidedPractice.md`
   - `Worksheets/VocabularyWorksheet.md`
   - `Worksheets/PseudocodePractice.md`
   - `Worksheets/MiniFRQ_Practice.md`

These will review the async and callback concepts you’ll apply in the console exercises.

---

## 🧰 Setup

1. Open this lab folder in VS Code.  
2. Open `src/index.html` in Chrome.  
3. Open DevTools → **Console**.  
4. Work in:

```text
src/Lab7_3_AsyncCallbacks.js
```

> ✅ Only edit the sections marked with `TODO` and the reflection comments.

---

## 📝 Tasks

Inside `Lab7_3_AsyncCallbacks.js`, complete:

1. **Sync vs Async** – Create `normalGreeting` and `asyncGreeting` using `setTimeout` and explain the order of logs.
2. **Fake File Read** – Implement `readFakeFile(filePath, callback)` that uses `setTimeout` and passes content to a callback.
3. **Callback Chain** – Add `toUpperCaseAsync(text, callback)` and chain it so you transform the fake file content.
4. **Count-Up Timer** – Implement `startCountUp(limit)` using recursive `setTimeout` calls.
5. **Countdown Timer** – Implement `startCountdown(seconds)` using `setInterval` + `clearInterval`.
6. **Timing Bug Exploration** – Implement `showAsyncResult()` and explain why the result is not ready outside the timeout.

Read the console carefully as you work; the order of logs is the main “output” of this lab.

---

## 🚀 Stretch Goals (Optional)

- Modify `startCountdown` to accept a callback that runs when the countdown finishes.
- Add a `cancelCountdown()` function that stops the current countdown early.
- Build a simple “Pomodoro” timer using the same patterns.

---

## 🎟 Exit Ticket (Turn in with your lab)

Answer in a comment at the bottom of your JS file **or** in your notebook:

1. In your own words, what problem do callbacks solve in asynchronous code?  
2. Where did you see that “JavaScript kept going” before your callback ran? Give one concrete example from this lab.  
3. How might these async patterns show up in a real web app (APIs, animations, notifications, etc.)?

---

## ✅ Submission Checklist

- [ ] I read the 7.3 PDF and completed all worksheet files in the `Worksheets` folder.  
- [ ] I implemented and tested all async tasks (1–6) in `Lab7_3_AsyncCallbacks.js`.  
- [ ] I can explain at least one timing bug and how callbacks help fix it.  
- [ ] I completed the Exit Ticket questions thoughtfully.  
- [ ] I committed and pushed my work with clear messages and opened a PR.
