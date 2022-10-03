export {};

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Sujeong Ji";

let sentence: string = `My name is ${name}`;
console.log(sentence);

/* 
    1) static type checking
    2) intellisense  based on types
*/

let n: null = null;
let u: undefined = undefined;

/* Error 
let isNew: boolean = null;
let myName: string = undefined;
*/

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

/* Mixed type - tuple */
let person1: [string, number] = ["Chris", 22];

/* Enum - set of numeric values {}  */
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c); // 1

enum Color {
  pink = 5,
  yellow,
  violet,
}
let y: Color = Color.yellow;
console.log(y); // 6

/* Any - when using 3rd party library or when getting user inputs or unsure what a variable type would be */
let randomValue: any = 10;
randomValue = true;
randomValue = "Sujeong";

/* Any - typescript does not throw an error for Any type */
let myVariable: any = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();

/* Unknown - typescript throws an error for unknown type, similar to Any type */
/* However, Unknown type is more strict than Any type */
/* Howeever, You can't access any properties of unknown type */
let yourVariable: unknown = 10;

/* User-defined type guard */
/* if the object has the name property  or not */
/* the function name is 'hasName' */
/* this function is going to have a parameter of Object type any */
/* it is going to return  Object which contains name property as string */
function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(yourVariable)) {
  console.log(yourVariable.name);
}

/* Type assertion */
/* as => Type Assertion - when you are sure about the type of a variable */
(yourVariable as string).toUpperCase();

/* type inference - typescript infer the type of a variable */
let a;
a = 10;
a = true;

let b = 20;
b = true; // Error
b. // static type checking & intellisense

/* Union type - multiple types */
/* Any type doesn't provide intellisense */
let multiType: number | boolean;
multiType = 20;
multiType = true;

