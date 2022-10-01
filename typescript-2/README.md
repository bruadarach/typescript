# 01. 타입스크립트란?

    타입스크립트 장점
        - 버그 줄이기 -> 유지/보수 용이 -> 질 좋은 코드 작성, 생산성 향상

    타입스크립트란?
        - TypeScript is superset of JavaScript
        - 타입스크립트는 자바스크립트를 기반으로 한 언어다.
        - 타입스크립트는 자바스크립트의 상위집합이다.
            -> 타입스크립트는 자바스크립트를 사용하며,
            -> 자바스크립트의 모든 기능을 가지고 있으면서도,
            -> 자바스크립트에 포함되지 않는 새로운 기능(장점)을 제공한다.
        - 타입스크립트는 자바스크립트로 컴파일되어 실행된다.

    타입스크립트의 특징?
        - 1. 자바스크립트와 달리 변수를 정할 때 변수값에 데이터 타입을 지정 가능할 수 있다. => 코드 예측 가능 => 디버깅 용이

                // JavaScript
                function add (a, b) {
                return a + b;
                }
                console.log(add('3', '5')); // '35' 출력

                // TypeScript
                function add (a: number, b: number) { // 데이터 타입 숫자
                    return a + b;
                }
                console.log(add('3', '5')); // 코드가 실행되기 전에 컴파일 에러 메세지 받음.

        - 2. 타입스크립트는 객체지향적이다. => class, interface, constructor, public & private 같은 access modifier 등 객체 지향의 프로그래밍 특성을 지원한다.
        - 3. 컴파일 타임의 오류를 잡을 수 있다 => 컴파일 타임에 타입 검사를 수행한다. => 컴파일 타임에 타입 검사를 수행하기 때문에, 코드가 실행되기 전에 에러를 발견할 수 있다.
                - tsc 명령어를 사용해서 타입스크립트를 자바스크립트로 변환이 가능하다.
                - 타입스크립트는 자바스크립트가 실행되는 환경에서 실행될 수 없다.
                - 그 이유는 자바스크립트가 실행될 수 있는 브라우저가 타입스크립트 코드를 이해할 수 없기 때문이다.
                - 따라서, 타입스크립트로 작성된 코드는 컴파일러를 통해 자바스크립트로 변환되어야 한다.
                - 컵파일 ? 어떤 언어의 코드를 다른 언어로 바꿔주는 변환 과정
                - 타입스크립트는 프로그래밍 언어인 동시에 타입스크립트를 자바스크립트로 변환해주는 컴파일러이기도 함.

# 02. 타입스크립트 개발 환경 설정

    - sudo npm install -g typescript (맥OS는 앞에 sudo 붙여야 전역으로 설치됨)

# 03. How to make an automatic recompile whenever there is a change?

    -  use the watch option of TypeScript compiler
    - tsc --watch / tsc -w
    - tsc -w main.ts (감시모드의 컴파일 프로세스를 실행시킴)

# 04. Error Message ?!

    let message: string
    Cannot redeclare block-scoped variable 'message'.ts(2451)

    - Why?
        : Because the file is treated as a script file, rather than a module file.
        : A Module has its own scope, whereas a script file shares the global scope.

    - Solution?
        : To get rid of the error, we need to tell the compiler that the file is a module file.
        : We need to add an export statement at the top of the file, which exports nothing.
        : export {}; statement is used to tell the compiler that the file is a module file.

# 05. 정적 타이핑 (Static Typing)

    - 타입스크립트는 정적 타이핑 기능을 자바스크립트에 제공함
    - Static Typing : 타입을 선언하고, 선언된 타입에 맞는 값만이 할당 또는 반환되어야 한다는 뜻

# 06. 타입 추론 (Type Inference)
