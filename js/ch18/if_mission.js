const score = parseInt(Math.random() * 81.0) + 20;

console.log(score);

if (score >= 90) {
    console.log(`A: ${score}점`);
} else if (score >= 80) {
    console.log(`B: ${score}점`);
} else if (score >= 70) {
    console.log(`C: ${score}점`);
} else if (score >= 60) {
    console.log(`D: ${score}점`);
} else {
    console.log(`E: ${score}점`);
}
