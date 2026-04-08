ES6의 `for...of` 루프

- 인덱스 기반이 아닌 이터러블 프로토콜을 따라 추상적으로 반복
- 배열 외 Set, Map 등 다양한 이터러블 객체에서 일관된 방식으로 요소를 얻을 수 있음

이터러블 객체

- `Symbol.iterator`을 키로 가지는 메서드를 구현해야함
- 이 메서드가 반복을 수행할 이터레이터 객체를 반환
  - 이터레이터 객체는 `{ value, done }` 형태의 객체를 반환하는 `next()` 메서드를 구현해야함
- 예

```js
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
      },
    };
  },
};
```
