
# Lesson 3.3 – CSS Advanced Selectors

## 🎯 Lesson Focus
CSS selectors allow developers to precisely target elements on a web page without cluttering HTML with extra classes or IDs. In this lesson, students learn how selector relationships mirror the structure of the HTML document tree and how advanced selectors enable cleaner, more maintainable styles.

---

## 1. The Document Tree (DOM Relationships)

### Discovery Question
Why does CSS care about how elements are nested inside each other in HTML?

### Task Question
Given the HTML below, describe the relationship between the `ul` and `li` elements.

```html
<ul>
  <li></li>
  <li></li>
</ul>
```

### Key Vocabulary
- Document Object Model (DOM)
- Parent
- Child
- Ancestor
- Descendant

### Technical Skills
- Interpreting HTML as a tree structure
- Identifying parent-child relationships
- Describing element relationships using correct terminology

---

## 2. Child Selectors (`>`)

### Discovery Question
Why might a developer want to style only *direct* children and not deeper elements?

### Task Question
Write a CSS selector that selects only the `li` elements that are **direct children** of an element with the id `menu`.

```css
__________________________________
```

### Key Vocabulary
- Child selector
- Direct child
- Combinator

### Technical Skills
- Writing child selectors using `>`
- Distinguishing between direct children and deeper descendants
- Avoiding unintended styling

---

## 3. Descendant Selectors (Space)

### Discovery Question
How is selecting *any descendant* different from selecting only direct children?

### Task Question
Given the HTML below, write a selector that targets the `em` element inside the `li` but not the `em` inside the `p`.

```html
<p><em>Text</em></p>
<ul>
  <li><em>Item</em></li>
</ul>
```

```css
__________________________________
```

### Key Vocabulary
- Descendant selector
- Ancestor
- Selector chain

### Technical Skills
- Writing descendant selectors
- Reading selector chains left to right
- Predicting which elements will be matched

---

## 4. Adjacent Sibling Selectors (`+`)

### Discovery Question
Why might CSS need a way to select elements that appear *next to* each other rather than nested?

### Task Question
Write a selector that selects the first `div` immediately following the element with id `target`.

```css
__________________________________
```

### Key Vocabulary
- Adjacent sibling
- Sibling elements

### Technical Skills
- Writing adjacent sibling selectors
- Understanding element order in HTML
- Avoiding confusion with descendant relationships

---

## 5. Multiple Selectors (`,`)

### Discovery Question
Why is repeating the same CSS rules for multiple elements considered bad practice?

### Task Question
Write one CSS rule that applies `color: blue;` to both `h1` and `h2` elements.

```css
__________________________________
```

### Key Vocabulary
- Multiple selectors
- Selector list
- Rule reuse

### Technical Skills
- Grouping selectors with commas
- Improving readability and maintainability
- Reducing redundant CSS

---

## 6. Attribute Selectors

### Discovery Question
How can attributes be used to target elements when classes or IDs are not available?

### Task Question
Write a selector that selects all links whose `href` attribute ends with `.pdf`.

```css
__________________________________
```

### Key Vocabulary
- Attribute selector
- Attribute value
- Substring match

### Technical Skills
- Writing attribute selectors
- Using operators like `=`, `^=`, `$=`, `*=`
- Targeting elements based on attribute patterns

---

## 🔁 Recap & Synthesis

By the end of this lesson, students should understand that:
- CSS selectors reflect the structure of the HTML document tree
- Different selectors target elements based on relationship, position, or attributes
- Advanced selectors reduce the need for extra HTML classes
- Reading selectors carefully is essential for writing correct and maintainable CSS

These skills prepare students for layout, component-based design, and more advanced styling techniques.
