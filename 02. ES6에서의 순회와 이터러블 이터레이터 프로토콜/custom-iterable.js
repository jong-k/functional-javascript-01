const myIterable = {
  [Symbol.iterator]() {
    let i = 0;
    const values = [10, 20, 30];

    return {
      next() {
        if (i < values.length) {
          return { value: values[i++], done: false };
        }
        return { done: true };
      }
    }
  }
}

const iterator = myIterable[Symbol.iterator]();
console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { done: true }

// 1. for .. of 문 사용
for (const val of myIterable) console.log(val);
/*
10
20
30
*/

// 2. 스프레드 연산자 사용
const newMyIterable = [...myIterable];
console.log(newMyIterable); // [10, 20, 30]

// 3. 구조 분해 할당
const [a, b, c] = myIterable;
console.log(a, b, c); // 10 20 30
