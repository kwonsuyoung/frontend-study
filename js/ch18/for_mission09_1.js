const star = parseInt(Math.random() * 5.0) + 3;

console.log('star:', star);

for (let s = 0; s < star ; s++){
    let str = '';
    for (let i = star; i > s; i--) {
        str += '*';        
    }
    console.log(str);
}