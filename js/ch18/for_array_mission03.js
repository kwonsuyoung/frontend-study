const arr = [3, 8, 11, 86, 43, 22, 27];

let even = 0, odd = 0;
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
        even += arr[i];    
    }else{
        odd += arr[i]
    }
}
console.log('짝수:', even);
console.log('홀수:', odd);

console.log(`짝수: ${even} \n홀수: ${odd}`);