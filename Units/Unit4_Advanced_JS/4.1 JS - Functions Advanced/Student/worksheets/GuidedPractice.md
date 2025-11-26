# 4.1 JS Functions Advanced – Worksheet
## Guided Practice

### Part 1 – Declarations vs Expressions

1.
```js
function calcSum(x, y) {
  return x + y;
}

calcSum(12, 23);
```

In your own words, explain what this code does and when `calcSum` is available to use in the file.



2.
```js
const calcSumExpr = function (x, y) {
  return x + y;
};
```

What is different about this definition compared to the previous one?



3. Why can a function **declaration** be called before it is written in the code, but a function **expression** cannot?



### Part 2 – Function Expressions and Variables

4.
```js
const welcomeMessage = function (message) {
  console.log(message);
};

welcomeMessage("So nice to have you here! Welcome!");
```

What will this code print? Why?



5. If we write:

```js
const anotherGreeting = welcomeMessage;
anotherGreeting("Hello again!");
```

What gets printed and why does `anotherGreeting` work?



### Part 3 – Callbacks and setTimeout

6.
```js
function eatDinner() {
  console.log("Eating the dinner!");
}

function eatDessert() {
  console.log("Eating the dessert!");
}

eatDinner();
eatDessert();
```

What is the output and why?



7.
```js
function eatDinner() {
  setTimeout(function () {
    console.log("Eating the dinner!");
  }, 1000);
}

function eatDessert() {
  console.log("Eating the dessert!");
}

eatDinner();
eatDessert();
```

What is the output and why does the order change compared to the previous example?



### Part 4 – Anonymous Functions as Callbacks

8.
```js
setTimeout(function () {
  console.log("I am anonymous and will execute after 1 second.");
}, 1000);
```

Why is the function inside `setTimeout` called **anonymous**?



9. When would you choose to use an anonymous function instead of a named one?



