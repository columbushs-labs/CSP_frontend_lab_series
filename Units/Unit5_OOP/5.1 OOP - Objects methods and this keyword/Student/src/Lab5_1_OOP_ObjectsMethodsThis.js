/* ===========================================================
   Lab 5.1 – OOP: Objects, Methods & the `this` Keyword
   Practice creating JS objects with methods and using `this` correctly.
   =========================================================== */

// 👋 Task 1: Warm-up object with a method
// 1. Create a `teacher` object with properties: firstName, lastName, subject.
// 2. Add a method `introduce()` that logs: "Hi, I'm <firstName> <lastName> and I teach <subject>."
// 3. Call `teacher.introduce()`.

// TODO: define teacher object and method here


// 🎲 Task 2: Simple Monopoly turn with object methods
// Use the same idea from the lesson: a board of 16 squares with money values.

const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// 1. Create a function `createPlayer(name, color)` that returns a new player object.
//    Each player should start with:
//      - position: 0
//      - cash: 1000
//      - move() method:
//          - roll a dice (1–6)
//          - update position (wrap around using % squares.length)
//          - update cash based on squares[position]
//          - if cash < 0, log "Game over for <name>."
//      - displayInfo() method that logs
//          "<name> is at position <position> and has <cash>€"
//
// 2. Use your function to create 3 players: player1, player2, player3.
// 3. Simulate **two turns** for each player by calling `.move()` twice.
// 4. Then call `.displayInfo()` on each player.

// TODO: create createPlayer function


// TODO: create three player objects using createPlayer()


// TODO: simulate two turns for each player


// TODO: display info for each player


// 🤠 Task 3: Chuck Norris object & `this`
// Start from this base object:
const chuck = {
  firstName: "Chuck",
  lastName: "Norris",
  birthDate: new Date("1940-03-10"),
  jokes: [
    "Chuck Norris counted to infinity... Twice.",
    "Chuck Norris is the only man to ever defeat a brick wall in a game of tennis."
  ],
  displayInfo() {
    console.log(`My name is ${this.firstName} ${this.lastName} and I have ${this.jokes.length} jokes.`);
  },
  getAge() {
    // TODO:
    // - Use new Date() to get "now"
    // - Subtract this.birthDate from now to get milliseconds difference
    // - Convert to years (hint: 1000 * 60 * 60 * 24 * 365)
    // - Return the age rounded down with Math.floor
  },
  addJoke(joke) {
    // TODO: push the new joke into this.jokes (no return needed)
  },
  getRandomJoke() {
    // TODO:
    // - Pick a random index from 0 to this.jokes.length - 1
    // - Return the joke at that index
  }
};

// ✅ Use the chuck object:
chuck.displayInfo();
// console.log("getAge", chuck.getAge());
// chuck.addJoke("Chuck Norris can divide by zero.");
// console.log("getRandomJoke", chuck.getRandomJoke());
// ...add a few more jokes and test getRandomJoke multiple times.


// 🌟 Task 4: Design your own object with methods
// Create an object that models something from your world, for example:
//   - a `gameCharacter`, `car`, `student`, `playlist`, etc.
// Requirements:
//   - At least 3 properties
//   - At least 2 methods that use `this`
//   - Call the methods and log output to the console.

// TODO: design your own object with methods here


// 📝 Reflection (comment only)
/*
1. When we call player1.move(), what does `this` refer to inside the move() method?
2. Why is it helpful to group data (properties) and behavior (methods) together on an object?
3. Give one example from this lab where `this` would break if we accidentally used a regular function
   in the wrong way (for example, if we lost the object context).
*/
