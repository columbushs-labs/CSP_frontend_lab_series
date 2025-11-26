# Tier02 Loops — For / While / Do‑While

🎯 **Learning Goals**
- Understand the concept and syntax shown in the examples.
- Follow step-by-step tasks to build working code.
- Test with sample inputs and read Console messages.

## 🌟 Mini‑Lesson: What & Why

- **Loops** repeat actions without copying code. Use `for` when you know how many times; use `while` when you loop until a condition changes; use `do..while` to run at least once.
- **Examples**:
```js
for (let i=1; i<=3; i++) console.log(i);

let n=3; while(n>0){ console.log(n); n--; }

do { guess = prompt('...'); } while (guess !== 'yes');
```
- **Tips**: Watch for infinite loops (the condition must change). Check off-by-one (`<` vs `<=`).

## 🧩 Try It: Step‑by‑Step Tasks

### 6) Counting to 10
Make a `for` loop from 1..10 and print numbers.

### 7) Countdown Timer
Use `while` with `n--` from 10..0, then print `Liftoff!`

### 8) Multiplication Table
Ask for `base` (number). If NaN → message. Loop `i=1..10` printing `${base} x ${i} = ${base*i}`.

### 9) Sum Calculator (1..n)
Ask for positive integer `n`. Guardrail invalid. Use accumulator `sum += i`. Print final sum.

### 10) Password Attempt (do..while)
Store `SECRET = "explorers"`. Prompt until correct; optionally limit tries with a counter.

## 💡 Challenge
- Try modifying one task to add a small twist of your own.

## ✅ Exit Ticket
- In one sentence: What is one mistake you made today and how did you fix it?
