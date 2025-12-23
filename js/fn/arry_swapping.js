/*
0번방 값과 1번방 값을 교환하는 작업
*/

const arr = [10, 20];
// -- start, start와 end 사이에는 10, 20 리터럴 금지

/*let arr_i1 = arr[0];
let arr_i2 = arr[1];

arr[0] = arr02;
arr[1] = arr01;
*/

// hint: 변수를 하나만 설정하면 된다고??
const temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// -- end
console.log(arr); // [20, 10]