// string
let car:string = 'bmw';
//car = 3; // 에러 발생


// number
let age:number = 30;


// string or number => "Union Type"
/* 문자 or 숫자 들어올 수 있는 변수는 어떻게 만듭니까? */
// 일단, 가능한 여러 타입 중, 한 가지 타입의 값이 변수에 할당되면, 다른 타입은 할당 불가
let unionVariable:string | number  = 'sujeong'


// boolean
let isAdumt:boolean = true;


// 타입 커스터마이징 => 타입 변수명은 첫글자 대문자로 작성. 일반 변수와 차별화
type Mytype = string | number | boolean 
let result:Mytype = true;


// array
let a:number[] = [1,2,3];
let b:Array<number> = [1,2,3];

let week1:string[] = ['mon', 'tue', 'wed']
let week2:Array<string> = ['thur', 'Fri', 'Sat', 'Sun']
//week1.push(2) // 문자열 배열에 숫자 추가하면, 에러 발생

let whichlist:string[] | number[]  = [1,2,3]

let unionList:(number | string)[] = [1,'2',3]; // number or string possible!

// object
let member:{name : string} = {name: 'suji'} // === let member = { name: 'suji' } in JS
let membership:{name? : string} = { } //=> name 이라는 속성이 들어올 수도 있고, 안들어올 수도 있다는 option 임을 명시함.
                                  // => name 속성이 안들어와도 오류내지 말아달라고 적음.

type Rule = { phone : number }
let minji:Rule = {phone: 123456}

type Dog = {
    [key :string] : string // 글자로 된 모든 Object (키)속성 타입은 :string 이어야 한다.
}
let Lucky:Dog = { breed: "Poodle", age: '7'}

let unionObject:{ a: string | number} = {a : 123}

// tuple : 배열과 비슷한 모양인데, 인덱스별로 타입이 다를 때 사용 가능
let tuple:[string, number];
tuple=['string',1];
//tuple=[1, 'string']; // 에러 발생

type Info = [string, number]
let sujeong:Info = ['suji', 25]

tuple[0].toLowerCase() // 문자열이므로 사용 가능
//tuple[1].toLowerCase() //Property 'toLowerCase' does not exist on type 'number'.ts(2339)


// void, naver
// void: 함수에서 아무 것도 반환하지 않을 때 사용
function sayHello():void {
    console.log('hello')
}


// never: 항상 에러를 반환하거나, 영원히 끝나지 않는 함수의 타입 (예를 들면 while 무한 반복)
function showError():never {
    throw new Error();
}

function infLoop():never {
    while(true) {
        // do something..
    }
}  


// enum: 비슷한 값들끼리 묶어줌. enum에 수동으로 값을 주지 않으면, 자동으로 0부터 1씩 증가하면서 할당됨 
// : 열거형으로 이름이 있는 상수들의 집합을 정의할 수 있습니다. 

// enum에는 숫자(number)인 값이 할당된다면, 양방향 매칭이 가능! 
// : (I think) 이 경우에는, 키로만 벨류값를 부를 수 있는 것이 아니라, 벨류로도 키값을 부를 수 있어서 좋음. 

enum Days { // enum에 값을 할당해준 경우
    Mon = 3, // (enum member) Os.Android = 3 
    Thu = 10, // (enum member) Os.Android = 10
    Wed // (enum member) Os.Android = 11
};


/* enum -> JS로 컴파일된 결과 확인
"use strict";
var Os;
(function (Os) { // Os라는 객제차 만들어 졌고, 아래 요소들은 양방향으로 맵핑이 되어 있음.
    Os[Os["window"] = 0] = "window";
    Os[Os["Ios"] = 1] = "Ios";
    Os[Os["Android"] = 2] = "Android"; // (enum member) Os.Android = 2
})(Os || (Os = {}));

console.log(Os[0]) // [LOG] "Ios"
console.log(Os['Ios']) // 10 
*/


// enum에 문자열(string) 값이 할당된다면, 단방향 매칭만 가능!

enum Os {
    Window = 'win',
    Ios ='ios', 
    Android = 'and'
};

/* //=> 결론적으로, 위 코드는 아래와 같은 모습으로 변환됨을 의미함
const Os = {
    window : 'win',
    Ios : 'ios', 
    Android : 'and'
};
*/


// 이렇게 myOs를 선언해두면, Window, Ios, Android만 입력할 수 있게 됨. 
//=> 특정 값만 입력하도록 강제하고 싶을 때, 그리고 그 값들이 뭔가 공통점이 있을 때 사용함. 
let myOs:Os;

myOs = Os.Window


// null, undefined
let c:null = null;
let d:undefined = undefined;