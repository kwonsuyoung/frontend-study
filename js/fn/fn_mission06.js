//함수정의 / 리턴인지 보이드인지

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}

const findMax2 = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const arr = [10, 8, 4, 88, 65, 3];
const arr2 = [56, 43, 86, 54, 20, 100,52,156,5,57,203];
const max = findMax(arr); // 배열의 가장 큰 값이 리턴되도록
const max2 = findMax2(arr2); 

console.log('최대값:' , max);
console.log(`최대값: ${max2}`);