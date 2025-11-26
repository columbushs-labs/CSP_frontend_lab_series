# 2.1 Functions Intro – Worksheet
## Guided Practice

### Part 1 – Identify Parts of a Function

For each snippet, underline or label:

- the **function name**
- the **parameters** (if any)
- the **body** (the code inside `{ }`)
- the **invocation** (function call)

1.
```js
function sayHelloWorld() {
  console.log("Hello World!");
}

sayHelloWorld();
```

```
1. sayHelloWorld
2. none
3. console.log("Hello world")
4. sayHelloWorld();
```

2.
```js
function sayHello(name) {
  console.log(`Hello ${name}!`);
}

sayHello("Mary");
sayHello("John");
```

```
  1. sayHello
  2. name
  3. console.log(`Hello ${name}`)
  4. sayHello("Mary");
  4. sayHello("John");
```

3.
```js
function sayHelloToThree(classmate1, classmate2, classmate3) {
  console.log(`Hello ${classmate1}, ${classmate2} and ${classmate3}!`);
}

sayHelloToThree("Chris", "Joe", "Maria");
```


### Part 2 – Predict the Output

Write the exact output that will appear in the console.

4.
```js
function printName(name) {
  console.log(`Name is ${name}.`);
}

printName("Ana");
```

Output:
> 

5.
```js
function sayMessage(message) {
  console.log(message);
}

sayMessage("Functions are cool!");
sayMessage("DRY means Don't Repeat Yourself.");
```

Outputs:
> 


### Part 3 – Fix the Function

6. Fix the syntax errors:

```js
function greet {
  console.log("Hi!");
}

greet;
```

Write the corrected version below:


7. Fix the function so it correctly prints “Hello, Mary!”:

```js
function greet(name) {
  console.log("Hello, name!");
}

greet("Mary");
```

Corrected version:

