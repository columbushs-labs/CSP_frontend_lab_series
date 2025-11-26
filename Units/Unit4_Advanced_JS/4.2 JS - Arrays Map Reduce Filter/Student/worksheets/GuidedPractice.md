# 4.2 JS Arrays – Map, Reduce & Filter – Worksheet
## Guided Practice

### Part 1 – .map() vs .forEach()

1.
```js 
const array = [1, 2, 3];

const newArray = array.forEach(function (number) {
  return number * 2;
});

console.log(newArray); // <== undefined
```

In your own words, explain why `newArray` is `undefined` here.



2.
```js
const array = [1, 2, 3];

const newArray = array.map(function (number) {
  return number * 2;
});

console.log(newArray); // [2, 4, 6]
```

What does this code do and how is it different from the forEach example?



3. Write one sentence that explains the main difference between **forEach** and **map**.



### Part 2 – .map() with Arrays of Data

4.
```js
const foods = ["pizza", "sandwiches", "ice cream"];

const capsFoods = foods.map(function (food) {
  return food.toUpperCase();
});

console.log(capsFoods);
```

What will `capsFoods` contain and why?



5. Using your own words, explain what **“map transforms each element into something else”** means.



### Part 3 – .reduce() Basics

6.
```js
const numbers = [2, 4, 6, 8];

const total = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(total);
```

What is the value of `total` and what does `reduce` do step by step?



7.
```js
const numbers = [12, 9, 1, 8];

const total = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 23);
```

Why does the accumulator start at `23` instead of the first element of the array?



### Part 4 – .filter() Basics

8.
```js
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);
```

What does `evenNumbers` contain and how does `filter` decide what to keep?



9. How is `.filter()` different from `.map()` in terms of what it returns and what it’s used for?



