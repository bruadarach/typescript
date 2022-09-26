/* null 타입이 들어올 때 어떤 방식으로 핸들링하면 되는가? 

    에러 => Object is possibly 'null'

    아래 코드에서 에러가 나오는 이유는?
    : 개발자가 볼때는 title 무조건 dom이 들어간다고 보지만, 
      ts 입장에서는 dom이 있을수도있고, 없을 수도 있기 때문입니다.
*/

// 옵셔널 체이닝 사용: ? 
const title = document.querySelector('.title')
let value = 'Days';
title? title.textContent = value : null;

// 타입 단언(type assertion) 사용 (1): !
// const title = document.querySelector('.title')
// title!.textContent = "Days";


// 타입 단언 사용 (2): as
// const title = document.querySelector('.title') as HTMLElement;
// title.textContent = "Days";


const dayList = ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun']

for (let i = 0; i < dayList.length; i++) {
    const li = document.createElement('li')
    li.textContent = dayList[i]
    const day = document.querySelector('.day')
    day? day.appendChild(li) : null;
}





