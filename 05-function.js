type Age = number;
type Name = string;

type Player = { // alias
    readonly name: Name, // readonly // no edit
    age?:Age, // optional
}


// function 
function playerMaker(name:string) : Player { // argument type // return type
    return {
        name
    }
}

const nico = playerMaker('nico');
nico.age = 12;

// arrow function 
const playerMaker = (name:string): Plater => ({name})
const nico = playerMaker('nico');
nico.age = 12;


// readonly
const names: readonly string[] = ["a", "b"]