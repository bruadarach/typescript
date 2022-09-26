// Unlike traditional JavaScript,
// TypeScript encourages the use of let and const keyword for variable declarations.
// Both let and const support block-level scoping,
// and you CAN't redeclare a variable declared with let or const in the same block.
var x = 10;
var y = 20;
var x = 30; // Error: Cannot redeclare block-scoped variable 'x'.
// let declarations can be done without initialization,
// whereas const declarations are always initialized, with a value
// Also, const declarations once assigned a value, it cannot never be reassigned.
var sum;
var title; // Error: const declarations must be initialized.
