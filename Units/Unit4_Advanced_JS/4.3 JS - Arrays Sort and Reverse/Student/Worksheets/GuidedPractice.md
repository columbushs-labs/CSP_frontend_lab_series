# Guided Practice – JS Arrays: sort() & reverse()

Work through these questions **before** coding the lab. You can answer on this page or in your notebook.

---

### 1. Concept Check: Default sort behavior

1. What does `.sort()` do to an array **by default** if you do *not* provide a compare function?
2. Look at this array:  

   ```js
   const nums = [22, 23, 99, 68, 1, 0, 9, 112];
   ```

   If we call `nums.sort()` with no compare function, will `9` come before or after `68`? Why?

---

### 2. Compare function thinking

Imagine we call:

```js
nums.sort((a, b) => a - b);
```

1. If `a` is 3 and `b` is 10, what is `a - b`? Is that positive, negative, or zero?  
2. What does a **negative** result tell `.sort()` about the order of `a` and `b`?
3. What does a **positive** result tell `.sort()`?

---

### 3. Strings and Unicode

Consider this array:

```js
const words = ["A", "a", "Apple", "banana"];
```

1. If we call `words.sort()`, which element do you think will appear **first**? Why?
2. Why do uppercase letters usually appear before lowercase letters when sorting?

---

### 4. Reverse in place

1. In your own words, what does it mean that `.reverse()` reverses an array **in place**?
2. If you have:

   ```js
   const arr1 = ["one", "two", "three"];
   const arr2 = arr1.reverse();
   ```

   After this code runs, what is the value of `arr1`? What about `arr2`?

---

### 5. Predict the output

Without running the code, predict the final logged array:

```js
const data = [5, 10, 1, 20];
data.sort((a, b) => b - a);
console.log(data);
```

Write your predicted output here: `____________________________`

Then, run it later and check your prediction!
