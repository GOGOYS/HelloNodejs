const num1 = 100;
const num2 = 200;
const sum = num1 + num2;
console.log(sum);

const student = { 이름: "홍길동", 주소: "서울시", 전화번호: "010-3962-6770" };

console.table(student);

const intKor = [30, 40, 50, 60, 70, 80, 90, 100];

console.table(intKor);

const intEng = Array();

console.table(intEng);

intEng[0] = 100;
intEng[1] = 200;
console.table(intEng);

const intMath = Array();
for (let i = 0; i < 10; i++) {
  intMath[i] = Math.floor(Math.random() * (100 - 50)) + 50;
}
console.table(intMath);
console.table(student);
student.이름 = "이몽룡";
console.table(student);
student.국적 = "대한민국";
console.table(student);
