// string
var car = 'bmw';
//car = 3; // 에러 발생
// number
var age = 30;
// string or number
var myname = 'sujeong';
// boolean
var isAdumt = true;
var result = true;
// array
var a = [1, 2, 3];
var b = [1, 2, 3];
var week1 = ['mon', 'tue', 'wed'];
var week2 = ['thur', 'Fri', 'Sat', 'Sun'];
//week1.push(2) // 문자열 배열에 숫자 추가하면, 에러 발생
var whichlist = [1, 2, 3];
// object
var member = { name: 'suji' }; // === let member = { name: 'suji' } in JS
var membership = {}; //=> name 이라는 속성이 들어올 수도 있고, 안들어올 수도 있다는 option 임을 명시함.
var minji = { phone: 123456 };
var Lucky = { breed: "Poodle", age: '7' };
// tuple : 배열과 비슷한 모양인데, 인덱스별로 타입이 다를 때 사용 가능
var tuple;
tuple = ['string', 1];
var sujeong = ['suji', 25];
tuple[0].toLowerCase(); // 문자열이므로 사용 가능
//tuple[1].toLowerCase() //Property 'toLowerCase' does not exist on type 'number'.ts(2339)
// void, naver
// void: 함수에서 아무 것도 반환하지 않을 때 사용
function sayHello() {
    console.log('hello');
}
// never: 항상 에러를 반환하거나, 영원히 끝나지 않는 함수의 타입 (예를 들면 while 무한 반복)
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) {
        // do something..
    }
}
// enum: 비슷한 값들끼리 묶어줌. enum에 수동으로 값을 주지 않으면, 자동으로 0부터 1씩 증가하면서 할당됨 
// : 열거형으로 이름이 있는 상수들의 집합을 정의할 수 있습니다. 
// enum에는 숫자(number)인 값이 할당된다면, 양방향 매칭이 가능! 
// : (I think) 이 경우에는, 키로만 벨류값를 부를 수 있는 것이 아니라, 벨류로도 키값을 부를 수 있어서 좋음. 
var Days;
(function (Days) {
    Days[Days["Mon"] = 3] = "Mon";
    Days[Days["Thu"] = 10] = "Thu";
    Days[Days["Wed"] = 11] = "Wed"; // (enum member) Os.Android = 11
})(Days || (Days = {}));
;
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
var Os;
(function (Os) {
    Os["Window"] = "win";
    Os["Ios"] = "ios";
    Os["Android"] = "and";
})(Os || (Os = {}));
;
/* //=> 결론적으로, 위 코드는 아래와 같은 모습으로 변환됨을 의미함
const Os = {
    window : 'win',
    Ios : 'ios',
    Android : 'and'
};
*/
// 이렇게 myOs를 선언해두면, Window, Ios, Android만 입력할 수 있게 됨. 
//=> 특정 값만 입력하도록 강제하고 싶을 때, 그리고 그 값들이 뭔가 공통점이 있을 때 사용함. 
var myOs;
myOs = Os.Window;
// null, undefined
var c = null;
var d = undefined;
