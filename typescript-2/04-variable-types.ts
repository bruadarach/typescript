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

/* Enum */
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c); // 1
