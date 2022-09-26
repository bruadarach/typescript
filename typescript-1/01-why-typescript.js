/*

    1. "타입"이 결정되는 시점
    - JavaScript는 동적언어로,런타임(실행되는 시점)에 타입이 결정 되고, 오류가 발견됨.
        => 개발자가 실수를 하게 되면, 사용자가 그 오류를 볼 수 있게됨. 

    <-> Java, TypeScript 같은 정적언어는, 컴파일 타임에 타입이 결정되고, 오류가 발견됨. 
        => 그래서 코드 작성 시간은 길어지겠지만, 초기에 생각을 많이해서 코드를 짠다면, 안정적이고 빠르게 작업을 진행할 수 있는 장점이 있음. 

    2. TypeScript 
    https://www.typescriptlang.org/pt/play?#code/GYVwdgxgLglg9mABAQwCaoBRhAWwIwA0i2OATAJSIDeAUIvYhAgM5wA2ApgHRtwDmWXHgDUJCgG4aAXxo00mcuMQB6ZYgByydSuUBeAHyJwqDsBhgOqRMKNgTZi1d0atc9BjyKdL7aoOI8a1t7c0tEZ011N0xCCW8AZmiMeIIAFgIAVi9VRAB2HX94wAiewA-JxEAPccAMIcAUpsRAFm7AHaHAChauREAZzsBfUcRAGs7AFkXAJBrAEXGA0kAfTsRACDHAQYHADVXAA5rEQBdxxEALVcrxwBqBwEqxwAjVwBOmwBcuokAW0cAUVsAcQcRAEJ7AD9rAABrEQBwewF2BnerAAcnEQD4ZwBFRwARewA+o4gdsNAME1gBDx1qIJIAcgAFhw2LwYUQYQB3OAAJzYqBhlByCKRcAx2KsfkMgA5uwAJ44AX0cAI82IQAqzYAXVcAC5NcIA
    여기에 가서 JS코드를 넣으면, 에러가 발생함

        - 예)   Errors in code
                Parameter 'num1' implicitly has an 'any' type.
                Parameter 'num2' implicitly has an 'any' type.
                Expected 2 arguments, but got 0.
                Expected 2 arguments, but got 1.
                Expected 2 arguments, but got 3.


    3. TypeScritp 장점
        - 함수를 처음 만들 때 의도했던 방식 외에 다른 방식은 모두 에러로 표시됨.  
        - 다른 사람이 만든 함수를 사용할 때, 몇 개의 인수를 어떤 타입으로 전달해야 하는지 일일히 코드를 뒤져볼 필요가 없음.
            => 함수명을 입력하고 괄호를 열면, 함수에 관한 안내가 자동으로 됨. 


*/



/* 자바스크립트 코드로 weird part 확인 */
console.log([1,2,3] + false)  // "1,2,3false"

function devide(a, b) {
    return a / b;
}
devide('hello world!') // NaN //=> 2개의 인자를 받지 않아도, 숫자가 아니어도 에러가 발생안됨.

function add(num1, num2) {
    console.log(num1+num2)
}

add(); // NaN //=> undefined + undefined = NaN
add(1); // NaN //=> 1 + undefined = NaN
add(1,2); // 3
add(3,4,5); // 7 //=> 3번째 인수는 무시됨. 만약 리턴값을 12를 예상하고 이 함수를 사용했다면, 어디서 버그가 발생했는지 찾아봐야 했을 것임.  
add('hello', 'world') // helloworld //=> 문자열도 더해짐.


function showItems(arr) {
    arr.forEach((item)=>{
        console.log(item)
    })
}

showItems([1,2,3]) //=> 배열 전달 시 함수 작동 잘됨.
// 1
// 2
// 3

showItems(1,2,3) //=> 타입 에러 발생
// VM305:2 Uncaught TypeError: arr.forEach is not a function


/* 2. 타입스크립트로 위 코드의 오류 확인 

    Errors in code
    Parameter 'num1' implicitly has an 'any' type.
    Parameter 'num2' implicitly has an 'any' type.
    Expected 2 arguments, but got 0.
    Expected 2 arguments, but got 1.
    Expected 2 arguments, but got 3.
*/ 


/* 3. 타입스크립트를 사용하여 오류 해결 */
function add(num1:number, num2:number) {
    console.log(num1+num2);
}

// add();
// add(1); 
add(1,2); 
// add(3,4,5);  
// add('hello', 'world')


function showItems(arr:number[]) {
    arr.forEach((item)=>{
        console.log(item)
    })
}

showItems([1,2,3])

// showItems(1,2,3)

