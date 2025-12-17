/*
if문 중첩 가능
if(식1){
    if(식1-1){
        식1이 true면서, 식1-1도 true여야 실행
    }
    식 1이 true라면 무조건 실행
}
*/
const score = parseInt(Math.random() * 81.0) + 20;
let result;

if ( score >=90) {
    result = 'A';   
    if (score >= 98) {
        result = result + '+';
    } 
    console.log(result);
}