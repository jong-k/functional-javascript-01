/*
제너레이터 함수
- 호출되면 제너레이터 객체를 반환

일반 함수
- 호출되면 코드를 실행
- 하나의 값을 반환
 */

// 제너레이터 함수는 * 키워드를 function 뒤 혹은 함수명 앞에 붙일 수 있음
function* generateSequence1() {
  yield 1;
  yield 2;
  yield 3;
}

// 제너레이터 함수는 * 키워드를 function 뒤 혹은 함수명 앞에 붙일 수 있음
function *generateSequence2() {
  yield 1;
  yield 2;
  return 3; // 이터러블을 바로 종료
}

const gen1 = generateSequence1();
for (const a of gen1) console.log(a); // 1 2 3

const gen2 = generateSequence2();
for (const a of gen2) console.log(a); // 1 2

console.clear();

const gen3 = generateSequence1();
console.log(gen3.next()); // {value: 1, done: false}
console.log(gen3.next()); // {value: 2, done: false}
console.log(gen3.next()); // {value: 3, done: false}
console.log(gen3.next()); // {value: undefined, done: true}

const gen4 = generateSequence2();
console.log(gen4.next()); // {value: 1, done: false}
console.log(gen4.next()); // {value: 2, done: false}
console.log(gen4.next()); // {value: 3, done: true}
console.log(gen4.next()); // {value: undefined, done: true}