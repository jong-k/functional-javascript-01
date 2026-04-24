  const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
    {name: '바지', price: 25000}
  ];

  // productNames 리스트 생성
  // 1. 기존 map
  const productNames1 = products.map(p => p.name);

  // 2. 직접 map 구현하고 사용하기
  const map = (f, iter) => {
    const res = [];
    for (const a of iter) {
      res.push(f(a));
    }
    return res;
  };
  const productNames2 = map(p => p.name, products);

  console.log('productNames1', productNames1) // productNames1 [ '반팔티', '긴팔티', '핸드폰케이스', '후드티', '바지' ]
  console.log('productNames2', productNames2) // productNames2 [ '반팔티', '긴팔티', '핸드폰케이스', '후드티', '바지' ]
