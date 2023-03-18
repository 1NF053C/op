function letterGrades(){
    let score = getInput();
    let letter = getLetter(score);
    document.write(`${score} = ${letter}`)
}

function getInput(){
    return prompt('score (%) = ?')
}

function getLetter(percent){
    if(percent >= 90){
        return 'A';
    }
    else if(percent >= 80){
        return 'B';
    }
    else if(percent >= 70){
        return 'C';
    }
    else if(percent >= 60){
        return 'D'
    }
    else if(percent >= 50){
        return 'F'
    }
}