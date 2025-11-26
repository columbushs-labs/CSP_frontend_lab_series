# Mini FRQ – Attributes, Nodes, and Events

You have this HTML:

```html
<section id="profile">
  <h2 id="profile-title">Student Profile</h2>
  <p id="status" class="status">Status: offline</p>
  <button id="toggle-status-btn">Go Online</button>
</section>
```

### Part (a)
Write JavaScript to:

- Get the current `class` of the `#status` element.
- Change its class to `"status online"` using `setAttribute` or `classList`.

### Part (b)
When the button `#toggle-status-btn` is clicked, toggle the text between
`"Status: offline"` and `"Status: online"`.

Describe how you would:

- Select the button and attach a click handler.
- Update the text content accordingly.

### Part (c)
Explain when you would use `event.currentTarget` inside the click handler and what
it would refer to in this example.
