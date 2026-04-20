const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
}

const log = console.log;
const m = new Map();
m.set('a', 1);
m.set('b', 2);

// map(log, m);
// [ 'a', 1 ]
// [ 'b', 2 ]

// map(([k, v]) => log(v * v), m);
// 1
// 4

log(
  new Map(
    map(
      ([k, v]) => [k, v * 3], m
    )
  )
); // Map(2) { 'a' => 3, 'b' => 6 }