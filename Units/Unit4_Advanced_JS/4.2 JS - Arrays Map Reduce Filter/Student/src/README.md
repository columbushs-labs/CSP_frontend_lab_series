# 4.2 JS Arrays – Map, Reduce & Filter – Lab

In this lab, you will practice **advanced array methods** in JavaScript, based on the lesson **4.2 JS | Arrays – Map, Reduce & Filter**.

You will:

- Use **.map()** to transform arrays without mutating the original
- Use **.reduce()** to combine a list of values into a single value
- Use **.filter()** to keep only the items that match a condition
- Compare these to **.forEach()** and see when each is appropriate

---

## 🎯 Learning Goals (I can…)

- I can explain the difference between **forEach** and **map**.
- I can use **map** to create a new array from an existing one without mutating it.
- I can use **reduce** with an **accumulator** and **currentValue** (with or without an initial value).
- I can use **filter** to keep only the elements that match a condition.
- I can apply **map, reduce, and filter together** on real-world data.

---

## 📖 Pre-Lab

1. Read **4.2 JS | Arrays – Map, Reduce & Filter**.
2. Complete the worksheets in this order:
   - `GuidedPractice.md`
   - `VocabularyWorksheet.md`
   - `PseudocodePractice.md`
   - `MultipleArrayMethodsPractice.md`
   - `MiniFRQ_Practice.md`

These worksheets are designed to **build up to the lab** so that each new method feels like “one bite at a time”.

---

## 🧰 Setup

1. Open VS Code and navigate to:

   ```bash
   4.2 - JS Arrays Map Reduce Filter/Student_Version/4.2_JS_ArraysMapReduceFilter
   ```

2. Open the `src` folder and then:

   - Edit your JavaScript in: `src/Lab4_2_JSArraysMapReduceFilter.js`
   - Open `src/index.html` in your browser.

3. Open the browser console:

   - Right-click in the page → **Inspect** → **Console**.
   - Refresh after changes to rerun your code.

> ✅ **Only edit:** `src/Lab4_2_JSArraysMapReduceFilter.js` and the student worksheets in `worksheets/`.

---

## 📝 Lab Tasks – One Bite at a Time

### 🧩 Task 1 – Review: forEach vs map

1. Create this array:

   ```js
   const numbers = [1, 2, 3];
   ```

2. Use **forEach** to:
   - create a new array `doubledForEach`
   - push each number times 2 into `doubledForEach`

3. Use **map** to:
   - create a new array `doubledMap`
   - return each number times 2

4. Log both arrays and add a comment explaining the difference between using forEach vs map here.

---

### 🧩 Task 2 – Common map Pitfall

1. Copy this code:

   ```js
   const broken = [1, 2, 3].map(function (el) {
     el * 2;
   });
   console.log("broken:", broken);
   ```

2. Run it and see the result.

3. Fix it by adding `return` and store the result in `fixed`, then log `fixed`.

4. Add a comment explaining why `broken` is full of `undefined`.

---

### 🧩 Task 3 – map with Strings

1. Create an array:

   ```js
   const foods = ["pizza", "sandwiches", "ice cream"];
   ```

2. Use **map** to create a new array `capsFoods` where every food is uppercase.

3. Log both `foods` and `capsFoods` and add a comment explaining why `foods` did not change.

4. Using the cities example from the reading, create:

   ```js
   const cities = [
     "miami",
     "barcelona",
     "madrid",
     "amsterdam",
     "berlin",
     "sao paulo",
     "lisbon",
     "mexico city",
     "paris"
   ];
   ```

5. Use **map** to create a new array `capitalizedCities` where:
   - the first letter is uppercase
   - the rest of the string stays the same

---

### 🧩 Task 4 – map with Objects (Final Grades)

1. Copy the `students` array from the reading into this file.

2. Use **map** to create a new array `finalGrades` where **each element** is an object with:
   - `name`
   - `finalGrade` (as in the reading: projects average is 40%, final exam is 60%)

3. Use `Math.round` to round `finalGrade`.

4. Log `finalGrades`.

---

### 🧩 Task 5 – reduce for Sum and Product

1. Create:

   ```js
   const nums = [2, 4, 6, 8];
   ```

2. Use **reduce** to compute the sum `sumNums` of all numbers. Log the accumulator and currentValue each step.

3. Use **reduce** again to compute the product `productNums` of all numbers.

4. Now create:

   ```js
   const nums2 = [12, 9, 1, 8];
   ```

5. Use **reduce** with an **initial value of 23** to compute `totalWithInitial`. Log the accumulator and currentValue each step.

6. Add a comment explaining how the initial value changes the first call.

---

### 🧩 Task 6 – reduce with Strings and Objects

1. Create:

   ```js
   const words = ["This", "is", "one", "big", "string"];
   ```

2. Use **reduce** to concatenate all words into one string `bigString` (no spaces), then log it.

3. Copy the `people` array from the reading:

   ```js
   const people = [
     { name: "Candice", age: 25 },
     { name: "Tammy", age: 30 },
     { name: "Allen", age: 49 },
     { name: "Nettie", age: 21 },
     { name: "Stuart", age: 17 }
   ];
   ```

4. Use **reduce** with an initial value of `0` to compute the total sum of ages.

5. Compute the average age and log it.

---

### 🧩 Task 7 – filter Basics

1. Create:

   ```js
   const nums3 = [1, 2, 3, 4, 5, 6];
   ```

2. Use **filter** to create `evenNumbers` (numbers that are divisible by 2).

3. Log `evenNumbers`.

4. Copy the `people` array again and use **filter** to create `ofDrinkingAge` with only people age **21 or older**.

5. Log `ofDrinkingAge`.

---

### 🧩 Task 8 – Real-World filter Examples

1. Copy the `places` array from the reading into this file.

2. Use **filter** to create `placesWithPool` with only the places whose `pool` property is `true`.

3. Log `placesWithPool`.

4. Create a new filtered array `expensivePlacesWithPool` where:
   - `pool` is `true`
   - `price` is greater than or equal to 300

5. Log `expensivePlacesWithPool`.

6. Use **map** on `placesWithPool` to create an array `poolTitles` of just the titles of places that have a pool.

7. Log `poolTitles`.

---

### 🧩 Task 9 – Combining filter, map, and reduce (Mini Project)

Using the **menu** example from the reading:

1. Copy this:

   ```js
   const menu = [
     { name: "Carrots", calories: 150 },
     { name: "Steak", calories: 350 },
     { name: "Broccoli", calories: 120 },
     { name: "Chicken", calories: 250 },
     { name: "Pizza", calories: 520 }
   ];
   ```

2. Use **map** to create an array `caloriesOnly` with just the calorie numbers.

3. Use **reduce** on `caloriesOnly` to compute the total calories.

4. Compute the average calories and log it.

5. Use **filter** to create `highCalorieFoods` with items that have more than 300 calories.

6. Use **map** on `highCalorieFoods` to create `highCalorieNames` containing only the names of those foods.

7. Log `highCalorieNames`.

---

## 🚀 Stretch Goals (Optional)

- Given the `product` with `reviews` from the reading:
  - Use **reduce** to compute the average rating.
  - Use **filter** to keep only reviews with a rating of 4 or 5.
  - Use **map** to create an array of review comments from only the high-rated reviews.

- Given `const numbers = [1, 60, 112, 123, 100, 99, 73, 45];`
  - Use **filter** to keep only numbers **greater than 42** and **odd**.
  - Use **reduce** to compute their sum.

---

## 🎟 Exit Ticket

Answer briefly:

1. In your own words, what is the main difference between **forEach** and **map**?
2. What does **reduce** do that **map** and **filter** do not?
3. Why is it useful that `map`, `filter`, and `reduce` **do not mutate** the original array?

---

## ✅ Submission Checklist

- [ ] All TODOs in `Lab4_2_JSArraysMapReduceFilter.js` are completed or attempted.
- [ ] Your code runs without syntax errors.
- [ ] You used `map`, `reduce`, and `filter` at least once each.
- [ ] You used at least one combination of these methods together on the same dataset.
- [ ] All required worksheets in the `worksheets/` folder are completed.
- [ ] Exit ticket questions are answered.

