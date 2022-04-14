/*
변수의 선언 키워드 : var, const, let

var: java에서 static 변수 선언과 같다
const: 불변변수 java에서 final 선언과 같다
let : 일반적인 변수, JS에서는 변수의 타입을 지정하지 않는다.
    =변수에 대한 문제가 발생할 수 있다.
    =동적 type 변수(java는 정적type변수)
*/

var num = 10;
num = "대한민국";

let num1 = 10;
num1 = "우리나라";

var num = "Korea";

intNum = 100;
console.log(intNum);

for (let i = 0; i < 10; i++) {}
//let 키워드로 선언된 변수는 선언 블록을 벗어나면 소멸된다.
//console.log(i);

//var 키워드로 선언된 변수는 public static 이면서
//성질이 사납다. 가급적 사용하지 말것
for (var j = 0; j < 10; j++) {}
console.log(j);

//변수값을 이후에 변경해야 하는 경우는 const를 사용하면 안된다.
// for (const i = 0; i < 10; i++) {}
// console.log(i);
