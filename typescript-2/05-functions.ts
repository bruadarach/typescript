/* Function */
function add(num1: number, num2?: number): number {
  if (num2) return num1 + num2;
  else return num1;
}
add(5, 10);
add(5);

/* Interface */
interface Person {
  firstName: string;
  lastName?: string;
}
function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
  firstName: "Bruce",
};
fullName(p);
