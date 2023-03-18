function sortNumbers(){
    let numbers = promptForNumbers();
    numbers.sort(compareFn)
    document.write(numbers);
}

function promptForNumbers(){
    return [
        prompt('a = ?'),
        prompt('b = ?'),
        prompt('c = ?')
    ].map(Number)
}

function compareFn(a, b){
    return a - b
}
