# Guided Practice – OOP: Objects, Methods & `this`

Work through these questions before you start the coding lab.

---

### 1. Objects and properties

1. In your own words, what is an **object** in JavaScript?
2. Give an example of an object literal with at least two properties.
3. How is accessing a property with dot notation different from bracket notation? Give an example of each.

---

### 2. Methods

Consider this object:

```js
const car = {
  brand: "Tesla",
  speed: 0,
  accelerate(amount) {
    this.speed += amount;
  }
};
```

1. What is a **method**?
2. Which part of the object definition above is a method?
3. After we call `car.accelerate(20);`, what do you expect `car.speed` to be? Why?

---

### 3. The `this` keyword

1. In the context of an object method, what does `this` usually refer to?
2. In the Monopoly example from the PDF, why do we write `this.cash` and `this.position` instead of `player1.cash` directly inside the method?
3. What could go wrong if `this` does **not** refer to the object you expect?

---

### 4. Reusing code with functions that create objects

1. Why might it be helpful to write a function like `createPlayer(name, color)` instead of manually creating `player1`, `player2`, `player3` with copy-paste?
2. How does this help if later we need to change how a player is initialized?

---

### 5. Chuck Norris exercise

In the `chuck` object from the lesson:

```js
const chuck = {
  firstName: "Chuck",
  lastName: "Norris",
  jokes: [/* ... */],
  displayInfo() {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  }
};
```

1. What does `this.firstName` refer to when `chuck.displayInfo()` is called?
2. How could we use a method like `addJoke(joke)` to change the `jokes` array on the object?
