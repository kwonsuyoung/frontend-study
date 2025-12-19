const star = parseInt(Math.random() * 5.0) + 3;
console.log('star:', star);

for (let i = 0; i <= star; i++) {
    let str = '';
    for (let s = star; s > 0; s--) {
        if (s > i) {
            str += '_';
        } else {
            str += '*';
        }
    }
    console.log(str);
}


/*
______ star:6 / i: 0 / s: 6
_____* star:6 / i: 1 / s: 5
____** star:6 / i: 2 / s: 4
___*** star:6 / i: 3 / s: 3
__**** star:6 / i: 4 / s: 2
_***** star:6 / i: 5 / s: 1
****** star:6 / i: 6 / s: 0

    if (s > i) {
            str += '_';
        }else{
            str += '';
        }
*/
