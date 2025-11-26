/* Lab 7.4 – Context & Invocation (Real‑World OOP Focus)
   Practice using this, method invocation, constructor invocation, bind, call, apply.
*/

console.log("Lab 7.4 loaded.");

// Task 1 – Object with methods + this
// Build a user object with name + loginCount and a method increment().
// TODO: create user object and test increment()


// Task 2 – Losing context in callbacks
// create user2 with a greet() method. Pass greet as a callback to setTimeout → it loses this.
// TODO: demonstrate the bug, then fix using bind()


// Task 3 – Constructor function + this
// Create Product(name, price). Instances should have a method getInfo() using this.
// TODO


// Task 4 – Reusing a method with call/apply
// Create a standalone function logPurchase(quantity) that prints name & quantity using this.
// TODO: call it with two different product objects using call and apply


// Task 5 – Method extraction bug
// Given an object with a calculateTotal method, assigning it to a variable loses this.
// TODO: fix using bind()


// Reflection
/*
1. Why does extracting a method into a standalone variable often break this?
2. Why does bind() fix the issue?
3. Give an example where call/apply is useful in real apps.
*/
