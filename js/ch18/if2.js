/**
조건이 여러개인 경우
if-elseif-else는 결국 그룹이기 때문에 하나만 실행된다.
if-elseif만 있는 경우는 하나도 실행이 안될 수도 있다. 만약 실행된다면, 하나만 실행된다.
if(식1){

}else if(식2){

}else if(식3){

}else {

}
 */

const value = parseInt(Math.random() * 10.0) + 1; // 1~10까지 랜덤값
console.log(`value: ${value}`);

if (value >= 8) {//value값이 8이상이라면
    console.log(`${value}값은 8이상이다.`);
// } else if (value % 2 != 0) { /
// } else if (!(value % 2 == 0)) {
} else if (value % 2 == 1) { // value값이 홀수라면
    console.log(`${value}값은 홀수이다.`);
} else { //8미만의 짝수
    console.log(`${value}값은 8미만이면서 짝수이다`);
}