const score = parseInt(Math.random() * 81.0) + 20;

if (score >= 90) {
    if (score >= 98) {
        console.log(`A+: ${score}점`);
    } else if (score >= 93 && score <= 97) {
        console.log(`A0: ${score}점`);
    } else {
        console.log(`A-: ${score}점`);
    }    
} else if (score >= 80) {
    if (score >= 88) {
        console.log(`B+: ${score}점`);
    } else if (score >= 83 && score <=87) {
        console.log(`B0: ${score}점`);
    } else {
        console.log(`B0: ${score}점`);
    }    
} else if (score >= 70) {
    if (score >= 78) {
        console.log(`C+: ${score}점`);
    } else if (score >= 73 && score <= 77) {
        console.log(`C0: ${score}점`);
    } else {
        console.log(`C-: ${score}점`);
    }    
} else if (score >= 60) {
    if (score >= 68) {
        console.log(`D+: ${score}점`);
    } else if (score >= 63 && score <= 67) {
        console.log(`D0: ${score}점`);
    } else {
        console.log(`D-: ${score}점`);
    }
} else {
    console.log(`F: ${score}점`);
}
