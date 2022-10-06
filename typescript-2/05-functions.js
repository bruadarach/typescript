export {};

exports.__esModule = true;
/* Function */
function add(num1, num2) {
  if (num2) return num1 + num2;
  else return num1;
}
add(5, 10);
add(5);
function fullName(person) {
  console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
  firstName: "Bruce",
};
fullName(p);
