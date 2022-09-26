var a = 10;
a = 5;
/* Error Message !
let a: number
Type 'string' is not assignable to type 'number'.ts(2322)

: 재할당하려는 변수값이 숫자가 아니라 스트링이기 때문에 변수에 재할당될 수 없다.

But, 변수값에 숫자를 넣어도 또 오류가 발생

let a: number
Cannot redeclare block-scoped variable 'a'.ts(2451)

=> 블로그 해답: http://bitly.ws/ui8w
: The error "Cannot redeclare block-scoped variable" occurs
when we redeclare a variable in the same block or
when TypeScript uses global typings, which interfere with local variable names.
To solve the error, only declare a variable once in a block and use ES modules.


1. export {} 추가하고, 변수 재선언하면 에러가 사라진다.

 */
