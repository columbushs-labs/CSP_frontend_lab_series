# Guided Practice – JS Objects (Lab 3.1)

## 1) Predict the Output (Don’t Run Yet)

A.
```js
const car = { make: "Honda", year: 1998 };
console.log(car.make);
console.log(car["year"]);
```
Prediction:
- Line 2: ________
- Line 3: ________

B.
```js
const obj = { a: 1 };
const key = "a";
console.log(obj[key]);
console.log(obj.key);
```
Prediction:
- Line 3: ________
- Line 4: ________
Why are they different? ______________________________________

---

## 2) Fix the Bug

```js
const student = { name: "Leo", grade: 10 };
const field = grade;
console.log(student[field]);
```

1. What error will happen? ___________________________________
2. Fix it (rewrite only the broken part):

```js
const field = ______________________;
```

---

## 3) Add / Update / Delete (Write the Code)

Start:
```js
const profile = { username: "skyblue", followers: 12 };
```

A) Add a new key `verified` with value `false` using dot OR brackets:
```js
______________________________________________________________
```

B) Update followers to 13:
```js
______________________________________________________________
```

C) Delete the key `verified`:
```js
______________________________________________________________
```

---

## 4) Mini Trace – for...in

Given:
```js
const scores = { a: 10, b: 20 };
for (let k in scores) {
  console.log(k);
}
```

What prints (in order)?  
1) ________  
2) ________  

What would you add to print the values too? (one line):
```js
______________________________________________________________
```
