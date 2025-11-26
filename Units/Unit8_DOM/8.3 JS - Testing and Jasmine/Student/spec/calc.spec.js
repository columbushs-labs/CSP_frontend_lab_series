// spec/calc.spec.js
// Specs for sum() and avg() used in a simple calculator.
// Follow the TDD flow from the lesson: red → green → refactor.
//
// TODO: Complete each spec so that you drive the implementation of sum() and avg().

describe('The function sum() used in the Calculator', () => {

  it('should be a function', () => {
    // TODO: expect typeof sum toBe 'function'
  });

  it('should return 0 for an empty array', () => {
    // TODO: expect sum([]) toBe 0
  });

  it('should throw an error if no parameter is provided', () => {
    // Hint: wrap the call in a function and use toThrow(new Error('No parameter provided'))
    // TODO
  });

  it('should always return a number', () => {
    // TODO: expect typeof sum([1, 1]) toBe 'number'
  });

  it('should return the correct value for various arrays', () => {
    // TODO: add expectations similar to the lesson:
    // sum([1]) -> 1, sum([1,2]) -> 3, etc.
  });

});

describe('The function avg() used in the Calculator', () => {

  it('should be a function', () => {
    // TODO: expect typeof avg toBe 'function'
  });

  it('should return the average of the array elements', () => {
    // Choose a few test cases, like:
    // avg([2, 4]) -> 3
    // avg([1, 2, 3, 4]) -> 2.5
    // TODO
  });

  it('should return 0 for an empty array', () => {
    // Decide how you want avg([]) to behave; a simple option is to return 0.
    // TODO
  });

  it('should throw an error if no parameter is provided', () => {
    // Similar to sum(), throw Error('No parameter provided')
    // TODO
  });

});
