# Guided Practice – Value vs Reference & Mutable Data Types

Work through these questions **before** you start coding the lab.

---

### 1. Primitives vs non-primitives

1. Give two examples of **primitive** data types in JavaScript.
2. Give two examples of **non-primitive** data types in JavaScript.
3. When you assign a primitive value from one variable to another (e.g., `let b = a;`), what is actually copied?

---

### 2. Equality checks

Consider the following code:

```js
let x = 5;
let y = 5;

const obj1 = { value: 5 };
const obj2 = { value: 5 };
const obj3 = obj1;
```

1. What is the result of `x === y`? Explain why.
2. What is the result of `obj1 === obj2`? Explain why.
3. What is the result of `obj1 === obj3`? Explain why.

---

### 3. Copying objects

1. What is a **shallow copy**?
2. What is a **deep copy**?
3. Name one JavaScript technique for shallow copying an object.
4. Name one JavaScript technique for deep copying an object.

---

### 4. Copying arrays

Consider this array:

```js
const students = ["Ana", "John", "Fabio"];
```

1. Write down one method that can be used to copy this array **without** mutating the original.
2. What will happen to `students` if we do this:

   ```js
   const copy = students;
   copy.push("Lilian");
   ```

   Explain why.

---

### 5. Mutability and side effects

1. In your own words, what does it mean for an object or array to be **mutable**?
2. Why can mutating shared data lead to bugs in real-world applications?

