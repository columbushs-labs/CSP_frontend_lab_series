/* ===========================================================
   Lab 7.1 – Variable Scope, Hoisting & Shadowing
   Practice working with global / function / block scope, var vs let/const,
   hoisting behavior, and variable shadowing.
   =========================================================== */

// 👀 Task 1: Global vs function scope with var and let
// 1. Create a global variable using var called globalVar and set it to a string.
// 2. Create a function testScope() that:
//    - declares a local variable localVar using var
//    - logs both globalVar and localVar
// 3. Outside the function, try to log localVar and explain what happens in a comment.

// TODO: write your global var and function here


// 🔁 Task 2: Block scope in if / for with let vs var
// 1. Create an if statement (if (true)) that:
//    - declares a variable nameVar with var
//    - declares a variable nameLet with let
//    - logs both inside the if block
// 2. After the if block, log nameVar and nameLet.
//    - In comments, explain which one is available and why.
// 3. Repeat the experiment using a for loop and a counter iVar (var) vs iLet (let).

// TODO: write your if and for experiments here


// ⏫ Task 3: Hoisting experiments
// IMPORTANT: To avoid breaking your whole file, do these experiments
// ONE AT A TIME by commenting/uncommenting the code blocks.

// 3a. Uncomment this block and observe what gets logged.
//     Then comment it again when you're done.
//
// console.log("Before declaration, messageVar is:", messageVar);
// var messageVar = "Hello from var!";
// console.log("After declaration, messageVar is:", messageVar);
//
// In a comment, explain why the first log prints undefined instead of causing an error.

// 3b. Now try the same idea with let:
//     Uncomment this block and see what error you get.
//     Then comment it again so the rest of your file can run.
//
// console.log("Before declaration, messageLet is:", messageLet);
// let messageLet = "Hello from let!";
// console.log("After declaration, messageLet is:", messageLet);
//
// In a comment, explain what "temporal dead zone" means in this context.


// 🌗 Task 4: Shadowing
// Use this starter code:
let outer = "outer value";

function shadowExample() {
  // TODO:
  // 1. Inside the function, log outer.
  // 2. Then declare a new let outer = "inner value" inside the function.
  // 3. Log outer again inside the function.
  // 4. After calling shadowExample(), log outer one more time outside the function.
  //    - In comments, explain which value you see at each log and why.
}

shadowExample();


// 🧠 Task 5: Putting it all together
// Write a short code snippet where:
// - A global variable count is declared with let.
// - Inside a function, you declare a local variable count with let again (shadowing).
// - Inside an if block in that function, declare count with var and log it.
// - Add comments predicting which value will appear at each log and then test your predictions.

// TODO: write your combined scope/hoisting/shadowing snippet here


// 📝 Reflection (comment only)
/*
1. In your own words, what is the difference between function scope and block scope?
2. Why can using var inside loops or if statements sometimes cause unexpected bugs?
3. Describe one real situation in a larger app where variable shadowing might be helpful,
   and one where it could be confusing or dangerous.
*/
