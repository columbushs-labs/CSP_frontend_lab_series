# Lab 4.3 – JS Arrays: sort() & reverse()

🎯 **Goal:** Practice using `.sort()` with compare functions and `.reverse()` to manipulate arrays of numbers and strings.

---

## 🎯 Learning Goals

By the end of this lab, I can:

- Use `.sort()` with a compare function to sort numbers in ascending and descending order.
- Use `.sort()` with and without a compare function to sort strings.
- Write custom compare functions that sort by different criteria (like length).
- Use `.reverse()` to reverse an array **in place** and explain what that means.

> 📖 This lab is based on the lesson **“JS | Arrays – Sort & Reverse”** (see attached PDF). Read through the examples first. 

---

## 📖 Pre-Lab Reading & Worksheets

Before you touch the code, complete the following in order:

1. **Read** the PDF: `_4.3 JS Arrays Sort and Reverse.pdf_` (focus on the examples for numbers vs. strings, and the compare function).  
2. **Complete the worksheets (paper or digital):**
   - `Worksheets/GuidedPractice.md` – warm-up questions on `.sort()` & `.reverse()`
   - `Worksheets/VocabularyWorksheet.md` – key terms from the lesson
   - `Worksheets/PseudocodePractice.md` – plan the algorithms before you code
   - `Worksheets/MiniFRQ_Practice.md` – AP-style short question using arrays

These worksheets are designed to scaffold your understanding **before** you start the coding portion of the lab.

---

## 🧰 Setup

1. Make sure you are inside this lab folder in VS Code.  
2. Open `src/index.html` in your browser (Chrome recommended).
3. Open DevTools → **Console** tab to see the output.
4. Write your solutions in:  

```text
src/Lab4_3_SortReverse.js
```

> ✅ Do **not** rename files. Only edit the sections marked with `TODO` comments.

---

## 📝 Tasks

Work through each task in order inside `Lab4_3_SortReverse.js`:

1. **Sort numbers (ASC)**  
   - Use `.sort()` with a compare function to sort the given number array from smallest to largest.
   - Log the result and confirm it matches your expectation.

2. **Sort numbers (DESC)**  
   - Copy the sorted array to a new variable and sort it from largest to smallest.
   - Log the result and compare it to the ascending version.

3. **Sort strings alphabetically**  
   - Use `.sort()` with the default behavior to sort an array of words.
   - Observe how uppercase and lowercase letters are treated.

4. **Sort strings by length (DESC)**  
   - Write a custom compare function that uses `.length` to sort from longest word to shortest.

5. **Use `.reverse()` with your own data**  
   - Create an array of movie titles.
   - Sort them alphabetically, then call `.reverse()`.
   - Log both versions and explain, in a code comment, what it means that `.reverse()` acts **“in place.”**

As you complete each task, run your code and check the console for errors or incorrect output.

---

## 🚀 Stretch Goals (Optional)

Try any of these if you finish early:

- Sort an array of **objects**, like `{ title: "Inception", rating: 9.3 }`, first by rating (DESC) and then by title (ASC).
- Create a function `sortNumbersAsc(array)` and `sortNumbersDesc(array)` that each return a **new** sorted array instead of mutating the original.
- Research at least one sorting algorithm (like bubble sort or merge sort) and write a 2–3 sentence summary in a comment.

---

## 🎟 Exit Ticket (Turn in with your lab)

Answer in a separate section at the bottom of your JS file **or** in your notebook:

1. When sorting numbers, why do we usually need to pass a compare function into `.sort()`?
2. What does it mean that `.reverse()` mutates the array “in place”?
3. Describe one situation in a real app or website where custom sorting might be useful.

---

## ✅ Submission Checklist

Before you submit your Pull Request, double-check:

- [ ] I completed all four worksheet files in the `Worksheets` folder.
- [ ] My code runs without syntax errors in the browser console.
- [ ] I used `.sort()` with compare functions where needed (not just the default behavior for numbers).
- [ ] I answered all three Exit Ticket questions.
- [ ] I committed and pushed my work to GitHub with clear commit messages.

---

## 🧠 Review

Use this Quizlet set to review the key vocabulary and concepts from this lab:

- _Quizlet link will be provided by your teacher._
