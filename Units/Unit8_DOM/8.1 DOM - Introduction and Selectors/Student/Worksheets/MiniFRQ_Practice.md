# Mini FRQ – DOM Selection & Classes

You are given this HTML:

```html
<section id="dashboard">
  <h2>Stats</h2>
  <p class="stat">Visitors: 10</p>
  <p class="stat important">Sales: 3</p>
  <p class="stat">Signups: 5</p>
  <button id="boost-btn">Boost Sales</button>
</section>
```

### Part (a)
Write JavaScript to:

- Select the `<section>` using its id.
- Select all elements with class `"stat"`.

### Part (b)
Using your selections, write code to:

- Add the class `"highlighted"` to the paragraph with class `"important"`.
- Change the text of `"Sales: 3"` to `"Sales: 4"`.

### Part (c)
Describe how you would attach a click event to `#boost-btn` so that each
time it is clicked, the sales number increases by 1.
