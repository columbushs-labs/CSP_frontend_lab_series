# Mini FRQ – Scope & var vs let

You see this code:

```js
var total = 10;

function addToTotal(amount) {
  if (amount > 0) {
    var total = 0;
    total += amount;
    console.log("Inside if, total:", total);
  }
  console.log("After if, total:", total);
}

addToTotal(5);
console.log("Global total:", total);
```

1. Predict what each `console.log` will print and explain why.
2. Explain how scope and hoisting cause this behavior.
3. Rewrite the function so it correctly updates the global total using `let` or `const`.
