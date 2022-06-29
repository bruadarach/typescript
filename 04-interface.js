interface User {
    name : string;
    age : number;
    gender?: string; // ? means optional
    readonly birthYear: number ; // 읽기 전용 속성이라 첫 할당 이후, 재할당/수정 불가 
    
}

let user : User = {
    name : 'Lucky',
    age: 30,
    
    
} 