const star = parseInt(Math.random() * 5.0) + 3

console.log("star:", star);

let str = "";
for (let i = 0; i < star; i++){
    str += "*";
    console.log(str);
}
