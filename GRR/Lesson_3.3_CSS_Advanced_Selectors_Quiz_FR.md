
# Lesson 3.3 Quiz – CSS Advanced Selectors (Free Response)

**Name:** ___________________________  
**Date:** ___________________________  
**Class Period:** ___________________  

---

## Instructions
- Answer all questions.
- Do not modify the HTML unless instructed.
- Write valid CSS selectors where requested.

---

## Questions

### 1. Concept
In one or two sentences, explain why understanding the **HTML document tree (DOM)** is important when writing CSS selectors.

______________________________________________________________________________

______________________________________________________________________________

---

### 2. Child vs Descendant Selectors
Given the HTML below:

```html
<ul id="menu">
  <li>Item 1</li>
  <li><span>Item 2</span></li>
</ul>
```

a) Write a CSS selector that selects **only the `li` elements that are direct children** of the `ul`.

```css
__________________________________
```

b) Write a CSS selector that selects **all `span` elements inside the `ul`**, regardless of depth.

```css
__________________________________
```

---

### 3. Predicting Selector Matches
Given the HTML:

```html
<p><em>Text A</em></p>
<ul>
  <li><em>Text B</em></li>
</ul>
```

Which `em` element(s) would be selected by the following selector?

```css
ul em
```

Answer in words:
______________________________________________________________________________

---

### 4. Adjacent Sibling Selector
Given the HTML:

```html
<div></div>
<div id="target"></div>
<div></div>
<div></div>
```

Write a CSS selector that selects **only the first `div` immediately after** the element with id `target`.

```css
__________________________________
```

---

### 5. Multiple Selectors
Write one CSS rule that applies `color: blue;` to **both** `h1` and `h2` elements.

```css
__________________________________
```

---

### 6. Attribute Selectors
Given the HTML:

```html
<a href="docs/tutorial.pdf">Tutorial</a>
<a href="images/photo.png">Photo</a>
<a href="docs/guide.pdf">Guide</a>
```

Write a CSS selector that selects **only the links whose `href` ends with `.pdf`**.

```css
__________________________________
```

---

### 7. Reading Selectors
Explain in words what the following selector targets:

```css
section > p + span
```

______________________________________________________________________________

______________________________________________________________________________
