/* ===========================================================
   Lab 5.2 – OOP: Class & Inheritance
   Practice using class syntax, constructors, and inheritance with extends.
   =========================================================== */

// 🎲 Task 1: Refactor Monopoly players into a Player class
// Use the same squares array from the previous lessons:
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// 1. Create a class Player that:
//    - has a constructor(name, color)
//    - sets this.name, this.color, this.position (0), this.cash (1000)
//    - has a move() method that rolls a dice (1-6), updates position (wrap with % squares.length),
//      updates cash, and logs "Game over for <name>." if cash < 0
//    - has a displayInfo() method that logs "<name> is at position <position> and has <cash>€"
//
// 2. Create three players using `new Player(...)`.
// 3. Simulate two turns for each player by calling move() twice.
// 4. Call displayInfo() on each player.

// TODO: define the Player class here


// TODO: create three instances (player1, player2, player3) here


// TODO: simulate two turns for each player and display their info



// 📐 Task 2: Rectangle & Square classes
// Follow the exercise from the lesson:
// - class Rectangle with:
//    - width, height properties
//    - constructor(width, height)
//    - calculatePerimeter() method
//    - calculateArea() method
// - class Square extends Rectangle with:
//    - side property (equal to both width and height)
//    - constructor(side) that calls super(...)
//
// Then use the classes like this:
//
//   const r1 = new Rectangle(6, 7);
//   console.log("Perimeter of r1 =", r1.calculatePerimeter()); // 26
//   console.log("Area of r1 =", r1.calculateArea());           // 42
//
//   const s1 = new Square(5);
//   console.log("Perimeter of s1 =", s1.calculatePerimeter()); // 20
//   console.log("Area of s1 =", s1.calculateArea());           // 25

// TODO: implement Rectangle class


// TODO: implement Square class that extends Rectangle


// TODO: create a few rectangles and squares and log their perimeter/area



// 🐾 Task 3: Animal inheritance
// Based on the lesson example:
// - class Animal with constructor(name, mainColor, sound)
//   and a scream(intensity) method that logs the sound with ! repeated intensity times.
// - class Cat extends Animal, adds nbOfLegs, and calls super(...) for shared properties.
// - class Chameleon extends Animal, overrides the constructor to always use
//   mainColor "green" and sound "...", and adds changeColor(newColor) that updates mainColor.
//
// Steps:
// 1. Implement Animal, Cat, and Chameleon classes.
// 2. Create a Cat instance (like "Garfield") and call scream() with different intensities.
// 3. Create a Chameleon instance (like "Pascal"), change its color, and log the result.

// TODO: implement Animal class


// TODO: implement Cat class that extends Animal


// TODO: implement Chameleon class that extends Animal


// TODO: create instances and test scream() and changeColor()



// 🤔 Task 4: Reflection (comment only)
/*
1. In your own words, what does the `extends` keyword do in a class declaration?
2. What is the purpose of calling `super(...)` inside a subclass constructor?
3. Pick one of the OOP concepts from the lesson (inheritance, abstraction, polymorphism, encapsulation)
   and describe how you saw it in this lab.
*/
