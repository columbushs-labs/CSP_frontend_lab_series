# Guided Practice – OOP: Class & Inheritance

Answer these questions before you begin the coding lab.

---

### 1. Class basics

1. In your own words, what is a **class** in JavaScript?
2. What is the purpose of the **constructor** method inside a class?
3. How do we create a new instance of a class? Write a small example.

---

### 2. Constructor and `new`

Consider:

```js
class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1000;
  }
}
const p1 = new Player("Ana", "red");
```

1. What does the `new` keyword do in the line with `new Player("Ana", "red")`?
2. What will `p1.name` and `p1.cash` be after this line runs?
3. Why does `this` inside the constructor refer to the new object being created?

---

### 3. Inheritance with `extends`

Consider:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}
```

1. Why do we write `extends Animal` in the definition of `Dog`?
2. What is the purpose of `super(name)` inside the `Dog` constructor?
3. After `const d = new Dog("Fido", "Lab");`, what properties does `d` have?

---

### 4. Rectangle & Square

1. Why is it a good idea to have `Square` **extend** `Rectangle` instead of writing a totally separate class?
2. If `Rectangle` has a method `calculateArea()`, do we need to rewrite this method inside `Square`? Why or why not?

---

### 5. OOP concepts

Briefly describe each term in 1–2 sentences:

1. Inheritance  
2. Abstraction  
3. Polymorphism  
4. Encapsulation
