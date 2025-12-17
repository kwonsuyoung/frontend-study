// 강사님 정답

const score = parseInt(Math.random() * 81.0) + 20;
let result = 'F';

if (score >= 90) {
    result = "A";
} else if (score >= 80) {
    result = 'B';
} else if (score >= 70) {
    result = 'C';
} else if (score >= 60) {
    result = 'D'; 
} 
if (score >= 60) {
    //if (score == 100 || score % 10 >= 8) { result = result + '+'; }
    if (score == 100 || score % 10 >= 8) { result += '+'; }
    //else if (score % 10 >= 3) { result = result + '0'; }
    else if (score % 10 >= 3) { result += '0'; }
    else {result = result + '-'}
}
console.log(`${score}점: ${result}`);