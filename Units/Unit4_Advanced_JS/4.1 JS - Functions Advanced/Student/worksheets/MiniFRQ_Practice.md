# 4.1 JS Functions Advanced – Worksheet
## Mini FRQ – Callback Utility Functions

You will design a small set of utility functions that work with callbacks and flexible arguments.

---

### Part 1 – Data Flow

Explain, in 2–3 sentences, what it means to “pass a function as an argument” and why this can be useful.



---

### Part 2 – Required Functions (Pseudocode)

Write pseudocode for:

1. `runWithDelay(callback, delayMs)`  
   - Wait `delayMs` milliseconds, then call `callback`.

2. `runManyTimes(callback, times)`  
   - Call `callback` exactly `times` times.

3. `logAllWithPrefix(prefix)`  
   - Returns a new function that:
     - uses the `arguments` object
     - logs each argument with the given prefix in front.



---

### Part 3 – Edge Cases

What should your functions do if:

- `times` is `0` or negative in `runManyTimes`?
- `delayMs` is not a number?
- `logAllWithPrefix` is called with no arguments when used?

Write 1–2 sentences for each.



