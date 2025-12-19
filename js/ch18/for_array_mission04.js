const arr =[3,8,11,86,43,22,27];

let max = arr[0], min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }    
}

console.log('max:', max);
console.log('min:', min);