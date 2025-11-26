# Mini FRQ Practice – OOP: Class & Inheritance

**Prompt:**

You are building a small game and decide to model characters using classes.

### Part (a)

Write a class `Character` with:

- Properties:
  - `name` (string)
  - `health` (number)
- Constructor:
  - Receives `name` and `health` and assigns them to the instance.
- Methods:
  - `takeDamage(amount)` that subtracts `amount` from `health`.
  - `isAlive()` that returns `true` if `health` is greater than 0, otherwise `false`.

_Write your class here:_



### Part (b)

Write a subclass `Wizard` that extends `Character` and adds:

- Property:
  - `mana` (number)
- Constructor:
  - Receives `name`, `health`, and `mana`.
  - Calls `super(name, health)` to reuse the parent constructor.
- Method:
  - `castSpell(cost)` that subtracts `cost` from `mana`.

_Write your subclass here:_



### Part (c)

Write a short code segment that:

- Creates a `Wizard` instance.
- Calls `castSpell()` and `takeDamage()` on it.
- Logs whether the wizard is still alive using `isAlive()`.

_Write your code here:_



