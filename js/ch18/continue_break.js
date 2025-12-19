/*
continue breake

break: 나를 감싸고 있는 반복문 바로 빠져 나오기
continue: for문인 경우 증감식 순서로 바로 가고, while문이었으면 조건식 순서로 바로 간다
*/

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

console.log('-----------------');

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

console.log('-----------------');

for (let i = 1; i < 10; i++) {
  for (let k = 0; k < 10; k++) {
    if (k === 5) {
      break;
    }
    console.log(`i:${i}, k:${k}`);
  }
}

console.log('-----------------반복문에 레이블 지정, 별명 지정');

outer: for (let i = 1; i < 10; i++) {
  for (let k = 0; k < 10; k++) {
    if (k === 5) {
      break outer; // 바깥쪽 for문 박살
    }
    console.log(`i:${i}, k:${k}`);
  }
}

console.log('----------------- continue outer');

outer:
for (let i = 1; i < 10; i++) {
    for (let k = 0; k < 10; k++) {
        if (k === 5) {
        continue outer; // 안쪽 for문 뒤에 내용이 없다면 break;랑 같다
        }
        console.log(`i:${i}, k:${k}`);
    }
}
