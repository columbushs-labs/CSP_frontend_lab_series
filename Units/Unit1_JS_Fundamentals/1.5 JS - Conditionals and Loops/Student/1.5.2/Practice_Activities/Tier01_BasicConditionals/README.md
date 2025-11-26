# Tier01 BasicConditionals — If / Else Basics

🎯 **Learning Goals**
- Understand the concept and syntax shown in the examples.
- Follow step-by-step tasks to build working code.
- Test with sample inputs and read Console messages.

## 🌟 Mini‑Lesson: What & Why

- **Conditionals** let programs make decisions. If a condition is true, do one thing; otherwise do something else.
- **Syntax**:
```js
if (condition) {
  // then
} else if (another) {
  // otherwise-if
} else {
  // default
}
```
- **Tips**: Compare numbers with `>`, `<`, `>=`, `===`. For even/odd, use `%` (remainder). Normalize text with `.toLowerCase()`.

## 🧩 Try It: Step‑by‑Step Tasks

### 1) Even or Odd
**STEP 1** Prompt: `Enter a number:` → `Number(prompt(...))` → store in `n`
**STEP 2** If `Number.isNaN(n)` → print `Please enter a number.`
**STEP 3** If `n % 2 === 0` → `EVEN` else `ODD`
**STEP 4** Try 0, 5, -2

### 2) Grade Evaluator
Ask for score 0–100 → validate range → print A/B/C/D/F with chained `if/else-if/else`.

### 3) Voting Eligibility
Ask for age → if `age >= 18` → `You can vote!` else `Not eligible yet.`

### 4) Temperature Guide
Ask for Fahrenheit → if `> 90` → `Too hot!` else if `< 60` → `Too cold!` else `Just right!`

### 5) Traffic Light
Ask for color (normalize with `.toLowerCase()`) → use `if/else` or `switch` to print action; include a default case.

## 💡 Challenge
- Try modifying one task to add a small twist of your own.

## ✅ Exit Ticket
- In one sentence: What is one mistake you made today and how did you fix it?
