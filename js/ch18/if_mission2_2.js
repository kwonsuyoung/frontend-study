const score = parseInt(Math.random() * 81.0) + 20;
let result;

if (score >= 90) {
    result = "A";    
    if (score >= 98) {
        result = result + "+";
    } else if (score >= 93 && score <= 97) {
        result = result + '0';
    } else {
        result = result + '-';
    }  
} else if (score >= 80) {
    result = 'B';   
    if (score >= 88) {
        result = result + '+';
    } else if (score >= 83 && score <=87) {
        result = result + '0';
    } else {
        result = result + '-';
    }    
} else if (score >= 70) {
    result = 'C';   
    if (score >= 78) {
        result = result + '+';
    } else if (score >= 73 && score <= 77) {
        result = result + '0';
    } else {
        result = result + '-';
    }    
} else if (score >= 60) {
    result = 'D';   
    if (score >= 68) {
        result = result + '+';
    } else if (score >= 63 && score <= 67) {
        result = result + '0';
    } else {
        result = result + '-';
    }
} else {
    result = 'F';
}

console.log(`${score}점: ${result}`);