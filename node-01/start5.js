const key = ["이름", "주소", "전화번호"];

const student = { 이름: "홍길동", 주소: "서울시", 전화번호: "00000000000" };

console.log(student["이름"]);
console.log(student[key[2]]);

//Json구조의 데이터 출력시 배열값에 담아서 다시출력?>?ㅇㅁㄹㄴ
for (let i = 0; i < key.length; i++) {
  console.log(key[i], student[key[i]]);
}

//json 데이터의 이름 속성을 별도로 추출하여 개별변수로 선언하기
const { 이름 } = student;
console.log(이름);

//Json 데이터를 return하는 함수
const studentFun = () => {
  return {
    user_name: "이몽룡",
    주소: "남원시",
    나이: 20,
  };
};

const { user_name, 나이 } = studentFun();

console.log(user_name, 나이);
