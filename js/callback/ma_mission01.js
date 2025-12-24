const myArr = {
    '0': 3,
    '1': 88,
    '2': 76,
    '3': 9,
    '4': 34,
    '5': 65,
    lenght: 6,
    forEach: function (fn) {
        for (let i = 0; i < this.lenght; i++){
            fn(this[i],i)
        }
    }
};

// myArr[0] = 3;

// 'forEach': function () {
//     for (let i = 0; i < this.lenght; i++){
//         console.log(this[i]);

//         console.log(this[0]);
//     }
// }

const abc = (item, idx) => {
    console.log(`arr[${idx}]: ${item}`);
};

myArr.forEach(abc);

// myArr.forEach((item, idx) => {
//     console.log(`arr[${idx}]: ${item}`);
// });





// arr[0]: 3
// arr[1]: 88
// arr[2]: 76
// arr[3]: 9
// arr[4]: 34
// arr[5]: 65