# Tier03 Combining — Loops + Conditionals Together

🎯 **Learning Goals**
- Understand the concept and syntax shown in the examples.
- Follow step-by-step tasks to build working code.
- Test with sample inputs and read Console messages.

## 🌟 Mini‑Lesson: What & Why

- Many problems need both **loops** and **conditionals** together.
- Strategy: loop through items or numbers; inside, use `if/else` to decide what to print or store.
- Example:
```js
for (let i=1;i<=10;i++) {
  if (i % 2 === 0) console.log(i, 'even');
  else console.log(i, 'odd');
}
```

## 🧩 Try It: Step‑by‑Step Tasks

### 11) FizzBuzz (1..50)
Loop `i=1..50`. If `%15===0` → FizzBuzz; else if `%3===0` → Fizz; else if `%5===0` → Buzz; else `i`.

### 12) Number Classifier
Loop `n=1..20`. Write `isPrime(n)`; if prime → 'prime'; else if even → 'even'; else 'odd'.

### 13) Guess the Number
Pick `secret=1..10` (use random). While not correct, prompt guesses; give 'Too high/low' hints.

### 14) Star Pyramid
Nested loops: rows 1..4, build line of `*` of length `row`. Print each line.

### 15) Array Filter (>50)
`const arr=[12,65,34,99,81,50]`. Loop and print/push numbers > 50.

## 💡 Challenge
- Try modifying one task to add a small twist of your own.

## ✅ Exit Ticket
- In one sentence: What is one mistake you made today and how did you fix it?
