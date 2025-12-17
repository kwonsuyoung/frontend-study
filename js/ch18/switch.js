/*
switch(숫자값){
    case1:
        :(콜론)과 break; 키워드 사이의 코드가 실행이 된다.

        break;
    case2:
        숫자값이 2였을 때 실행하고 싶은 코드 작성
        break;
    case3:
        숫자값이 3이었을 때 실행하고 싶은 코드 작성
        break;
    default:
        if문의 else와 같다.
        break;
}
*/

/*
12, 1, 2 값이면 '겨울'
3,4,5 값이면 '봄'
6,7,8 값이면 '여름'
9,10,11 값이면 '가을'
*/
const mon = parseInt(Math.random() * 12.0) + 1;
console.log('mon:', mon);

// 숫자값이 나오면 break를 만날때까지 계속 진행
switch (mon) {
case 12:
    console.log('점점 추워진다');
case 1:
case 2:
    console.log('겨울');
    break;
case 3:
case 4:
case 5:
    console.log('봄');
    break;
case 6:
case 7:
case 8:
    console.log('여름');
    break;
case 9:
case 10:
case 11:
    console.log('가을');
    break;
default:
    console.log('다시 입력해주세요');
    break;
}
