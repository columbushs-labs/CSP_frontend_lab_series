# CheatSheet – Conditionals & Loops

## Conditionals
```js
if (condition) {
  // do something
} else if (anotherCondition) {
  // do something else
} else {
  // default
}
```

- Comparison: `===`, `!==`, `>`, `>=`, `<`, `<=`
- Logical: `&&` (AND), `||` (OR), `!` (NOT)
- Divisible by n: `x % n === 0`

## Loops
```js
for (let i = 0; i < 5; i++) { /* ... */ }

let n = 3;
while (n > 0) { /* ...; n--; */ }

let g;
do { g = prompt("guess"); } while (g !== "yes");
```

## Random Numbers
- Dice (1–6): `Math.floor(Math.random() * 6) + 1`
- Number 1–10: `Math.floor(Math.random() * 10) + 1`

## Strings
- Lowercase: `str.toLowerCase()`
- Trim: `str.trim()`
- Convert input to number: `Number(prompt("..."))`
