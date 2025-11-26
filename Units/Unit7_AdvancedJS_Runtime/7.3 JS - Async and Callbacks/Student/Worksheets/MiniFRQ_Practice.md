# Mini FRQ – Async Timing & Callbacks

You have this code:

```js
let data;

function fetchData() {
  setTimeout(function () {
    data = "Here is your data!";
  }, 1000);
}

fetchData();
console.log("Data is:", data);
```

### Part (a)
Without changing the code, what will be logged by `console.log("Data is:", data);` and why?

### Part (b)
Explain why this pattern is a problem if we actually need to use `data` after it is "fetched".

### Part (c)
Rewrite the idea using a callback, so that `useData` is only called *after* the data is ready.

You should end up with something like:

```js
function fetchDataWithCallback(callback) {
  // ...
}

function useData(theData) {
  // ...
}
```

Write your version of both functions.
