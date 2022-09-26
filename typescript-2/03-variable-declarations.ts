// Unlike traditional JavaScript,
// TypeScript encourages the use of let and const keyword for variable declarations.

// Both let and const support block-level scoping,
// and you CAN't redeclare a variable declared with let or const in the same block.
let x = 10;
const y = 20;

let x = 30; // Error: Cannot redeclare block-scoped variable 'x'.

// let declarations can be done without initialization,
// whereas const declarations are always initialized, with a value
// Also, const declarations once assigned a value, it cannot never be reassigned.

let sum
const title; // Error: const declarations must be initialized.
